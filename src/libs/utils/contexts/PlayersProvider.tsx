import {
  raffleAbi,
  useReadRaffleGetNumberOfPlayers,
  useWatchRaffleRaffleEnterEvent,
} from '@lottery/generated/generated-hardhat';
import { TWalletAddress } from '@lottery/types';
import { createContext, useContext, useEffect, useState } from 'react';
import useLotteryContractAddress from '../../hooks/useLotteryContractAddress';
import { TLotteryEventTypeFn } from '../../types/lottery';

export type TPlayersContext = {
  playersEnteredLotterySinceWeStartedWatching: Set<TWalletAddress>;
  totalPlayers: number;
};

const PlayersContext = createContext<TPlayersContext | undefined>(undefined);

/**
 * @returns get current players in lottery from wagmi contract watch "useWatchRaffleRaffleEnterEvent" and sets it to "playersInLottery"
 * */
export const PlayersProvider = ({ children }: { children: React.ReactNode }) => {
  const { readContractParams } = useLotteryContractAddress();
  const { data: totalPlayersFromContract } = useReadRaffleGetNumberOfPlayers(readContractParams);
  /**
   * @dev total players in lottery
   * @description the total players in lottery from the contract and adds 1 every time a player enters the lottery using watch event
   */
  const [totalPlayers, setTotalPlayers] = useState<number>(0);
  const [initialLogCalledAddress, setInitialLogCalledAddress] = useState<boolean>(true);
  const [firstLogCalledAddress, setFirstLogCalledAddress] = useState<TWalletAddress | undefined>();
  /**
   * @dev player entered to lotter since we watch the Enter Lottery event
   * not the total players in lottery because when we dont watch there might be a chance of missing the event
   * when player entered in different sessions
   */
  const [
    playersEnteredLotterySinceWeStartedWatching,
    setPlayersEnteredLotterySinceWeStartedWatching,
  ] = useState<Set<TWalletAddress>>(new Set());

  useWatchRaffleRaffleEnterEvent({
    ...readContractParams,
    onLogs: (logs) => {
      setPlayersFromEnteredLotteryEvent(logs);
    },
  });
  useEffect(() => {
    setTotalPlayers(Number(totalPlayersFromContract || 0));
  }, [totalPlayersFromContract]);

  /**
   * @param logs
   * @dev as watch event keep on watching the last event triggered,
   * when we get the total players from contract the player shown in the log is already counted when totalPlayersFromContract is greater than 0
   * so to avoid double counting we need to check if the initial log called address is true then we need to set the first log called address
   * and not call the setPlayersEnteredLotterySinceWeStartedWatching
   * when a new player enters the lottery it adds the player to the set and increases the total players by 1
   */
  const setPlayersFromEnteredLotteryEvent: TLotteryEventTypeFn<typeof raffleAbi, 'RaffleEnter'> = (
    logs,
  ) => {
    const totalFromContract = Number(totalPlayersFromContract) || 0;

    const newPlayers = logs
      .map((log) => log.args.player)
      .filter((val) => !!val) as TWalletAddress[];

    if (initialLogCalledAddress && totalFromContract > 0) {
      setInitialLogCalledAddress(false);
      setFirstLogCalledAddress(newPlayers[0]);
      return;
    }

    setPlayersEnteredLotterySinceWeStartedWatching((prevUniquePlayers) => {
      const updatedUniquePlayers = new Set(prevUniquePlayers);
      newPlayers.forEach((player) => {
        if (player !== firstLogCalledAddress) {
          updatedUniquePlayers.add(player);
        }
      });
      setTotalPlayers(totalFromContract + updatedUniquePlayers.size);
      return updatedUniquePlayers;
    });
  };

  return (
    <PlayersContext.Provider value={{ playersEnteredLotterySinceWeStartedWatching, totalPlayers }}>
      {children}
    </PlayersContext.Provider>
  );
};

/**
 * @returns PlayersContext, which contains playersInLottery
 */
export const usePlayersContext = () => {
  const context = useContext(PlayersContext);
  if (!context) {
    throw new Error('usePlayersContext must be used within a PlayersProvider');
  }
  return context;
};

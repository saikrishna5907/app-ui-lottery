import { raffleAbi } from '@lottery/generated/generated-hardhat';
import { TWalletAddress } from '@lottery/types';
import { createContext, useContext, useState } from 'react';
import useLotteryContractAddress from '../../hooks/useLotteryContractAddress';
import { TLotteryEventTypeFn } from '../../types/lottery';

export type TPlayersContext = {
  playersInLottery: TWalletAddress[];
};

const PlayersContext = createContext<TPlayersContext | undefined>(undefined);

/**
 * @returns get current players in lottery from wagmi contract watch "useWatchRaffleRaffleEnterEvent" and sets it to "playersInLottery"
 * */
export const PlayersProvider = ({ children }: { children: React.ReactNode }) => {
  const [playersInLottery, setPlayersInLottery] = useState<TWalletAddress[]>([]);
  const { readContractParams } = useLotteryContractAddress();

  // useWatchRaffleRaffleEnterEvent({
  //   ...readContractParams,
  //   onLogs: (logs) => {
  //     setPlayers(logs);
  //   },
  // });

  const setPlayers: TLotteryEventTypeFn<typeof raffleAbi, 'RaffleEnter'> = (logs) => {
    setPlayersInLottery(logs.map((log) => log.args.player).filter((val) => !!val));
  };

  return <PlayersContext.Provider value={{ playersInLottery }}>{children}</PlayersContext.Provider>;
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

'use client';
import {
  useReadRaffleGetEntranceFee,
  useReadRaffleGetNumberOfPlayers,
  useReadRaffleGetRecentWinner,
  useReadRaffleHasEnteredRaffle,
  useWriteRaffleEnterRaffle,
} from '@lottery/generated/generated-hardhat';
import Button from '@lottery/ui/Button';
import Stat from '@lottery/ui/Stat';
import { ethers } from 'ethers';
import { useTranslations } from 'next-intl';
import { useEffect, useMemo } from 'react';
import { toast } from 'react-toastify';
import { useAccount, useWaitForTransactionReceipt } from 'wagmi';
import useLotteryContractAddress from '../../hooks/useLotteryContractAddress';

const EnterLottery = () => {
  const { address: playerAddress } = useAccount();
  const t = useTranslations('Index');
  const { lotteryContractAddress, readContractParams } = useLotteryContractAddress();
  const { data: totalPlayers } = useReadRaffleGetNumberOfPlayers(readContractParams);
  const { data: recentWinner } = useReadRaffleGetRecentWinner(readContractParams);
  const totalPlayersNumber = useMemo(() => Number(totalPlayers), [totalPlayers]);
  /**
   * using lottery foundry contract
   */
  // const { data: entranceFee } = useReadLotteryGetEntranceFee({
  //   address: lotteryContractAddress,
  // });

  // const { data, error, isPending, writeContractAsync } = useWriteLotteryEnterLottery();

  /**
   * using lottery hardhat contract
   */

  const { data: entranceFee } = useReadRaffleGetEntranceFee(readContractParams);
  const { refetch } = useReadRaffleHasEnteredRaffle({
    ...readContractParams,
    args: [playerAddress],
  });

  const {
    data: mainTransactionHash,
    error,
    isPending,
    writeContractAsync,
  } = useWriteRaffleEnterRaffle();
  const {
    isLoading: isConfirming,
    isSuccess: isConfirmed,
    data: txReceiptData,
  } = useWaitForTransactionReceipt({
    hash: mainTransactionHash,
  });

  useEffect(() => {
    console.info('Transaction confirmed', txReceiptData);
    if (isConfirmed) {
      toast(t('lottery-enter-success-message'));
    }
  }, [isConfirmed, txReceiptData]);

  if (!playerAddress) return <div>{t('connect-wallet-message')}</div>;

  const enterLotteryHandler = async () => {
    if (!playerAddress) throw new Error('Address is not defined');
    if (!lotteryContractAddress) throw new Error('Lottery Contract Address is not defined');
    const { data: playerAddressInLottery } = await refetch();
    if (playerAddressInLottery)
      return toast(t('lottery-already-entered-message'), { type: 'warning' });
    await writeContractAsync({
      address: lotteryContractAddress,
      value: entranceFee,
    });
  };
  if (!lotteryContractAddress) return <div>{t('network-not-supported')}</div>;

  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <div>
        <span className="md:text-xl">{t('entrance-fee')}:&nbsp;</span>
        <span className="text-lg">
          {entranceFee ? ethers.formatUnits(entranceFee, 'ether') : `${t('loading')}...`} ETH
        </span>
      </div>
      <Button title={t('enter-lottery-cta')} wide onClick={enterLotteryHandler} />
      {totalPlayersNumber > 0 && <Stat title="Total Players" value={totalPlayersNumber} />}
      {!totalPlayersNumber && <p>You are the first player to enter lottery. Good Luck!</p>}
      {recentWinner && <Stat title="Recent Winner" value={recentWinner} />}
    </div>
  );
};

export default EnterLottery;

'use client';
import {
  useReadRaffleGetEntranceFee,
  useReadRaffleGetRecentWinner,
  useReadRaffleHasEnteredRaffle,
  useWriteRaffleEnterRaffle,
} from '@lottery/generated/generated-hardhat';
import Button from '@lottery/ui/Button';
import Stat from '@lottery/ui/Stat';
import { usePlayersContext } from '@lottery/utils/contexts/PlayersProvider';
import { ethers } from 'ethers';
import { useTranslations } from 'next-intl';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useAccount, useWaitForTransactionReceipt } from 'wagmi';
import useLotteryContractAddress from '../../hooks/useLotteryContractAddress';
import ConnectWalletButton from '../ConnectWalletButton';

const EnterLottery = () => {
  const { address: playerAddress } = useAccount();
  const t = useTranslations('Index');
  const { lotteryContractAddress, readContractParams } = useLotteryContractAddress();
  const { data: recentWinner } = useReadRaffleGetRecentWinner(readContractParams);
  const { totalPlayers } = usePlayersContext();
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
    args: [playerAddress!],
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

  if (!playerAddress) {
    return (
      <div className="flex flex-col justify-center items-center gap-3">
        <span>{t('connect-wallet-message')}</span>
        <ConnectWalletButton />
      </div>
    );
  }

  if (!lotteryContractAddress) return <div>{t('network-not-supported')}</div>;

  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <div>
        <span className="md:text-xl">{t('entrance-fee')}:&nbsp;</span>
        <span className="text-lg">
          {entranceFee ? ethers.formatUnits(entranceFee, 'ether') : `${t('loading')}...`} ETH
        </span>
      </div>
      <Button
        title={t('enter-lottery-cta')}
        wide
        onClick={enterLotteryHandler}
        loading={isPending}
      />
      {totalPlayers !== undefined && <Stat title="Total Players" value={totalPlayers} />}
      {totalPlayers === 0 && <p>{t('first-player-msg')}</p>}
      {recentWinner && (
        <Stat title="Recent Winner" value={recentWinner} valueClassName="text-sm break-all" />
      )}
    </div>
  );
};

export default EnterLottery;

import { LOTTERY_CONTRACT_ADDRESSES } from '@lottery/constants';
import { useMemo } from 'react';
import { useChainId } from 'wagmi';

/**
 * @returns lotteryContractAddress and readContractParams to use for all read wagmi hooks
 */
const useLotteryContractAddress = () => {
  const chainId = useChainId();
  const lotteryContractAddress = useMemo(() => LOTTERY_CONTRACT_ADDRESSES[chainId], [chainId]);
  const readContractParams = useMemo(
    () => ({
      address: lotteryContractAddress,
    }),
    [lotteryContractAddress],
  );

  return { lotteryContractAddress, readContractParams };
};

export default useLotteryContractAddress;

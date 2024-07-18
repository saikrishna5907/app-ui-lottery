import { TWalletAddress } from '@lottery/types';

// Get projectId from https://cloud.walletconnect.com
export const ENV_PROJECT_ID = process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID;

export const LOTTERY_CONTRACT_ADDRESSES: Record<number, TWalletAddress | undefined> = {
  31337: '0xcf7ed3acca5a467e9e704c703e8d87f634fb0fc9',
};

export * from './dataTestIds';

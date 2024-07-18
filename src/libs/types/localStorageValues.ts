import { ThemeNames } from '@lottery/enums';

export type TLocalStorageValueMap = {
  WALLET_CONNECTED: 'injected';
  WALLET_ADDRESS: string | null;
  WALLET_PROVIDER: string;
  WALLET_NETWORK: string;
  WALLET_CHAIN_ID: string;
  WALLET_ACCOUNT: string;
  THEME: ThemeNames;
};

export type TLocalStorageKey = keyof TLocalStorageValueMap;

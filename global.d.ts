import { wagmiConfig } from '@lottery/config/wagmi';
import en from '@lottery/locales/messages/en.json';

type Messages = typeof en;

declare global {
  // Use type safe message keys with `next-intl`
  interface IntlMessages extends Messages {}
}

declare module 'wagmi' {
  interface Register {
    config: typeof wagmiConfig;
  }
}

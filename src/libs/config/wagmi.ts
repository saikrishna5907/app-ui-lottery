import { defaultWagmiConfig } from '@web3modal/wagmi';
import { cookieStorage, createStorage, http } from 'wagmi';
import { anvil, mainnet, sepolia } from 'wagmi/chains';
import { ENV_PROJECT_ID } from '../constants';

const metadata = {
  name: "Sai's Lottery",
  description: "Sai's Decentralized Lottery App",
  url: 'https://web3modal.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
};

export const supportedChains = [mainnet, sepolia, anvil] as const;

export const wagmiConfig = () => {
  if (!ENV_PROJECT_ID) throw new Error('Project ID is not defined');
  return defaultWagmiConfig({
    chains: supportedChains,
    ssr: true,
    storage: createStorage({
      storage: cookieStorage,
    }),
    auth: {
      email: false,
    },
    metadata,
    projectId: ENV_PROJECT_ID,
    transports: {
      [mainnet.id]: http(),
      [sepolia.id]: http(),
      [anvil.id]: http(),
    },
  });
};

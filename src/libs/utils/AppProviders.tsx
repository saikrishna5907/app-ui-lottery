'use client';
import { wagmiConfig } from '@lottery/config/wagmi';
import { ENV_PROJECT_ID } from '@lottery/constants';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createWeb3Modal } from '@web3modal/wagmi/react';
import { PropsWithChildren } from 'react';
import { ToastContainer } from 'react-toastify';
import { WagmiProvider } from 'wagmi';
import { TAppProvidersProps } from '../types';
// Setup queryClient
const queryClient = new QueryClient();

const config = wagmiConfig();

if (!ENV_PROJECT_ID) throw new Error('Project ID is not defined');

// Create modal
createWeb3Modal({
  wagmiConfig: config,
  projectId: ENV_PROJECT_ID,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  enableOnramp: true, // Optional - false as default,
});

const AppProviders = ({ initialState, children }: PropsWithChildren<TAppProvidersProps>) => {
  // const [isReady, setIsReady] = useState(false);

  // useEffect(() => {
  //   if (initialState) {
  //     setIsReady(true);
  //   }
  // }, [initialState]);

  // if (!isReady) return <div>App Loading...</div>;
  return (
    <WagmiProvider config={config} initialState={initialState}>
      <QueryClientProvider client={queryClient}>
        <ToastContainer />
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default AppProviders;

import LayoutChildren from '@lottery/components/LayoutChildren';
import { wagmiConfig } from '@lottery/config/wagmi';
import AppProviders from '@lottery/utils/AppProviders';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import { Inter } from 'next/font/google';
import { headers } from 'next/headers';
import React, { Suspense } from 'react';
import 'react-toastify/ReactToastify.css';
import { cookieToInitialState } from 'wagmi';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Sai's Decentralized Lottery",
  description: 'App to decentralized lottery using blockchain technology',
};

const RootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const locale = await getLocale();
  const messages = await getMessages();

  const initialState = cookieToInitialState(wagmiConfig(), headers().get('cookie'));

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <Suspense fallback="Main loading...">
          <NextIntlClientProvider messages={messages}>
            <AppProviders initialState={initialState}>
              <LayoutChildren> {children} </LayoutChildren>
            </AppProviders>
          </NextIntlClientProvider>
        </Suspense>
      </body>
    </html>
  );
};

export default RootLayout;

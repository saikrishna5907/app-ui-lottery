import { PropsWithChildren } from 'react';
import AppHeader from '../AppHeader';

const LayoutChildren = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-start">
      <AppHeader />
      <div className="p-24 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
        {children}
      </div>
    </main>
  );
};

export default LayoutChildren;

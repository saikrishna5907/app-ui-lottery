'use client';

import EnterLottery from '@lottery/components/EnterLottery';
import { PlayersProvider } from '@lottery/utils/contexts/PlayersProvider';

const LandingPage = () => {
  return (
    <PlayersProvider>
      <div className="mb-32 grid text-center lg:mb-0 w-full">
        <EnterLottery />
      </div>
    </PlayersProvider>
  );
};

export default LandingPage;

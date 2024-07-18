import Header from '@lottery/ui/Header';
import { useTranslations } from 'next-intl';
import ConnectWalletButton from '../ConnectWalletButton';
import ThemeSelectorDynamic from '../ThemeSelector/dynamic';

const AppHeader = () => {
  const t = useTranslations('Index');
  return (
    <Header title={t('title')}>
      <ConnectWalletButton />
      <ThemeSelectorDynamic />
    </Header>
  );
};

export default AppHeader;

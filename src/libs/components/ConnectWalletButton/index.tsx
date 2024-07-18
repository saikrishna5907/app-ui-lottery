import { dataTestIds } from '@lottery/constants';

const ConnectWalletButton = () => {
  return (
    <div data-testid={dataTestIds.landingPage.walletConnectBtn}>
      <w3m-button size="sm" />
    </div>
  );
};

export default ConnectWalletButton;

import { dataTestIds } from '@lottery/constants';
import { expect, test } from '@playwright/test';
import { landingPageElements } from '../../pageElements/landingPage';

test.describe('Landing Page', () => {
  test('should display the landing page', async ({ page }) => {
    await page.goto('/');

    await expect(page.locator("text=Sai's Decentralized Lottery")).toBeVisible();
    await expect(page).toHaveTitle("Sai's Decentralized Lottery");
  });

  test('should display the button to connect the wallet', async ({ page }) => {
    await page.goto('/');

    const connectButton = await page.getByTestId(dataTestIds.landingPage.walletConnectBtn);

    await connectButton;
  });

  test('should display the theme selector drop to select different themes', async ({ page }) => {
    await page.goto('/');

    const themeSelectorDropdown = page.getByTestId(dataTestIds.landingPage.themeSelector.dropdown);

    await themeSelectorDropdown.isVisible();
  });

  test('should display the text to connect to wallet if not connected', async ({ page }) => {
    await page.goto('/');

    const pleaseConnectText = page.getByText(landingPageElements.connectWallet);

    await pleaseConnectText.isVisible();
  });
});

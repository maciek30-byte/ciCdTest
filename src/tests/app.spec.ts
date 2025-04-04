import { test, expect } from '@playwright/test';

test.describe('App Component', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('should render app with all elements', async ({ page }) => {
        await expect(page.locator('h1')).toHaveText('Hello Appp Need to change you');
        await expect(page.locator('h2')).toHaveText('We can trust this app');

        const redDiv = page.locator('div[style*="backgroundColor:red"]');
        await expect(redDiv).toBeVisible();

        await expect(redDiv.locator('span')).toHaveText('Hello i am span');

        await expect(page.locator('footer')).toBeVisible();
    });

    test('should increment counter when button is clicked', async ({ page }) => {
        const counterValue = page.locator('div > span').first();
        const incrementButton = page.getByText('Increment Counter');

        await expect(counterValue).toHaveText('0');

        await incrementButton.click();

        // Sprawdź czy wartość licznika zmieniła się na 1
        await expect(counterValue).toHaveText('1');

        // Kliknij jeszcze kilka razy i sprawdź wartość
        await incrementButton.click();
        await incrementButton.click();
        await expect(counterValue).toHaveText('3');
    });
});
import { expect, Page } from '@playwright/test';
import { Locators } from '../Locators/locators';

export default class PdPage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    public async goto(string) {
        await this.page.goto(string);
    }

    public async pdpUtils() {
        await expect(this.page.locator(Locators.bikeName)).toBeVisible();
        await expect(this.page.locator(Locators.bikeSizeS)).toBeVisible();
        expect(await this.page.locator(Locators.bikePrice).innerText()).toEqual('€1,499.00')
        await this.page.locator(Locators.bikeSizeS).click();
        await expect(this.page.locator(Locators.addToCart)).toBeVisible();
        await this.page.locator(Locators.addToCart).click();
        await expect(this.page.locator(Locators.addedToCart)).toBeVisible({timeout:15000});
    }
}
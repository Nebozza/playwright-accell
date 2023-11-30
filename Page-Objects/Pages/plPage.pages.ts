import { expect, Page } from '@playwright/test';
import { Locators } from '../Locators/locators';

export default class PlPage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    public async goto(string) {
        await this.page.goto(string);
    }

    public async plpUtils() {
        await expect(this.page.locator(Locators.plpCategories)).toBeVisible();
        await expect(this.page.locator(Locators.plpComparison)).toBeVisible();
        await expect(this.page.locator(Locators.filterAsc)).toBeVisible();
        await expect(this.page.locator(Locators.filterDesc)).toBeVisible();
    }

    public async plpBikeChoice() {
        await this.page.locator(Locators.bikeClick).click();
        await expect(this.page).toHaveURL("https://accept.ghost.accell.cloud/de-en/road-rage-eq/?attrMarketingColor=Kaki%20metallic");
    }
}
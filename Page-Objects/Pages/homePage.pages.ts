import { expect, Page } from '@playwright/test';
import { Locators } from '../Locators/locators';

export default class HomePage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    public async goto(string) {
        await this.page.goto(string);
    }

    public async homePageEcom() {
        await expect(this.page.locator(Locators.pageLogo)).toBeVisible();
        await expect(this.page.locator(Locators.basketIcon)).toBeVisible();
        await expect(this.page.locator(Locators.newsLetter)).toBeVisible();
        await expect(this.page.locator(Locators.changeLanguageBtn)).toBeVisible();
    }

    public async languageChange() {
        await this.page.locator(Locators.changeLanguageBtn).click();
        await expect(this.page.locator(Locators.italianLng)).toBeVisible();
        await this.page.locator(Locators.italianLng).click();
        await expect(this.page).toHaveURL("https://accept.ghost.accell.cloud/it-it/");
    }

    public async headerOptions() {
        await expect(this.page.locator(Locators.bikes)).toBeVisible();
        await this.page.locator(Locators.bikes).click();
        await expect(this.page).toHaveURL("https://accept.ghost.accell.cloud/de-en/bikes/");
    }
}
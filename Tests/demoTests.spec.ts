import { test } from '@playwright/test';
import { pageUrl } from '../Helpers/urls';
import HomePage from '../Page-Objects/Pages/homePage.pages';
import PlPage from '../Page-Objects/Pages/plPage.pages';
import PdPage from '../Page-Objects/Pages/pdPage.pages';

test("Homepage checks", async ({page}) => {
    const homePage = new HomePage(page);

    await homePage.goto(pageUrl.urlGhost);
    await homePage.homePageEcom();
    await homePage.languageChange();
});

test("PLP verification", async ({page}) => {
    const plPage = new PlPage(page);
    const homePage = new HomePage(page);
    
    await homePage.goto(pageUrl.urlGhost);
    await homePage.headerOptions();
    await plPage.plpUtils();
    await plPage.plpBikeChoice();
});

test("PDP verification", async ({page}) => {
    const plPage = new PlPage(page);
    const pdPage = new PdPage(page);
    const homePage = new HomePage(page);
    
    await homePage.goto(pageUrl.urlGhost);
    await homePage.headerOptions();
    await plPage.plpBikeChoice();
    await pdPage.pdpUtils();
});
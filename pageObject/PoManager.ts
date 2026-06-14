import { Page } from '@playwright/test';
import { LanguageSelector } from './languageSelector.js';
import { MainPage } from './mainPage.js';
import { DetailPage } from './detailPage.js';
import { TopFilmPage } from './topFilmPage.js';

export class PoManager {
  private page: Page;
  private mainPage: MainPage;
  private languageSelector: LanguageSelector;
  private detailPage: DetailPage;
  private topFilmPage: TopFilmPage;

  constructor(page: Page) {
    this.page = page;
    this.mainPage = new MainPage(this.page);
    this.languageSelector = new LanguageSelector(this.page);
    this.detailPage = new DetailPage(this.page);
    this.topFilmPage = new TopFilmPage(this.page);
  }

  getMainPage() {
    return this.mainPage;
  }

  getLanguageSelector() {
    return this.languageSelector;
  }

  getDetailPage() {
    return this.detailPage;
  }

  getTopFilmPage() {
    return this.topFilmPage;
  }
}

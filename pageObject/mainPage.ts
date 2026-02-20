import { Page, expect, Locator } from '@playwright/test';

export class MainPage {
  private page: Page;
  private searchBox: Locator;
  private searchResults: Locator;
  private menu: Locator;
  private drawer: Locator;
  private top250FilmsTitle: Locator;

  constructor(page: Page) {
    this.page = page;

    this.searchBox = this.page.getByTestId('suggestion-search');
    this.searchResults = this.page.getByTestId('search-result--const');
    this.menu = this.page.getByLabel(
      /Open navigation drawer|Navigationsleiste|Ouvrir le tiroir de navigation|नेविगेशन ड्रॉवर खोलें|Apri cassetto di navigazione|Abrir painel de navegação| öffnen|Abrir panel de navegación/i
    );
    this.drawer = page.getByTestId('drawer').first();
    this.top250FilmsTitle = page
      .getByTestId('nav-link-category')
      .getByText(/250/)
      .first();
  }

  async pickFilm(filmName: string, yearReleased: string, actors: string) {
    //fill
    await expect(this.searchBox).toBeVisible();
    await this.searchBox.type(filmName, { delay: 100 });
    await expect(this.searchResults.first()).toBeVisible();

    // Check and pick
    let count = await this.searchResults.count();
    for (let i = 0; i < count; i++) {
      const text = await this.searchResults.nth(i).innerText();

      if (
        text.includes(filmName) &&
        text.includes(yearReleased) &&
        text.includes(actors)
      ) {
        await this.searchResults.nth(i).click();
        break;
      }
    }
  }

  async goToTopMovies() {
    await this.menu.click();
    await expect(this.drawer).toBeVisible();
    this.top250FilmsTitle.click();
  }
}

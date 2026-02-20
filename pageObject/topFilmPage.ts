import { Page, expect, Locator } from '@playwright/test';

export class TopFilmPage {
  private page: Page;
  private HighestRatedMovie: Locator;
  constructor(page: Page) {
    this.page = page;
    this.HighestRatedMovie = page.locator('main').getByRole('link').first();
  }

  async pickHighestRatedMovie() {
    await expect(this.HighestRatedMovie).toBeVisible();
    await this.HighestRatedMovie.click();
  }
}

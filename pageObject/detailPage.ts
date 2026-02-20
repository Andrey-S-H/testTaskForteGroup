import { Page, expect, Locator } from '@playwright/test';

export class DetailPage {
  private page: Page;
  private mainTitle: Locator;
  private originalTitleBlock: Locator;
  private imbdRating: Locator;
  private releasedate: Locator;

  constructor(page: Page) {
    this.page = page;
    this.mainTitle = this.page.getByTestId('hero__pageTitle');
    this.originalTitleBlock = this.page
      .getByTestId('hero__pageTitle')
      .locator('..')
      .locator('div')
      .first();
    this.imbdRating = this.page.getByTestId(
      'hero-rating-bar__aggregate-rating__score'
    );
    this.releasedate = page.getByTestId('title-details-releasedate');
  }

  async validateFilm(film: string) {
    const mainTitleText = await this.mainTitle.textContent();
    let originalTitleText: string | null = null;

    if (await this.originalTitleBlock.isVisible()) {
      originalTitleText = await this.originalTitleBlock.textContent();
    }

    if (mainTitleText?.includes(film)) {
      await expect(this.mainTitle).toContainText(film);
      console.log(`Validation passed OK\nmainTitle: ${film}`);
    } else if (originalTitleText?.includes(film)) {
      await expect(this.originalTitleBlock).toContainText(film);
      console.log(`Validation passed OK\noriginalTitle: ${film}`);
    } else {
      throw new Error(
        `Film validation failed: got "${mainTitleText}" and "${originalTitleText}"`
      );
    }
  }

  async ifMainTitlePresent() {
    await expect(this.mainTitle).toBeVisible;
  }

  async ifMainRatingPresent() {
    await expect(this.imbdRating).toBeVisible;
  }

  async ifMainReleasedatePresent() {
    await expect(this.releasedate).toBeVisible;
  }
}

import { Page, expect, Locator } from '@playwright/test';

export class LanguageSelector {
  private page: Page;
  private selector: Locator;
  private languageMenu: Locator;

  constructor(page: Page) {
    this.page = page;
    this.selector = this.page.getByLabel('Toggle language selector').nth(1);
    this.languageMenu = this.page.locator(
      'div[data-menu-id="nav-language-selector"]'
    );
  }

  async select(language: string) {
    await this.selector.click();
    await this.languageMenu.waitFor({ state: 'visible' });

    const option = this.page.getByRole('menuitem', { name: language });
    const classes = await option.getAttribute('class');

    if (classes?.includes('selected')) {
      await expect(option).toHaveClass(/selected/);
    } else {
      await option.click();
    }
  }
}

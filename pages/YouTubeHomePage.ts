import { BasePage } from './BasePage';

export class YouTubeHomePage extends BasePage {
  private readonly searchInput = this.page
    .locator('input[name="search_query"], input.yt-searchbox-input')
    .first();
  private readonly rejectConsentButton = this.page.getByRole('button', { name: /^(reject all|відхилити всі)$/i });
  
  async goto(): Promise<void> {
    await this.page.goto('/', { waitUntil: 'domcontentloaded' });
    await this.dismissConsentIfPresent();
  }

  async search(query: string): Promise<void> {
    await this.searchInput.fill(query);
    await this.searchInput.press('Enter');
    await this.waitForUrlToMatch(/\/results\?search_query=/);
  }

  private async dismissConsentIfPresent(): Promise<void> {
    try {
      await this.rejectConsentButton.click({ timeout: 4000 });
      return;
    } catch {
    }
  }
}

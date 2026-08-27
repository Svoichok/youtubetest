import { BasePage } from './BasePage';

export class SearchResultsPage extends BasePage {
  private readonly shelfRenderer = 'ytd-shelf-renderer';
  private readonly excludeNestedInShelf = `:not(${this.shelfRenderer} *)`;

  private readonly topLevelResults = this.page.locator(
    `:is(ytd-video-renderer, ytd-channel-renderer, ytd-radio-renderer, ${this.shelfRenderer})${this.excludeNestedInShelf}`
  );

  private readonly topLevelVideos = this.page.locator(
    `ytd-video-renderer${this.excludeNestedInShelf}:has(#video-title:not([href*="/shorts/"]))`
  );

  async selectResult(index: number): Promise<void> {
    const result = this.topLevelResults.nth(index);
    await result.scrollIntoViewIfNeeded();
    await result.hover();
  }

  async openVideo(index: number): Promise<void> {
    const video = this.topLevelVideos.nth(index);
    await video.scrollIntoViewIfNeeded();
    await video.locator('#video-title').first().click();
    await this.waitForUrlToMatch(/\/watch\?v=/);
  }
}

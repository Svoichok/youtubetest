import { BasePage } from './BasePage';

export class SearchResultsPage extends BasePage {
  private readonly resultsContainer = this.page.locator('ytd-item-section-renderer:visible > #contents');

  private readonly topLevelResults = this.resultsContainer.locator(
    '> :is(ytd-video-renderer, ytd-channel-renderer, ytd-radio-renderer, ytd-shelf-renderer)'
  );

  private readonly topLevelVideos = this.resultsContainer.locator(
    '> ytd-video-renderer:has(#video-title:not([href*="/shorts/"]))'
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

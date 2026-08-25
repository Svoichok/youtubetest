import { BasePage } from './BasePage';

export class SearchResultsPage extends BasePage {
  private readonly topLevelResults = this.page.locator(
    ':is(ytd-video-renderer, ytd-channel-renderer, ytd-radio-renderer, ytd-shelf-renderer):not(ytd-shelf-renderer *)'
  );

  private readonly topLevelVideos = this.page.locator(
    'ytd-video-renderer:not(ytd-shelf-renderer *):has(#video-title:not([href*="/shorts/"]))'
  );

  async selectSecondResult(): Promise<void> {
    const second = this.topLevelResults.nth(1);
    await second.scrollIntoViewIfNeeded();
    await second.hover();
  }

  async selectResult(index: number): Promise<void> {
    const result = this.topLevelResults.nth(index);
    await result.scrollIntoViewIfNeeded();
    await result.hover();
  }

  async openFourthVideo(): Promise<void> {
    const fourth = this.topLevelVideos.nth(3);
    await fourth.scrollIntoViewIfNeeded();
    await fourth.locator('#video-title').first().click();
    await this.waitForUrlToMatch(/\/watch\?v=/);
  }

   async openVideo(index: number): Promise<void> {
    const video = this.topLevelVideos.nth(index);
    await video.scrollIntoViewIfNeeded();
    await video.locator('#video-title').first().click();
    await this.waitForUrlToMatch(/\/watch\?v=/);
  }
}

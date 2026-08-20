import { BasePage } from './BasePage';

export class SearchResultsPage extends BasePage {
  private readonly topLevelResults = this.page.locator(
    'xpath=//*[self::ytd-video-renderer or self::ytd-channel-renderer or self::ytd-radio-renderer or self::ytd-shelf-renderer][not(ancestor::ytd-shelf-renderer)]'
  );

  private readonly topLevelVideos = this.page.locator(
    'xpath=//ytd-video-renderer[not(ancestor::ytd-shelf-renderer)][.//a[@id="video-title" and not(contains(@href, "/shorts/"))]]'
  );

  async selectSecondResult(): Promise<void> {
    const second = this.topLevelResults.nth(1);
    await second.scrollIntoViewIfNeeded();
    await second.hover();
  }

  async openFourthVideo(): Promise<void> {
    const fourth = this.topLevelVideos.nth(3);
    await fourth.scrollIntoViewIfNeeded();
    await fourth.locator('#video-title').first().click();
    await this.waitForUrlToMatch(/\/watch\?v=/);
  }
}

import { BasePage } from './BasePage';

export class VideoWatchPage extends BasePage {
  readonly authorAvatar = this.page.locator('.yt-simple-endpoint.style-scope.ytd-video-owner-renderer');

  async clickAuthorAvatar(): Promise<void> {
    await this.authorAvatar.click();
    await this.waitForUrlToMatch(/\/(channel\/|@)/);
  }
}

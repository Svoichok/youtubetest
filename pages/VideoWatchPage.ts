import { BasePage } from './BasePage';

export class VideoWatchPage extends BasePage {
  async clickAuthorAvatar(): Promise<void> {
    const primary = this.page.locator('ytd-video-owner-renderer #avatar');
    const fallback = this.page.locator('ytd-video-owner-renderer img').first();

    await primary.or(fallback).first().click();
    await this.waitForUrlToMatch(/\/(channel\/|@)/);
  }
}

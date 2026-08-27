import { Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class ChannelPage extends BasePage {
  private readonly channelContainer = this.page.locator('ytd-browse[page-subtype="channels"]');
  private readonly subscribeButton = this.channelContainer.getByRole('button', { name: /підписатися/i });
  private readonly popupContainer = this.page.locator('ytd-popup-container');

  async clickSubscribe(): Promise<void> {
    await this.channelContainer.waitFor({ state: 'visible' });
    await this.subscribeButton.click();
  }

  signInPrompt(): Locator {
    return this.popupContainer.getByText(/увійти/i);
  }
}

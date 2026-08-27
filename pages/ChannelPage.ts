import { Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class ChannelPage extends BasePage {
  private readonly channelContainer = this.page.locator('ytd-browse[page-subtype="channels"]');
  private readonly subscribeButtonByRole = this.channelContainer.getByRole('button', { name: /підписатися/i });

  async clickSubscribe(): Promise<void> {
    await this.channelContainer.waitFor({ state: 'visible' });
    await this.subscribeButtonByRole.click();
  }

  signInPrompt(): Locator {
    return this.page.locator('ytd-popup-container').getByText(/увійти/i);
  }
}

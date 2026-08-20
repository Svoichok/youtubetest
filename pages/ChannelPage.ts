import { Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class ChannelPage extends BasePage {
  private readonly channelContainer = this.page.locator('ytd-browse[page-subtype="channels"]');

  async clickSubscribe(): Promise<void> {
    await this.channelContainer.waitFor({ state: 'visible' });

    const subscribeText = /підписатися/i;
    const byRole = this.channelContainer.getByRole('button', { name: subscribeText });
    const byText = this.channelContainer
      .locator('ytd-subscribe-button-renderer')
      .getByText(subscribeText);

    await byRole.or(byText).first().click();
  }

  signInPrompt(): Locator {
    return this.page.locator('ytd-popup-container').getByText(/увійти/i);
  }
}

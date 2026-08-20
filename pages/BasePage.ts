import { Page } from '@playwright/test';

export abstract class BasePage {
  constructor(protected readonly page: Page) {}

  async maximizeWindow(): Promise<void> {
    const session = await this.page.context().newCDPSession(this.page);
    const { windowId } = await session.send('Browser.getWindowForTarget');
    await session.send('Browser.setWindowBounds', {
      windowId,
      bounds: { windowState: 'maximized' },
    });
  }

  async closeTab(): Promise<void> {
    await this.page.close();
  }

  protected async waitForUrlToMatch(pattern: RegExp): Promise<void> {
    await this.page.waitForFunction(
      (source) => new RegExp(source).test(window.location.href),
      pattern.source
    );
  }
}

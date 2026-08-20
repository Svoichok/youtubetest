import { test as base } from '@playwright/test';
import { YouTubeHomePage } from './pages/YouTubeHomePage';
import { SearchResultsPage } from './pages/SearchResultsPage';
import { VideoWatchPage } from './pages/VideoWatchPage';
import { ChannelPage } from './pages/ChannelPage';

type Pages = {
  homePage: YouTubeHomePage;
  resultsPage: SearchResultsPage;
  watchPage: VideoWatchPage;
  channelPage: ChannelPage;
};

export const test = base.extend<Pages>({
  homePage: async ({ page }, use) => {
    await use(new YouTubeHomePage(page));
  },
  resultsPage: async ({ page }, use) => {
    await use(new SearchResultsPage(page));
  },
  watchPage: async ({ page }, use) => {
    await use(new VideoWatchPage(page));
  },
  channelPage: async ({ page }, use) => {
    await use(new ChannelPage(page));
  },
});

export { expect } from '@playwright/test';

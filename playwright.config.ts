import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 60_000,
  fullyParallel: true,
  retries:  1,
  reporter: 'html',

  use: {
    baseURL: 'https://www.youtube.com',
    locale: 'uk-UA',
    viewport: null,
    actionTimeout: 15_000,
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: {
        browserName: 'chromium',
        launchOptions: {
          args: ['--start-maximized'],
        },
      },
    },
  ],
});

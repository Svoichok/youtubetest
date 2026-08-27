import { test, expect } from '../fixtures';
import { randomDigitsQuery } from '../utils/random';

test('пошук на YouTube і спроба підписки без авторизації', async ({ page, homePage, resultsPage, watchPage, channelPage }) => {
  await expect(page).toHaveTitle('YouTube');

  await homePage.search(randomDigitsQuery());
  await resultsPage.maximizeWindow();
  await resultsPage.selectResult(1);

  await resultsPage.openVideo(3);

  await watchPage.clickAuthorAvatar();

  await channelPage.clickSubscribe();
  await expect(channelPage.signInPrompt()).toBeVisible();
  await channelPage.closeTab();
});

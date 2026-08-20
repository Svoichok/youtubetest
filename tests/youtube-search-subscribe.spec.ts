import { test, expect } from '../fixtures';
import { randomDigitsQuery } from '../utils/random';

test('пошук на YouTube і спроба підписки без авторизації', async ({
  page,
  homePage,
  resultsPage,
  watchPage,
  channelPage,
}) => {
  await test.step('Перехід на https://www.youtube.com/', async () => {
    await homePage.goto();
  });

  await test.step('Перевірка назви вкладки браузера', async () => {
    await expect(page).toHaveTitle('YouTube');
  });

  const query = randomDigitsQuery();
  await test.step(`Введення пошукового запиту "${query}"`, async () => {
    await homePage.search(query);
  });

  await test.step('Розгортання браузера на весь екран', async () => {
    await resultsPage.maximizeWindow();
  });

  await test.step('Вибір другої позиції у списку результатів', async () => {
    await resultsPage.selectSecondResult();
  });

  await test.step('Запуск четвертого відео у списку результатів', async () => {
    await resultsPage.openFourthVideo();
  });

  await test.step('Клік на аватар автора відео', async () => {
    await watchPage.clickAuthorAvatar();
  });

  await test.step('Клік на кнопку «ПІДПИСАТИСЯ»', async () => {
    await channelPage.clickSubscribe();
  });

  await test.step("Перевірка тексту «УВІЙТИ» у контейнері, що з'явився", async () => {
    await expect(channelPage.signInPrompt()).toBeVisible();
  });

  await test.step('Закриття вкладки браузера', async () => {
    await channelPage.closeTab();
  });
});

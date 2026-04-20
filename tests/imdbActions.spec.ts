import { test } from '@playwright/test';
import imdbActionsTestData from './imdbActionsTestData/imdbActionsTestData.json' with { type: 'json' };
import { PoManager } from '../pageObject/PoManager';

const siteUrl = process.env.SITE_URL;
const filmName = imdbActionsTestData.filmToBeSearched;
const yearReleased = imdbActionsTestData.yearOfRelease;
const actors = imdbActionsTestData.Actors;
const language = imdbActionsTestData.language[0]; //array from testData
let poManager: PoManager;

test.beforeEach(async ({ page }) => {
  await page.goto(siteUrl!);
  poManager = new PoManager(page);
});

test('Search and Validate Movie', async () => {
  // language selector
  const languageSelector = poManager.getLanguageSelector();
  await languageSelector.select(language);

  //Check and pick film
  const mainPage = poManager.getMainPage();
  await mainPage.pickFilm(filmName, yearReleased, actors);

  //Final check
  const detailPage = poManager.getDetailPage();
  await detailPage.validateFilm(filmName);
});

test('Navigate Top 250 Movies', async () => {
  // language selector
  const languageSelector = poManager.getLanguageSelector();
  await languageSelector.select(language);

  // navigation to TopMovies
  const mainPage = poManager.getMainPage();
  await mainPage.goToTopMovies();

  // pickHighestRatedMovie
  const topFilmPage = poManager.getTopFilmPage();
  await topFilmPage.pickHighestRatedMovie();

  // Final check
  const detailPage = poManager.getDetailPage();
  await detailPage.ifMainTitlePresent();
  await detailPage.ifMainRatingPresent();
  await detailPage.ifMainReleasedatePresent();
});

//npx playwright test --debug

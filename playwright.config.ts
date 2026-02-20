import { defineConfig, devices } from '@playwright/test';
//import and start. Filter of env keys. check if them not "", null, undefind
import dotenv from 'dotenv';
dotenv.config();
import './env-checks'; //file importing and code from file perform automatically

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  timeout: 30_000, // общий таймаут для теста
  expect: {
    timeout: 5_000, // таймаут для expect
  },

  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : 1,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [['html', { open: 'never' }]],
  use: {
    actionTimeout: 10_000,
    navigationTimeout: 30_000,

    headless: true,
    trace: 'on',
  },
  outputDir: 'test-results', // артефакты: скриншоты, видео, trace

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});

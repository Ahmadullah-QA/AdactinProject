// @ts-check
import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./features", // Where your feature files live
  fullyParallel: false, // Cucumber manages its own parallelism, so keep this false here
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  /* Use 'dot' or 'list' for a cleaner console output while running Cucumber */
  reporter: [["html", { open: "never" }]],

  use: {
    /* These settings will only apply if you run: npx playwright test */
    baseURL: "https://adactinhotelapp.com/HotelAppBuild2/",

    // This is useful! If a test fails, you can view the trace later
    trace: "retain-on-failure",

    // Matches your hooks setup
    viewport: { width: 1280, height: 720 },
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },
    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },
  ],
});

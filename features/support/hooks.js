import { Before, After, setDefaultTimeout } from "@cucumber/cucumber";
import { chromium, firefox, webkit } from "@playwright/test";
import fs from "fs";

// Pages
import { LoginPage } from "../pages/LoginPage.js";
import { SearchHotelPage } from "../pages/SearchHotelPage.js";
import { SelectHotelPage } from "../pages/SelectHotelPage.js";
import { BookAHotelPage } from "../pages/BookAHotelPage.js";
import { BookedItineraryPage } from "../pages/BookedItineraryPage.js";
import { LogoutPage } from "../pages/LogoutPage.js";

setDefaultTimeout(60000);

// --- Global Setup: Ensure report directories exist ---
const reportDirs = ["./reports/Videos", "./reports/Screenshots"];
reportDirs.forEach((dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

Before(async function () {
  // 1. Determine Browser and Headless mode from Environment Variables
  const browserType = process.env.BROWSER || "chromium"; // Defaults to chromium
  const isHeadless =
    process.env.HEADLESS === "true" || process.env.CI === "true"; // Defaults to false (Headed)

  console.log(
    `\n--- Launching ${browserType.toUpperCase()} | Mode: ${isHeadless ? "HEADLESS" : "HEADED"} ---`,
  );

  // 2. Select Browser Engine
  const browserEngines = { chromium, firefox, webkit };
  const launcher = browserEngines[browserType] || chromium;

  // 3. Launch Browser
  this.browser = await launcher.launch({
    headless: isHeadless,
    slowMo: isHeadless ? 0 : 100, // Slow motion only in headed mode for visibility
  });

  // 4. Create Context and Page
  this.context = await this.browser.newContext({
    viewport: { width: 1280, height: 720 },
    recordVideo: { dir: "reports/Videos/" },
  });

  this.page = await this.context.newPage();

  // 5. Initialize Page Objects (Injected into Cucumber World)
  this.loginPage = new LoginPage(this.page);
  this.searchHotelPage = new SearchHotelPage(this.page);
  this.selectHotelPage = new SelectHotelPage(this.page);
  this.bookAHotelPage = new BookAHotelPage(this.page);
  this.bookedItineraryPage = new BookedItineraryPage(this.page);
  this.logoutPage = new LogoutPage(this.page);
});

After(async function (scenario) {
  // Capture screenshot on failure
  if (scenario.result?.status === "FAILED") {
    // Sanitize name for Windows file system compatibility
    const fileName = scenario.pickle.name
      .replace(/[^a-z0-9]/gi, "_")
      .toLowerCase();

    const image = await this.page.screenshot({
      path: `./reports/Screenshots/${fileName}.png`,
      fullPage: true,
    });

    // Attach screenshot to the Cucumber HTML report
    this.attach(image, "image/png");
    console.log(
      `Scenario Failed: Screenshot saved for ${scenario.pickle.name}`,
    );
  }

  // Cleanup: Close everything with optional chaining to avoid errors if setup failed
  await this.page?.close();
  await this.context?.close();
  await this.browser?.close();
});

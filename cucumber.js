export default {
  paths: ["features/**/*.feature"],
  import: ["features/step_definitions/**/*.js", "features/support/**/*.js"],
  format: [
    "summary",
    "progress",
    "html:reports/cucumber-report.html",
    "allure-cucumberjs/reporter",
  ],
  formatOptions: {
    resultsDir: "allure-results",
  },
  retry: 1,
  publishQuiet: true,
};

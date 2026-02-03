export default {
  paths: ["features/**/*.feature"],
  import: ["features/step_definitions/**/*.js", "features/support/**/*.js"],
  format: ["summary", "progress", "html:reports/cucumber-report.html"],
  retry: 1,
  publishQuiet: true,
};

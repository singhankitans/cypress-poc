const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',  // for generating html report
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    reportFilename: 'report',
    embeddedScreenshots: true,
    saveAllAttempts: false,
  },
  e2e: {
    setupNodeEvents(on, config) {
      this.screenshotOnRunFailure=true;
      require('cypress-mochawesome-reporter/plugin')(on);  // for html report
    },
  },
});
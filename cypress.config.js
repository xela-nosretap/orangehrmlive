const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseURL: "https://opensource-demo.orangehrmlive.com",
    viewportWidth: 1920,
    viewportHeight: 1080,
  },
});

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: 'C:/Users/elann/Downloads/teste cypress/*.cy.js',  // Caminho para o arquivo de teste
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

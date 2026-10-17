import { defineConfig } from "cypress";

process.loadEnvFile();

export default defineConfig({
  e2e: {
    expose: {
      AGROCONECTA_USERNAME: process.env.AGROCONECTA_USERNAME,
      AGROCONECTA_PASSWORD: process.env.AGROCONECTA_PASSWORD
    },
    setupNodeEvents(on, config) {
    },
  },
});

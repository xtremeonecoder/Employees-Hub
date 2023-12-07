/**
 * Employees Hub
 *
 * @category   Application_Frontend
 * @package    employees-hub
 * @author     Suman Barua
 * @developer  Suman Barua <sumanbarua576@gmail.com>
 */

import { defineConfig } from 'cypress';

export default defineConfig({
  defaultCommandTimeout: 10000,
  env: {
    // add environment variables
    apiUrl: 'https://api.1337co.de/v3',
  },
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

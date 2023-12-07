/**
 * Employees Hub
 *
 * @category   Application_Frontend
 * @package    employees-hub
 * @author     Suman Barua
 * @developer  Suman Barua <sumanbarua576@gmail.com>
 */

/// <reference types="cypress" />

// Register commands
export function registerCommands() {
  Cypress.Commands.add('sortEmployees', (option) => {
    cy.get('select[name="sortBy"]').select(option);
  });

  Cypress.Commands.add('filterEmployees', (keyword, option) => {
    if (option) cy.get('select[name="filterBy"]').select(option);
    cy.get('input[name="filterKey"]').clear().type(keyword);
  });
}

declare global {
  namespace Cypress {
    interface Chainable {
      sortEmployees(option: string): Chainable<void>;
      filterEmployees(keyword: string, option?: string): Chainable<void>;
    }
  }
}

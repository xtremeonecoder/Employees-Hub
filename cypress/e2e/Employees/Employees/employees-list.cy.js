/**
 * Employees Hub
 *
 * @category   Application_Frontend
 * @package    employees-hub
 * @author     Suman Barua
 * @developer  Suman Barua <sumanbarua576@gmail.com>
 */

/// <reference types="cypress" />

context('List Employees Feature', () => {
  beforeEach(() => {
    setup();
  });

  it('should show toolbar with sorting and filtering tools on app home', () => {
    cy.get('.top-bar')
      .should('exist')
      .and('be.visible')
      .within((toolbar) => {
        cy.wrap(toolbar).find('select[name="sortBy"]').should('exist').and('be.visible');
        cy.wrap(toolbar).find('select[name="filterBy"]').should('exist').and('be.visible');
        cy.wrap(toolbar).find('input[name="filterKey"]').should('exist').and('be.visible');

        // We should on the app home page
        cy.url().should('include', ':3000/');
      });
  });

  it('should show list of employees in card', () => {
    cy.get('.grid-container')
      .should('exist')
      .and('be.visible')
      .within((employees) => {
        cy.wrap(employees)
          .find('div[class="card"]')
          .should('exist')
          .and('be.visible')
          .its('length')
          .should('be.gt', 0);

        // We should be on the app home page
        cy.url().should('include', ':3000/');
      });
  });

  it('should show employees ascending order by name', () => {
    // First and last employee before ascending order
    cy.fixture('employees/data').then(async ({ sortBy }) => {
      cy.get('div[class="card"]')
        .should('exist')
        .and('be.visible')
        .first()
        .contains(sortBy.name.asc.before.employee.first);
      cy.get('div[class="card"]')
        .should('exist')
        .and('be.visible')
        .last()
        .contains(sortBy.name.asc.before.employee.last);
    });

    // Apply ascending order by name
    cy.get('.top-bar')
      .should('exist')
      .and('be.visible')
      .within(() => {
        cy.sortEmployees('nameasc');
      });

    // First and last employee after ascending order
    cy.fixture('employees/data').then(async ({ sortBy }) => {
      cy.get('div[class="card"]')
        .should('exist')
        .and('be.visible')
        .first()
        .contains(sortBy.name.asc.after.employee.first);
      cy.get('div[class="card"]')
        .should('exist')
        .and('be.visible')
        .last()
        .contains(sortBy.name.asc.after.employee.last);
    });

    // We should on the app home page
    cy.url().should('include', ':3000/');
  });

  it('should show employees descending order by name', () => {
    // First and last employee before descending order
    cy.fixture('employees/data').then(async ({ sortBy }) => {
      cy.get('div[class="card"]')
        .should('exist')
        .and('be.visible')
        .first()
        .contains(sortBy.name.desc.before.employee.first);
      cy.get('div[class="card"]')
        .should('exist')
        .and('be.visible')
        .last()
        .contains(sortBy.name.desc.before.employee.last);
    });

    // Apply descending order by name
    cy.get('.top-bar')
      .should('exist')
      .and('be.visible')
      .within(() => {
        cy.sortEmployees('namedesc');
      });

    // First and last employee after descending order
    cy.fixture('employees/data').then(async ({ sortBy }) => {
      cy.get('div[class="card"]')
        .should('exist')
        .and('be.visible')
        .first()
        .contains(sortBy.name.desc.after.employee.first);
      cy.get('div[class="card"]')
        .should('exist')
        .and('be.visible')
        .last()
        .contains(sortBy.name.desc.after.employee.last);
    });

    // We should on the app home page
    cy.url().should('include', ':3000/');
  });

  it('should show employees ascending order by office', () => {
    // First and last employee office before ascending order
    cy.fixture('employees/data').then(async ({ sortBy }) => {
      cy.get('div[class="card"]')
        .should('exist')
        .and('be.visible')
        .first()
        .contains(sortBy.office.asc.before.employee.first);
      cy.get('div[class="card"]')
        .should('exist')
        .and('be.visible')
        .last()
        .contains(sortBy.office.asc.before.employee.last);
    });

    // Apply ascending order by office
    cy.get('.top-bar')
      .should('exist')
      .and('be.visible')
      .within(() => {
        cy.sortEmployees('officeasc');
      });

    // First and last employee office after ascending order
    cy.fixture('employees/data').then(async ({ sortBy }) => {
      cy.get('div[class="card"]')
        .should('exist')
        .and('be.visible')
        .first()
        .contains(sortBy.office.asc.after.employee.first);
      cy.get('div[class="card"]')
        .should('exist')
        .and('be.visible')
        .last()
        .contains(sortBy.office.asc.after.employee.last);
    });

    // We should on the app home page
    cy.url().should('include', ':3000/');
  });

  it('should show employees descending order by office', () => {
    // First and last employee office before descending order
    cy.fixture('employees/data').then(async ({ sortBy }) => {
      cy.get('div[class="card"]')
        .should('exist')
        .and('be.visible')
        .first()
        .contains(sortBy.office.desc.before.employee.first);
      cy.get('div[class="card"]')
        .should('exist')
        .and('be.visible')
        .last()
        .contains(sortBy.office.desc.before.employee.last);
    });

    // Apply descending order by office
    cy.get('.top-bar')
      .should('exist')
      .and('be.visible')
      .within(() => {
        cy.sortEmployees('officedesc');
      });

    // First and last employee after descending order
    cy.fixture('employees/data').then(async ({ sortBy }) => {
      cy.get('div[class="card"]')
        .should('exist')
        .and('be.visible')
        .first()
        .contains(sortBy.office.desc.after.employee.first);
      cy.get('div[class="card"]')
        .should('exist')
        .and('be.visible')
        .last()
        .contains(sortBy.office.desc.after.employee.last);
    });

    // We should on the app home page
    cy.url().should('include', ':3000/');
  });

  it('should show desired employees on filter by name', () => {
    cy.fixture('employees/data').then(async ({ filterBy }) => {
      // First employee before filter by name
      cy.get('div[class="card"]')
        .should('exist')
        .and('be.visible')
        .first()
        .should('not.contain', filterBy.name);

      // Filter employees by name
      cy.get('.top-bar')
        .should('exist')
        .and('be.visible')
        .within(() => {
          cy.filterEmployees(filterBy.name, 'name');
        });

      // First employee after filter by name
      cy.get('div[class="card"]').should('exist').and('be.visible').first().contains(filterBy.name);
    });

    // We should on the app home page
    cy.url().should('include', ':3000/');
  });

  it('should show desired employees on filter by office', () => {
    cy.fixture('employees/data').then(async ({ filterBy }) => {
      // First and last employees before filter by office
      cy.get('div[class="card"]')
        .should('exist')
        .and('be.visible')
        .first()
        .should('not.contain', filterBy.office);
      cy.get('div[class="card"]')
        .should('exist')
        .and('be.visible')
        .last()
        .should('not.contain', filterBy.office);

      // Filter employees by office
      cy.get('.top-bar')
        .should('exist')
        .and('be.visible')
        .within(() => {
          cy.filterEmployees(filterBy.office, 'office');
        });

      // First and last employees after filter by office
      cy.get('div[class="card"]')
        .should('exist')
        .and('be.visible')
        .first()
        .contains(filterBy.office);
      cy.get('div[class="card"]')
        .should('exist')
        .and('be.visible')
        .last()
        .contains(filterBy.office);
    });

    // We should on the app home page
    cy.url().should('include', ':3000/');
  });

  const setup = () => {
    // Navigate to the app home page
    cy.visit('/');

    // We should be redirected to app home page
    cy.url().should('include', ':3000/');

    // Assert the application name
    cy.get('h1').should('exist').and('be.visible').contains('The fellowship of the tretton37');
  };
});

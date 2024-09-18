// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


// Checks the links on the page, this will find all the links and will check whther the link empty or not and have
// Successfull status
Cypress.Commands.add('checkLinksInElement', (selector) => {
  cy.get(selector)    
    .find('a')         
    .should('have.length.greaterThan', 0)
    .each(($link) => {
      cy.wrap($link)
        .should('have.attr', 'href')
        .and('not.be.empty')
        .then((href) => {
          cy.request(href)    
            .its('status')
            .should('be.oneOf', [200, 301, 302]);
        });
    });
});

// Handle the uncaught exception on the page
Cypress.on('uncaught:exception', (err, runnable) => {
  console.error('Uncaught Exception:', err);
  return false;
});

// Wait for the element to be visible on the page
Cypress.Commands.add('waitForVisible', (selector) => {
  cy.get(selector).should('be.visible');
});

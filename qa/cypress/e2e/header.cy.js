import { Selectors } from "../support/selectors";

// This test will checks the links in the `<header>` navigation
describe('Header Navigation Links', () => {
    beforeEach(() => {
      // Visit the base URL of the site
      cy.visit('/'); 
    });
  
    it('should verify the header links', () => {
      // Ensure the header navigation exists before running the test
      cy.get(Selectors.Home_Page.headerLinks).should('exist').and('be.visible');
      
      cy.get(Selectors.Home_Page.headerLinks).each(($link) => {
        cy.wrap($link)
          .should('have.attr', 'href')
          .and('not.be.empty');
      });
    });
  });
  
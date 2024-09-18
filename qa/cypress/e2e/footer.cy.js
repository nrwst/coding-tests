import { Selectors } from "../support/selectors";

// This test is checking the links in the footer by using custom command
describe('Footer Navigation Links', () => {
    beforeEach(() => {
      // Visit the base URL of the site
      cy.visit('/'); 
    });
  
    it('should verify the footer links', () => {
      // Use the custom command to check links in the footer
      cy.checkLinksInElement(Selectors.Home_Page.footer);
    });
  });
  
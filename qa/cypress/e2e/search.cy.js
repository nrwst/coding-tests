import { searchItems } from '../utils/helper';
import { Selectors } from "../support/selectors";
const {Search_Page} = Selectors

describe('Search Functionality', () => {
  beforeEach(() => {
    // Visit the base URL of the site
    cy.visit('/'); 
  });

  // This test will fail as it tries to have the text hoodie but the actual text is "Classic Hoodie - Black"
    it('should search for "hoodie" and fail', () => {
      var searchItem = "hoodie";

      // Click on the search icon and search for the pink hat
      searchItems(searchItem);

      // Multiple items are visible, choosing very first item of the list to check the searchItem text
      cy.waitForVisible(Search_Page.searchResult);
      cy.get(Search_Page.searchResult).first().should('have.text', searchItem);
    });
  
    // This test will pass as it tries to check that search result contains hoodie in its text i.e "Classic Hoodie - Black"
    it('should search for "hoodie" and pass', () => {
      var searchItem = "hoodie";

      // Click on the search icon and search for the pink hat
      searchItems(searchItem);

      // Multiple items are visible, choosing very first item of the list to check the searchItem text
      cy.waitForVisible(Search_Page.searchResult);
      cy.get(Search_Page.searchResult).first()
      .invoke('text')
      .then((text) => {
        expect(text.toLowerCase()).to.include(searchItem);
      });
    });
  });
  
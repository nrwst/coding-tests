import { searchItems } from '../utils/helper';
import { Selectors } from "../support/selectors";
const {Search_Page,Item_Page,Cart_Section} = Selectors

// In this test, we are searching some item then we are adding that item in the cart and then checking whether
// the correct item is added in the cart or not.

describe('Shopping Cart Functionality', () => {
  beforeEach(() => {
    // Visit the base URL of the site
    cy.visit('/'); 
  });

  it('should search and add an item to the shopping cart and verify it', () => {
    var searchItem = "Pink Hat - UPPERCASE";

    // Click on the search icon and search for the Item
    searchItems(searchItem);

    // Multiple items are visible, choosing very first item of the list
    cy.waitForVisible(Search_Page.searchResult);
    cy.get(Search_Page.searchResult).first().click();

    // Item page will open and adding item into the cart
    cy.waitForVisible(Item_Page.itemDescription);
    cy.get(Item_Page.addCartButton).click();

    // Wait for the cart section to be open
    cy.waitForVisible(Cart_Section.itemTittle);

    // Assert the name of the item which we added in the cart
    cy.waitForVisible(Cart_Section.itemTittle);
    cy.get(Cart_Section.itemTittle).should('have.text', searchItem);

  });
});

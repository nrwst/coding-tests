import { Selectors } from "../support/selectors";
const {Home_Page, Search_Page} = Selectors

// This function will search the item which we can pass inside the function parameter
export function searchItems(searchItem) {
    cy.waitForVisible(Home_Page.searchIcon);
    cy.get(Home_Page.searchIcon).click();
    cy.waitForVisible(Search_Page.inputTextBox);
    cy.get(Search_Page.inputTextBox).clear();
    cy.get(Search_Page.inputTextBox).type(searchItem);
    cy.get(Search_Page.submitSearchButton).click();
  }
  
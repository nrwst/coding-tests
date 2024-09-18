// In this test, we are visiting the site home page and checking some headings to be visible on the page.
describe('WeRateDogs Website Test', () => {
    it('Should load the homepage successfully', () => {
      cy.visit('/')
      cy.url().should('include', 'weratedogs.com')
      cy.get('h1').should('be.visible')
    })
  })
  
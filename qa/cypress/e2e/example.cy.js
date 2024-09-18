Cypress.on("uncaught:exception", (err, runnable) => {
  return false
})

it("Should test something", () => {
  cy.visit("/")
})

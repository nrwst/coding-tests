# Quality Assurance Test

For the assessment, to assure you we're not using you for free labor, we'll be testing a website, https://weratedogs.com with Cypress.

We have included an empty Cypress framework.

Please fork this repository to your personal GitHub account and clone it locally. Once cloned you can start up the development server with:

```
cd qa
npm install
npx cypress open
```

We would like to see working tests in your finished submission.

### Code Test One
The first test is being able to define the site under test. See the intro text above.

### Code Test Two
Write a test case the checks the links in the `<header>` navigation. `header.cy.js`

### Code Test Three
If you haven't already done so in Test Two, convert the link checker used in the `<header>` test into a reusable custom command and use it to test the links in the `<footer>` navigation. `footer.cy.js`

### Code Test Four
Write a test that adds an item to the shopping cart and asserts the product you intended to add is the one that was actually added. `shopping.cy.js`

### Code Test Five
Write a test that in one `it` block searches for "hoodie" and fails at the assertion. Write a second `it` block that searches for "hoodie" and passes at the assertion. `search.cy.js`

### Strategy Test [no code]
Assume there's no testing at all for a new website at https://catadoptionteam.org/. How would you prioritize the testing for this non-profit organization? Why? Provide highlights, not exhaustive test coverage. The main goals of their website are fundraising and getting cats adopted to forever homes.

e.g. Over the years, New Relic has been heavily focused on Product Led Growth. Test cases were likewise heavily focused on the paths to acquire new users and describe the product.

We test the functionality of the signup form:
 
 ```
 it("Should take a screenshot" ...
 it("Should have an H1 element" ...
 it("Should have a block of text" ...
 it("Should have some links to legalese" ...
 it("Should submit the form" ...
 ```

We test various components on the Platform page:

```
it("Should display an H1"...
it("Should display a CTA in the Banner"...
it("Should animate the playlist"...
it("Should have good links in the various components"...
it("Should have an R-19 Carousel"...
it("Should have a link farm"...
it("Should animate the media carousel"...
it("Should have a CTA Footer"...
```

 With a greater emphasis on Sales Led Growth, the testing strategy needs to evolve. We want to get a sense of your ability to prioritize and strategize continued test development.

## Submitting your work

Double and triple check that everything passes except the one deliberately expected to fail, and feel free to add comments in code or a README file to explain your approach if you'd like.

Email a link back to your repository for us to review. We should be able to clone it locally, run the `npx cypress open` command to run the tests. Bonus points for a command that would run all the tests from the command line.

You have 48 hours from now to return this exercise back to us. Good luck, and feel free to reach out with any questions!
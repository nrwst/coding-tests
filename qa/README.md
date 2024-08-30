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

### Answer [Cat Adoption Websites Test Strategy]
**High Priority Use Cases**
1. Adoption Of Cat & Sponsoring
* Test on browseing process of avaliable cats , by direct search or filteration on Location , Sex , Age and Size
* Making sure the adoption process or flow working seamless
* Make sure user can sponsor the cat with minimum amount $30 to maximum sponsor
* Make sure adoption fees collected as per policy on each cat with factors like age , behaviour , medical needs and demands.
* Successfull adoption of cat (one of main objective that cat should get home )
2. Fundraising Functionality
* Test Both Monthly giving and Other ways of giving flows work seamless
* Test chose amount with various range and custom range submission work
* Test user information forms work seamless with all error handling funcitonalty
* Test the various mode payment by Card , Paypal , Bank Transfer
* Test the other way of donation by shoping on shop support cat
e.g KitnipBox , utokia ......
**Why** 
* The high-priority tests focus on cat adoption by attracting potential adopters and securing donations, their primary source of funding for cat

**Medium Priority Use Cases**
* Test Website compabtility testing ( Dekstop , Mobile , tablet)
* Test all Main menu , Sub Menu ,Drop Menu , Navigation Link , Search Functionlty , Filter functionality works fine
* Test for websites performance e.g load time on each page , payment processing , adoption flow.
* Test for all Cat details ( image , age , sex & location correctly populated )
* Test for News & Update subscription with name and email work seamless
* Services Functionlty
**Why** 
* This ensure a positive user experience across various platforms and devices.

**Low Priority Use Cases**
* Content validation
* Login Functionaly of volunteer
   
**Why** 
* less critical aspects but can be included in a more comprehensive testing strategy.



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

### Answer [Product Sales Lead Grwoth Test Strategy]
**Testing Strategy for Sales Groowth**
```
it("Should have request demo page")
it("should have request demo form with purpose of request")
it("Should have Contact Number with all possible location")
it("Should have contact us form with end user info")
it("Should have Exisitng user questions sections")
it("Should Recive demo request as lead")
it("Should display demo requested user detail to sales team")
it("Should successfully show demo to requested user")
it("Should successfully convert the lead to customer purchase product")
it("Should provide support post product sales")
```


## Submitting your work

Double and triple check that everything passes except the one deliberately expected to fail, and feel free to add comments in code or a README file to explain your approach if you'd like.

Email a link back to your repository for us to review. We should be able to clone it locally, run the `npx cypress open` command to run the tests. Bonus points for a command that would run all the tests from the command line.

You have 48 hours from now to return this exercise back to us. Good luck, and feel free to reach out with any questions!
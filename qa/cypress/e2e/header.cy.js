describe('Header Navigation Links',()=>{
    beforeEach(()=>{ 
          cy.visit('https://weratedogs.com')
          })
    it('check valid links for header grid sections',()=>{
        cy.get('header ul li').find('a').each(($link)=>{
            const href = $link.attr('href')
            cy.log(href)
            expect(href).to.not.be.empty
        })
    })
})

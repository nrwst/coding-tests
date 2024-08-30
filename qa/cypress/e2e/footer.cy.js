describe('Footer Navigation Links',()=>{
    beforeEach(()=>{
        cy.visit('https://weratedogs.com/')
    })
    it('check valid links for footer grid sections',()=>{
        cy.get('footer ui li').find('a').each(($link)=>{
            const href = $link.attr('href')
            expect(href).to.not.be.empty
        })
    })
})
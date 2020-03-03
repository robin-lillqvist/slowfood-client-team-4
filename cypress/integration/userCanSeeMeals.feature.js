describe('User can see Meals', () => {
    beforeEach(function () {
        cy.visit('/')
    })
    it('Shows food in list',() => {
        cy.get('.food').should('contains', 'Potatis');
    })

    it('Shows description'), () => {
       cy.get('.desc').should('contains', 'halländska viddarna') 
    }

    it('Shows price', () => {
        cy.get('.price').should('contains', '98')
    })

})

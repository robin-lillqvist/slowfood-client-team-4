describe('User can see Meals', () => {
   
    it('Shows food in list',() => {
        cy.visit('/');
        cy.get('#food').should('contains', 'Potatis');
    })

    it('Shows food in list',() => {
        cy.visit('/');
        cy.get('#food').should('contains', 'Potatis');
    })

    it('Shows food in list',() => {
        cy.visit('/');
        cy.get('#food').should('contains', 'Potatis');
    })

})

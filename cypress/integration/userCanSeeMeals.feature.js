describe('User can see Meals', () => {
    before(function () {
        cy.visit('/')
    })

    it('Shows food in list',() => {
        cy.get(".food").should('contain', 'Potatis');
    });

    it('Shows description', () => {
       cy.get('.description');
    });

    it('Shows price', () => {
        cy.get('.price').should('contain', '98');
    });

})

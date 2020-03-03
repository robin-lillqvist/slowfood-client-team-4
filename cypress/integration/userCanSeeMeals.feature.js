describe('User can see Meals', () => {
    before(function () {
        cy.visit('/')
    })

    it('Shows meal name in menu',() => {
        cy.get(".meal_name").should('contain', 'Potatoes');
    });

    it('Shows description', () => {
       cy.get('.meal_desc').should('contain', 'plockad på dom hallänska vidderna')
    });

    it('Shows price', () => {
        cy.get('.meal_price').should('contain', '98');
    });

})

describe("User can add a product to thier order", () => {
  before(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/v1/products",
      response: "fixture:products.json"
    });
    cy.route({
      method: "POST",
      url: "http:/localhost:3000/api/v1/orders",
      response: { message: "A product has been added to your order" }
    });
    cy.route({
      method: "PUT",
      url: "http:/localhost:3000/api/v1/orders/1",
      response: { message: "A product has been added to your order" }
    });
  });

  it("user gets a confirmation message when adding a product to order", () => {
    cy.visit("http://localhost:3001");
    cy.get("#menu-item-1").within(() => {
      cy.get("#button")
        .contains("Add to order")
        .click();
    });
    cy.wait(3000);
    cy.get('.message').should('contain', 'The product has been added to your order')
  });
  
  it("user gets a confirmation message when adding a product to order", () => {
    cy.visit("http://localhost:3001");
    cy.get("#menu-item-1").within(() => {
      cy.get("#button")
        .contains("Add to order")
        .click();
    });
    cy.wait(3000);
    cy.get('.message').should('contain', 'The product has been added to your order')
  });

});

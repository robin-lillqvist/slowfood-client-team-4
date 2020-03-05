describe("user views menus", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  describe("WHere there are products", () => {
    before(() => {
      cy.server();
      cy.route({
        method: "GET",
        url: "http://localhost:3000/api/v1/products",
        response: "fixture:ProductData.json"
      });
    });

    it("successfully", () => {
      cy.get("#menu-item").within(() => {
        cy.contains("Potatoes");
        cy.contains("plockad på dom hallänska vidderna");
        cy.contains("98");
      });
    });
  });

  describe("when the are NO products", () => {
    before(() => {
      cy.server();
      cy.route({
        method: "GET",
        url: "http://localhost:3000/api/v1/products",
        response: []
      });
    });

    it("unsuccessfully", () => {
      cy.get("#menu-item").should("not.exist");
    });
  });
});

describe("User authenticates", () => {
    beforeEach(() => {
        cy.visit("/");
    });

it("successfully with valid credentials", () => {
    before(() => {
        cy.server();
        cy.route({
            method: 'POST',
            url: "http://localhost:3000/api/v1/auth/sign_in",
            response: 'fixture:login.json',
            headers: {
                uid: 'user1@mail.com'
            }
        });
    })

    cy.get("#login").click();
    cy.get("#login-form").within(() => {
        cy.get("#email").type("user@mail.com");
        cy.get("#password").type("password");
        cy.get('button').contains('Submit').click()
    });
    cy.get("#message").should("contain", "Hi user@mail.com");
});

it("unsuccessfully with invalid credentials", () => {
    cy.get("#login").click();
    cy.get("#login-form").within(() => {
        cy.get("#email").type("user@mail.com");
        cy.get("#password").type("wrongpassword");
        cy.get('button').contains('Submit').click()
    });
    cy.get("#message").should("contain", "Invalid login credentials.")
    });
});
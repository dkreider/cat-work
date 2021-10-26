describe('CatWork', () => {
    it('should do a successful checkout', () => {
        cy.visit("/")
        let randomCat = Math.floor(Math.random() * 8 ) + 1;
        cy.get(".row>.col-4>.card>.card-body>.btn").eq(randomCat).click();

        cy.get("#firstName").click().type("Tom");
        cy.get("#lastName").click().type("Kruss");
        cy.get("#email").click().type("cat@catwork.com");

        cy.get('[type="radio"]').eq(1).click();
        cy.get("#cc-name").click().type("Tom Kruss");
        cy.get("#cc-number").click().type("2222444455551111");
        cy.get("#cc-expiration").click().type("10/22");
        cy.get("#cc-cvv").click().type("342");

        cy.get("button").last().click();

        cy.get(".alert-success");
    });
});
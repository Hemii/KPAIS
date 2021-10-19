describe('https://www.github.com', () => {

    it('user should search and sort', () => {

        cy.visit('https://www.github.com');

        cy.viewport('macbook-11')

        cy.get('.header-search-wrapper > .form-control').type('Hello world').should('have.value', 'Hello world');

        cy.get('#jump-to-suggestion-search-global > .no-underline').click();

        cy.get('.menu-item ').contains('Wikis').click();

        cy.get('.hx_hit-wiki').its("length").should("be.gte", 3);
    })

    it('user should access page about mobile app', () => {

        cy.visit('https://www.github.com');

        cy.viewport('macbook-11')

        cy.get(':nth-child(1) > .HeaderMenu-details > .HeaderMenu-summary').click();

        cy.get('.edge-item-fix').contains('Mobile').click();

        cy.url().should('include', '/mobile');

    })

    it('should be video on github enterprise page', () => {

        cy.visit('https://www.github.com');

        cy.viewport('macbook-11')

        cy.get('.d-lg-flex.list-style-none > :nth-child(3) > .HeaderMenu-link').click();

        cy.get('video').its("length").should("be.gte", 2);

    })

    it('if user is not signed, follow should redirect to github.com/login', () => {

        cy.visit('https://www.github.com');

        cy.viewport('macbook-11')

        cy.get(':nth-child(4) > .HeaderMenu-details > .HeaderMenu-summary').click();

        cy.get('.edge-item-fix').contains('Explore GitHub').click();

        cy.get('.Box-footer .f6').click();

        cy.get('.mr-3 > .HeaderMenu-link').should('be.visible');

        cy.get('.follow > .btn').first().click();

        cy.url().should('include', 'github.com/login');
    })

})
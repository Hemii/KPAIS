describe('www.google.sk', () => {
    it('user should search images of fiit', () => {

        cy.visit('https://www.google.com');

        cy.get('#L2AGLb').click();

        cy.get('input[name="q"]').type('fiit');

        cy.get('.G43f7e > :nth-child(1)').first().click();

        cy.get('.MUFPAc > :nth-child(2) > a').click();

        cy.get(':nth-child(4) > .F9PbJd').click();

        cy.get('.islrc img').its("length").should("be.gte", 3);

    })


    it('user should change language of doodles', () => {

        cy.visit('https://www.google.com');

        cy.get('#L2AGLb').click();

        cy.get('.FPdoLc input[value="Skúsim šťastie"]').click();

        cy.get('#lang-chooser').select('cs');

        cy.url().should('include', '?hl=cs');

    })

    it.only('user should type with soft keyboard', () => {

        cy.visit('https://www.google.com');

        cy.get('#L2AGLb').click();

        cy.get('.Umvnrc').click();

        cy.get('#kbd #K67').click();

        cy.get('#kbd #K65').click();

        cy.get('#kbd #K84').click();

        cy.get('.aajZCb > .lJ9FBc > center > .gNO89b').click();

        cy.get('input.gLFyf').invoke('val').should('not.be.empty');
        cy.get('input.gLFyf').invoke('val').should('include', 'cat');
    })

})
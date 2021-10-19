describe('www.google.sk', () => {

    it('user should search images of fiit', () => {

        cy.visit('https://www.google.com'); //navstivenie stranky

        cy.get('#L2AGLb').click(); //potvrdenie cookies

        cy.get('input[name="q"]').type('fiit'); //zadanie textu do inputu pre vyhladavanie

        cy.get('.G43f7e > :nth-child(1)').first().click(); //kliknutie na prvy vysledok pre zadany text

        cy.get('.MUFPAc > :nth-child(2) > a').click(); //zobrazenie obrazkov pre vysledok

        cy.get(':nth-child(4) > .F9PbJd').click(); //prekliknutie na vysledny o stu fiit

        cy.get('.islrc img').its("length").should("be.gte", 3); //kontrala ci dany web obsahuje obrazky

    })


    it('user should change language of doodles', () => {

        cy.visit('https://www.google.com'); //navstivenie stranky

        cy.get('#L2AGLb').click(); //potvrdenie cookies

        cy.get('.FPdoLc input[value="Skúsim šťastie"]').click(); //sputenie možnosti "Skúsim štastie"

        cy.get('#lang-chooser').select('cs'); //zmena jazyka na cesky

        cy.url().should('include', '?hl=cs'); //kontrola ci sa zmena jazyka udiala pomocou url
    })

    it('user should type with soft keyboard', () => {

        cy.visit('https://www.google.com'); //navstivenie stranky

        cy.get('#L2AGLb').click(); //potvrdenie cookies

        cy.get('.Umvnrc').click(); //otvorenie softverovej klavesnice

        cy.get('#kbd #K67').click(); //zadanie pismena "c"

        cy.get('#kbd #K65').click(); //zadanie pismena "a"

        cy.get('#kbd #K84').click(); //zadanie pismena "t"

        cy.get('.aajZCb > .lJ9FBc > center > .gNO89b').click(); //potvrdenie vyhladania

        cy.get('input.gLFyf').invoke('val').should('not.be.empty'); //skontrolovanie ci input nie je prazdny
        cy.get('input.gLFyf').invoke('val').should('eq', 'cat'); //skontrolovanie ci input obsahuje slovo "cat"
    })

})
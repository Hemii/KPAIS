describe('https://www.github.com', () => {

    it('user should search and sort', () => {

        cy.visit('https://www.github.com'); //navstivenie stranky

        cy.viewport('macbook-11') //zmena rozlíšenia  - testovanie ntb

        cy.get('.header-search-wrapper > .form-control').type('Hello world').should('have.value', 'Hello world'); //vyhladanie frazy "Hello world"

        cy.get('#jump-to-suggestion-search-global > .no-underline').click({ force: true }); //potvrdenie vysledku

        cy.get('.menu-item ').contains('Wikis').click(); //zobrazenie Wiki vysledkov

        cy.get('.hx_hit-wiki').its("length").should("be.gte", 3); //overenie ci sa nejaké vysledky zobrazili
    })

    it('user should access page about mobile app', () => {

        cy.visit('https://www.github.com'); //navstivenie stranky

        cy.viewport('macbook-11') //zmena rozlíšenia  - testovanie ntb

        cy.get(':nth-child(1) > .HeaderMenu-details > .HeaderMenu-summary').click(); //zobrazenie selectora "Why Github ?"

        cy.get('.edge-item-fix').contains('Mobile').click(); //vybratie moznosti o mobilnej aplikacii

        cy.url().should('include', '/mobile'); //kontrola ci nas presmerovala - podla url

    })

    it('should be rendered video on github enterprise page', () => {

        cy.visit('https://www.github.com'); //navstivenie stranky

        cy.viewport('macbook-11') //zmena rozlíšenia  - testovanie ntb

        cy.get('.d-lg-flex.list-style-none > :nth-child(3) > .HeaderMenu-link').click(); //zobrazenie Github Enterprise

        cy.get('video').its("length").should("be.gte", 2); //kontrola ci sa tu nachadzaju videa

    })

    it('if user is not signed, follow should redirect to github.com/login', () => {

        cy.visit('https://www.github.com'); //navstivenie stranky

        cy.viewport('macbook-11') //zmena rozlíšenia  - testovanie ntb

        cy.get(':nth-child(4) > .HeaderMenu-details > .HeaderMenu-summary').click(); //zobrazenie selectora pre Explore

        cy.get('.edge-item-fix').contains('Explore GitHub').click(); //kliknutie na Github Explore 

        cy.url().should('include', '/explore'); //kontrola o presmerovani

        cy.get('.Box-footer .f6').click(); //pouzitie odkazu na bocnom panely pre zobrazenie "See more trending developers"

        cy.url().should('include', '/trending/developers'); //kontrola o presmerovani

        cy.get('.mr-3 > .HeaderMenu-link').should('be.visible'); //kontrola ci je user odhlaseny / viditelne Sign In

        cy.get('.follow > .btn').first().click(); //pouzitie tlacidla follow pre prveho developera

        cy.url().should('include', 'github.com/login'); //kontrala redirectu na login page
    })

})
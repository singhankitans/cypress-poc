//firsttest.js
import LoginPage from '../../support/pageobjects/login';
describe('My First Test', () => {

    it('Launch Browser and Navigate', () => {

        //cy.visit('https://www.browserstack.com/');

       // cy.visit("https://www.amazon.in/");
         LoginPage.visit();
        
        // cy.get("#user-name").type("standard_user")
        // cy.get("#password").type("secret_sauce", {log:false})

        // cy.title().should('eq', 'Most Reliable App & Cross Browser Testing Platform | BrowserStack')
        // //cy.wait(5000);
        // cy.get('#product-text-section >h1').should('have.text', 'The Modern Test Stack');
        // //cy.get('button#featured-section-tab.product-section__tabs-btn').should('have.text', 'Featured');
        // //cy.get('#featured-section-tab').should('have.text', 'Featured');
         cy.get('#twotabsearchtextbox').type('flower').type('{enter}');
         cy.scrollTo(150,300);
        // cy.xpath('(//div[@data-cy="title-recipe"])[1]').click();
         cy.xpath('(//div[@data-cy="title-recipe"]//h2//a)[1]').invoke('removeAttr', 'target').click();
         cy.get('#add-to-cart-button').click();
         cy.get('#sc-buy-box-ptc-button').click();
         cy.get('#ap_email').type('singhankitanas@gmail.com');
         cy.get('#continue').click();
         cy.get('#ap_password').type('Nisha#30');
         cy.get('#signInSubmit').click();         
         // cy.get('#nav-search-submit-button').click(); 
              

    })

  })
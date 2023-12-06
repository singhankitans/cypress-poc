//const { describe } = require("mocha");

describe('My tests', ()=>{
    it('Verify the title of the page', ()=>{
        cy.visit("https://demo.nopcommerce.com/");
        cy.title('eq', 'nopCommerce demo store');
        cy.get('#small-searchterms').type('iphone');
        cy.get('[type=submit]').type('{enter}');

    })

    it('Search functionality of the page', ()=>{
        cy.visit("https://demo.nopcommerce.com/");
        cy.get('#small-searchterms').type('iphone');
        cy.get('[type=submit]').type('{enter}');

    })
})
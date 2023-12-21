// LoginPage.js
class LoginPage {
    visit() {
      cy.visit('https://www.amazon.in/');
    }
  
    fillUsername(username) {
      cy.get('#ap_email').type(username);
    }
  
    fillPassword(password) {
      cy.get('#ap_password').type(password);
    }
  
    submit() {
      cy.get('#signInSubmit').click();
    }

    enterElementToSearch() {
        cy.get('#twotabsearchtextbox').type('flower').type('{enter}');
    }

    clickOnElementToSearch(){
        cy.xpath('(//div[@data-cy="title-recipe"]//h2//a)[1]').invoke('removeAttr', 'target').click();
    }

    addToCart() {
        cy.get('#add-to-cart-button').click();
    }

    clickOnContinueAfterCart() {
        cy.get('#sc-buy-box-ptc-button').click();
    }

    clickOnContinue(){
        cy.get('#continue').click();
    }
  }

  
  export default new LoginPage(); 
import LoginPage from '../../support/pageobjects/login';

describe('My First Test', () => {

    it('Launch Browser and Navigate', () => {
         LoginPage.visit();
         LoginPage.enterElementToSearch();
         cy.scrollTo(150,300);
         LoginPage.clickOnElementToSearch();
         LoginPage.addToCart();
         LoginPage.clickOnContinueAfterCart();
         LoginPage.fillUsername('singhankitanas@gmail.com');
         LoginPage.clickOnContinue();
         LoginPage.fillPassword('Nisha#30');
         LoginPage.submit();

    })

  })
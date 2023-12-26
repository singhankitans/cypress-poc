import SwagLabs from '../../support/pageobjects/swagLabs';

describe('My First Test', () => {

    beforeEach(() => {
        cy.log('I run before every test in every spec file!!!!!!')
      })

    it('Login into the swag labs page', () => {
        SwagLabs.visit();
        SwagLabs.fillUsername('standard_user');
        SwagLabs.fillPassword('secret_sauce');
        SwagLabs.submit();

    })

    it('Add item to the cart',  () => {
        SwagLabs.addItemToCart();
        SwagLabs.goToCartContainer();
        cy.wait(9000)
    })

    afterEach(() => {
        cy.log('I run before every test in every spec file!!!!!!')
      })







      
      // npm install cypress-parallel  -- install this for parallel execution
      // cmd to run tests in parallel -- npm run cy:parallel

})
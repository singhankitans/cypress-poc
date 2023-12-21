const usernamee = "#user-name"; // css selectors
const passwordd = "#password";
const loginButton = "#login-button";
const addItemToCart = "#add-to-cart-sauce-labs-backpack";
const goToCartContainer = "#shopping_cart_container"

class SwagLabs {
    visit() {
        cy.visit('https://www.saucedemo.com/');
      }

      fillUsername(username) {
        cy.get(usernamee).type(username);
      }
  
      fillPassword(password) {
        cy.get(passwordd).type(password);
      }
    
      submit() {
        cy.get(loginButton).click();
      }

      addItemToCart() {
        cy.get(addItemToCart).click();
      }

      goToCartContainer() {
        cy.get(goToCartContainer).click();
      }
  
}

export default new SwagLabs();

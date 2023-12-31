const resp_data = require("../../fixtures/customer_payload.json");
const resp_data1= require("../../fixtures/employee_payload.json");
import apiUrls from '../../config/api_config.json';



describe('My First Test', () => {
it("Test case1 : GET API", () => {
      cy.request("GET", apiUrls.getApiUrl).should((response) => {

      expect(response.status).to.eq(200);
    });
  });


  it("Test case2 :POST API", () => {
    const queryParam = {key: 'key=qaclick123'};
    cy.request ({
      method : 'POST',
      url    : apiUrls.postApiUrl,
      body   :  resp_data,
      qs: queryParam
    }).as('req');
    
      cy.get('@req').then((resp) => {
      expect(resp.status).to.eq(200);
      
      expect(resp.body.status).to.eq('OK');
      const myStatus = JSON.stringify(resp.body.status);
      cy.log("value of status: "+ myStatus);
      cy.log(JSON.stringify(resp.body));

     });
  });


  it("Test case2 :PUT API", ()=> {
    cy.request ({
      method : 'PUT',
      failOnStatusCode: false,
      url    : apiUrls.putApiUrl,
      body   :  resp_data1
    }).as('putReq');

    cy.get('@putReq').then((resp) => {
      expect(resp.status).to.eq(parseInt(200));
  });

  })
})
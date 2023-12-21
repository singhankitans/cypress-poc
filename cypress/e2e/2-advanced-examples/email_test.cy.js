// cypress/integration/test.spec.js

// describe('Email Sending Test', () => {
//     it('should send an email using Gmail', () => {
//       const emailOptions = {
//         user: 'ankita.singh@tothenew.com',  // Your Gmail address
//         pass: 'rfza xzeg zorw ufyc',   // Your Gmail password or app-specific password
//         to: 'mritunjay@tothenew.com',
//         subject: 'Test Email',
//         text: 'This is a test email sent using Cypress and gmail-send.',
//       };
  
//       cy.sendEmail(emailOptions);
//     });
//   });
  
describe('Email Sending Test', () => {
    it('should send an email using the Node.js script', () => {
      const emailOptions = {
        to: 'mritunjay@tothenew.com',
        subject: 'Test Email from Cypress',
        text: 'This is a test email sent using Cypress and Nodemailer.',
      };
  
      cy.sendEmail(emailOptions); // Call the custom command
  
      // Continue with other test actions after email is sent
    });
  });
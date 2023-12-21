// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// cypress/support/commands.js

// const gmailSend = require('gmail-send');

// Cypress.Commands.add('sendEmail', (emailOptions) => {
//   const email = gmailSend(emailOptions);
//   email({}, function (err, message) {
//     if (err) {
//       throw new Error(`Failed to send email: ${err}`);
//     }
//     cy.log(`Email sent successfully: ${message}`);
//   });
// });

Cypress.Commands.add('sendEmail', (emailOptions) => {
    cy.exec('node sendEmail.js', { args: emailOptions })
      .then((result) => {
        console.log('Email sent successfully:', result.stdout);
      })
      .catch((error) => {
        console.error('Error sending email:', error.stderr);
        throw new Error('Failed to send email');
      });
  });
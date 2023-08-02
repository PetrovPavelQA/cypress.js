describe('автотесты для формы логина и пароля на [login.qa.studio]', function () {
    it('восстановление пароля', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#forgotEmailButton').click ();
         cy.get('#mailForgot').click ();
         cy.get('#mailForgot').type('petrov.news@gmail.com');
         cy.get('#restoreEmailButton').click ();
         cy.get('#message').should('be.visible');
         cy.get('#messageHeader').should('be.visible');
         cy.get('#messageHeader').contains ('Успешно отправили пароль на e-mail');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
         //cy.get('#exitMessageButton > .exitIcon').click (); опционально, проверил, что все отрабатывает

        })
    })
describe('автотесты для формы логина и пароля на [login.qa.studio]', function () {
    it('проверка с неверным паролем', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type ('wrongpasss');
         cy.get('#loginButton').click ();
         cy.get('#message').should('be.visible');
         cy.get('#messageHeader').should('be.visible');
         cy.get('#messageHeader').contains('Такого логина или пароля нет');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');

    })

})
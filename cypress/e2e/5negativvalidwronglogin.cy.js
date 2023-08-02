
describe('автотесты для формы логина и пароля на [login.qa.studio]', function () {
    it('негативный кейс валидации,неверный логин', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('germandolnikov.ru');
         cy.get('#pass').type ('iLoveqastudio1');
         cy.get('#loginButton').click ();
         cy.get('#message').should('be.visible');    
         cy.get('#messageHeader').should('be.visible');
         cy.get('#messageHeader').contains ('Нужно исправить проблему валидации');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
         



         
     })
 })
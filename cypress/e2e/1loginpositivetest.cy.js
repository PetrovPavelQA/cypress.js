
describe('автотесты для формы логина и пароля на [login.qa.studio]', function () {
    it('позитивный кейс авторизации', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type ('iLoveqastudio1');
         cy.get('#loginButton').click ();
         cy.get('#message').should('be.visible');
         
         cy.get('#messageHeader').should('be.visible');
         cy.get('#messageHeader').contains ('Авторизация прошла успешно');
         



         
     })
 })
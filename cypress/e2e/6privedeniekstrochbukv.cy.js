
describe('автотесты для формы логина и пароля на [login.qa.studio]', function () {
    it('проверка приведения к строчным буквам', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('GerMan@Dolnikov.ru');// что бы удостоверится, что нет приведения к строчным буквам
         cy.wait(3000);
         cy.get('#pass').type ('iLoveqastudio1');
         cy.get('#loginButton').click ();
         cy.get('#message').should('be.visible');    
         cy.get('#messageHeader').should('be.visible');
         cy.get('#messageHeader').contains ('Авторизация прошла успешно');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
         



         
     })
 })
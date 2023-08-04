
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


 describe('автотесты для формы логина и пароля на [login.qa.studio]', function () {
    it('негативный кейс, проверка с неверным паролем', function () {
          cy.visit('https://login.qa.studio/');
          cy.get('#mail').type('german@dolnikov.ru');
          cy.get('#pass').type ('wrongpasss');
          cy.get('#loginButton').click ();
          cy.get('#message').should('be.visible');
          cy.get('#messageHeader').should('be.visible');
          cy.get('#messageHeader').contains('Такого логина или пароля нет');
          cy.get('#exitMessageButton > .exitIcon').should('be.visible');
     })   


 describe('автотесты для формы логина и пароля на [login.qa.studio]', function () {
        it('негативный кейс авторизации, неверный логин', function () {
           cy.visit('https://login.qa.studio/');
           cy.get('#mail').type('wrong@dolnikov.ru');
           cy.get('#pass').type ('iLoveqastudio1');
           cy.get('#loginButton').click ();
           cy.get('#message').should('be.visible');    
           cy.get('#messageHeader').should('be.visible');
           cy.get('#messageHeader').contains ('Такого логина или пароля нет');
           cy.get('#exitMessageButton > .exitIcon').should('be.visible');          
     })


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
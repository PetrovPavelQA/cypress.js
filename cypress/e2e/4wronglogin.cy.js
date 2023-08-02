describe('автотесты для формы логина и пароля на [login.qa.studio]', function () {
    it('негативный кейс авторизации, неверный логин', function () {

                 cy.visit('https://login.qa.studio/');
                 cy.get('#mail').type('wrong@dolnikov.ru');
                 cy.get('#pass').type ('iLoveqastudio1');
                 cy.get('#loginButton').click ();
                 cy.get('#message').should('be.visible');    
                 cy.get('#messageHeader').should('be.visible');
                 cy.get('#messageHeader').contains ('Такого логина или пароля нет');
                 cy.get('#exitMessageButton > .exitIcon').should('be.visible')

            
                })


            })
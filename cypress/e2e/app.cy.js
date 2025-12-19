// app.spec.js created with Cypress
//
describe('The app', () => {
    it('tells your name', () => {
        cy.visit('')
        cy.get('h1')
        .should('have.text', 'Hello, my name is Szilvia!')
    })
  })

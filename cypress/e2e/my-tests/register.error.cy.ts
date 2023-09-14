describe('My first tests', () => {
    it('Display error if no email', () => {
        //Arrange - przygotuj
        cy.visit('http://www.automationpractice.pl/index.php')
        //Act - wykonaj
        cy.get('.login').click()
        cy.get('#SubmitCreate').click()
        //Assert - sprawdź
        cy.contains('Invalid email address.').should('be.visible')
    })
    
})
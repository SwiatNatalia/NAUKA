it('Register account', ()=> {
    cy.visit('http://www.automationpractice.pl/index.php')
    cy.get('.login').click()
    cy.get('#email_create').type('E2EUsermail+1@gmail.com')
    cy.get('#SubmitCreate').click()
    cy.get('#id_gender1').click()
    cy.get('#customer_firstname').type('John')
    cy.get('#customer_lastname').type('Smith')
    cy.get('#passwd').type('Password123@')
    cy.get('#days').select('1')
    cy.get('#months').select('January')
    cy.get('#years').select('1999')
    cy.contains('Register').click();
})
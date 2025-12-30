// Cypress-style e2e test (requires Cypress to be installed & configured)

describe('Registration E2E', () => {
  it('registers successfully and shows alert', () => {
    cy.visit('/register');

    cy.get('[data-cy=name]').type('E2E User');
    cy.get('[data-cy=email]').type('e2e@example.com');
    cy.get('[data-cy=password]').type('password123');
    cy.get('[data-cy=confirmPassword]').type('password123');
    cy.get('[data-cy=gender]').select('female');

    cy.window().then((win) => {
      cy.stub(win, 'alert').as('alert');
    });

    cy.get('[data-cy=save]').click();

    cy.get('@alert').should('have.been.calledWith', 'Registration successful');
  });

  it('reset clears fields', () => {
    cy.visit('/register');
    cy.get('[data-cy=name]').type('Test');
    cy.get('[data-cy=reset]').click();
    cy.get('[data-cy=name]').should('have.value', '');
  });
});

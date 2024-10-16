/// <reference types="cypress" />

describe('checking the fetching and h1', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });

  it('should check if it exist and display the correct title', () => {
    cy.get('[data-testid="cypress-title"]')
      .should('exist')
      .should('have.text', "Cardcaptor Sakura Cards");
  });

  it('should display if h2 exist', () => {
    cy.get('[data-testid="cypress-card-name"]')
      .should('exist')
  });
});

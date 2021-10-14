describe('Landing user flows', () => {

  beforeEach(() => {
    cy.loadHome();
  });

  it('The url should be url/', () => {
    cy.url().should('include', '/')
  });

  it('The site should display the name of the app at all times', () => {
    cy.get('h1').contains('Can I go outside?')
  });

  it('The app title should be a link home', () => {
    cy.get('h1').click()
      .url().should('include', '/')
  });

  it('When a user first visits the site it should contain instructions', () => {
    cy.contains(
      `Select your weather thresholds and find out if you can go outside`
    )
  });

  it('Should have a form with default values', () => {
    cy.get('div[role="button"]').eq(0).contains('50')
      .get('div[role="button"]').eq(1).contains('90')
      .get('div[role="button"]').eq(2).contains('10')
      .get('div[role="button"]').eq(3).contains('50')
  });

  it.skip('User can choose a different value than the default value', () => {
    cy.get('div[role="button"]').eq(0).select('40').should('have.value', '40')
      .get('div[role="button"]').eq(0).select('60').should('have.value', '60')

      .get('div[role="button"]').eq(1).select('80').should('have.value', '80')
      .get('div[role="button"]').eq(1).select('100').should('have.value', '100')

      .get('div[role="button"]').eq(2).select('5').should('have.value', '5')
      .get('div[role="button"]').eq(2).select('20').should('have.value', '20')
      .get('div[role="button"]').eq(2).select('30').should('have.value', '30')

      .get('div[role="button"]').eq(3).select('30')
        .should('have.value', '30')
      .get('div[role="button"]').eq(3).select('70')
        .should('have.value', '70')
  });

  it('The user should be taken to the results page after clicking submit', () => {
    cy.get('a').eq(1).click()
    cy.url().should('include', '/results')  
  });

  // The following test does currently not work as Cypress does not currently
  // support typing enter on an "unfocused" element
  // https://github.com/cypress-io/cypress/issues/8267
  // it('The homepage can be navigated using the keyboard', () => {
  //   cy.get('body').tab().tab().tab().tab().tab().tab().type('{enter}')
  //   cy.url().should('include', '/results')  
  // });

});
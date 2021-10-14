describe('Calendar user flows', () => {

  beforeEach(() => {
    cy.loadCalendar();
  });

  it('The url should be url/calendar', () => {
    cy.url().should('include', '/calendar')
  });

  it('The site should display the name of the app at all times', () => {
    cy.get('h1').contains('Can I look at a tree?')
  });

  it('The app title should be a link home', () => {
    cy.get('h1').click()
      .url().should('include', '/')
  });

  it('A user should see a subheader for the page', () => {
    cy.get('h2').contains(`Your calendar`)
  });

  it('A user should see instructions for adding hours to their calendar', () => {
    cy.contains(
      `Click on an hour to delete it from your calendar`
    )
  });

  // The following test does currently not work as Cypress does not currently
  // support typing enter on an "unfocused" element
  // https://github.com/cypress-io/cypress/issues/8267
  // it('The page can be navigated using the keyboard', () => {
  //   cy.get('body').tab().tab().tab().type('{enter}')
  //   cy.get('body').tab().tab().type('{enter}')
  //   cy.url().should('include', '/calendar')
  //     .get('.card').should('have.length', 1)
  // });

});

describe('Calendar with hours user flows', () => {

  beforeEach(() => {
    cy.loadSuitableHoursWithHours();
  });

  it('A user should be able to add an hour to their calendar', () => {
    cy.get('button').first().click()
      .get('section[class="possBlurb"]').children('a').click()
    cy.get('.card').should('have.length', 1)
  });

  it('A user should be able to add multiple hours to their calendar', () => {
    cy.get('button').first().click()
      .get('button').eq(3).click()
      .get('section[class="possBlurb"]').children('a').click()
    cy.get('.card').should('have.length', 2)
  });

  it('A user should be able to delete an hour from their calendar', () => {
    cy.get('button').first().click()
      .get('button').eq(3).click()
      .get('section[class="possBlurb"]').children('a').click()
    cy.get('button').first().click()
    cy.get('.card').should('have.length', 1)
  });

  it('Each hour card contains a date, hour, temp, wind speed, & poss of precip', () => {
    cy.get('button').last().click()
      .get('section[class="possBlurb"]').children('a').click()
    cy.contains('December 30')
    cy.contains('10 PM')
    cy.contains('49')
    cy.contains('9')
    cy.contains('60%')
  });

});
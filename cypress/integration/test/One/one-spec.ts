import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";

const url = `http://web-staging.aonewallet.com`;

//User is in safer gaming
Given(`user is in main page`, () => {
  cy.visit(url, { timeout: 60000 });
});

When(`user clicks accept`, () => {
  cy.get("#rcc-confirm-button");
});

And(`user clicks on the safer gaming`, () => {
  cy.get(".css-v4ptfq > :nth-child(2) > .chakra-text").click();
  // cy.wait(10000);
});

Then(`user is in safer gaming page`, () => {
  cy.contains("Safer Gaming");
});

Cypress.on("uncaught:exception", () => {
  return false;
});

//User is in safer gaming move to sportsbook
Given(`user is in safer gaming`, () => {
  cy.contains("Safer Gaming");
});

And(`user clicks sportsbook`, () => {
  cy.wait(50000);
  cy.get(".css-v4ptfq > :nth-child(2) > .chakra-text").click();
});

Then(`user is in sportsbook page`, () => {
  cy.wait(50000);
  cy.contains("Live Now");
});

Cypress.on("uncaught:exception", () => {
  return false;
});

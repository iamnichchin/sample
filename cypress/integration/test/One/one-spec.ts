import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";

const url = `http://web-staging.aonewallet.com`;

//User is in safer gaming
Given(`user is in main page`, () => {
  cy.visit(url, { timeout: 40000 });
});

When(`user clicks accept`, () => {
  cy.get("#rcc-confirm-button");
});

And(`user clicks on the safer gaming`, () => {
  cy.get(".css-v4ptfq > :nth-child(2) > .chakra-text").click();
});

Then(`user is in safer gaming page`, () => {
  cy.contains("Safer Gaming");
});

Cypress.on("uncaught:exception", () => {
  return false;
});

//User going to sportsbook
Given(`user is in safer gaming`, () => {
  cy.contains("Safer Gaming");
});

When(`user clicks sportsbook`, () => {
  cy.wait(40000);
  cy.get(".css-v4ptfq > :nth-child(2) > .chakra-text").click();
});

Then(`user is in sportsbook page`, () => {
  cy.wait(40000);
  cy.contains("Today's Events");
});

Cypress.on("uncaught:exception", () => {
  return false;
});

//User going to casino page
Given(`user is in safer gaming`, () => {
  cy.contains("Today's Events");
});

When(`user clicks casino`, () => {
  cy.wait(40000);
  cy.get(".css-v4ptfq > :nth-child(3) > .chakra-text").click();
});

Then(`user is in casino page`, () => {
  cy.wait(40000);
  cy.contains("SLOT");
});

Cypress.on("uncaught:exception", () => {
  return false;
});

//User going to pragmatic play
Given(`user is in casino page`, () => {
  cy.contains("SLOT");
});

When(`user clicks pragmatic play`, () => {
  cy.get(".css-v4ptfq > :nth-child(4) > .chakra-text").click();
});

Then(`user is in pragmatic play`, () => {
  cy.wait(40000);
  cy.contains("SLOT");
});

Cypress.on("uncaught:exception", () => {
  return false;
});

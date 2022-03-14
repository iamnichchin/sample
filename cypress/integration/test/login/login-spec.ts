import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";

const url = `http://web-staging.aonewallet.com`;

//user will login with correct credentials
Given(`user is in main page`, () => {
  cy.visit(url, { timeout: 40000 });
});

When(`user clicks login`, () => {
  cy.get(".css-1tu4cye").click();
});

And(`user types on the right username field`, () => {
  cy.get("#field-16").type("testjay");
});

And(`user types on the right password field`, () => {
  cy.get("#field-17").type("password{enter}");
});

Then(`user is back to the home page but with the account logged in`, () => {
  cy.contains("testjay");
});

Cypress.on("uncaught:exception", () => {
  return false;
});

//user will login with wrong username
Given(`user is in main page`, () => {
  cy.visit(url, { timeout: 40000 });
});

When(`user clicks login`, () => {
  cy.get(".css-1tu4cye").click();
});

And(`user types on the wrong username field`, () => {
  cy.get("#field-16").type("hello_world");
});

And(`user types on the right password field`, () => {
  cy.get("#field-17").type("password{enter}");
});

Then(`user should see an error message`, () => {
  cy.contains("Invalid Credentials");
});

Cypress.on("uncaught:exception", () => {
  return false;
});

//user will login with wrong password
Given(`user is in main page`, () => {
  cy.visit(url, { timeout: 40000 });
});

When(`user clicks login`, () => {
  cy.get(".css-1tu4cye").click();
});

And(`user types on the right username field`, () => {
  cy.get("#field-16").type("testjay");
});

And(`user types on the wrong password field`, () => {
  cy.get("#field-17").should("be.visible").type("hello_world{enter}");
});

Then(`user should see an error message`, () => {
  cy.contains("Invalid Credentials");
});

Cypress.on("uncaught:exception", () => {
  return false;
});

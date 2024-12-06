/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress
describe("suite1",()=>{
  it("test case 1",()=>{
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    cy.get('input[class="search-keyword"]').type("carrot")
    cy.get('button[class="search-button"]').click()
    cy.get("h4[class='product-name']").should('')
  })
})

// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
  it("Should not enter if no name and no quiz type", () => {
    cy.visit("/");
    cy.get(".app-select__selected").click();
    cy.get(".app-select__item:nth-child(1)").click();
    cy.get(".home__form").submit();
    cy.contains("Enter the user name");
  });
  it("Should not enter if no quiz type", () => {
    cy.visit("/");
    cy.get("#username").click();
    cy.get("#username").type("Manuel");
    cy.get(".home__form").submit();
    cy.contains("Enter the user name");
  });
  it("Enter the name, select quiz type and start quiz game", () => {
    cy.visit("/");
    cy.get("#username").click();
    cy.get("#username").type("Manuel");
    cy.get(".app-select__selected").click();
    cy.get(".app-select__item:nth-child(1)").click();
    cy.get(".home__form").submit();
    cy.contains("Quiz: Video Games");
    cy.get(".question__option:nth-child(1)").click();
    cy.get(".question__validate > .button").click();
    cy.get(".fa-arrow-right").click();
  });
  it("Should show error page when page does not exist and return home when user click", () => {
    cy.visit("#/whatever");
    cy.contains("404");
    cy.contains("Page not found");
    cy.get(".button").click();
    cy.contains("Enter the user name");
  });
});

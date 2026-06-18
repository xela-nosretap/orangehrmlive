import { LoginPage } from "../pageObjects/loginPage";
import { PimPage } from "../pageObjects/pimPage";

describe("Scenario 2", () => {
  it("Add and verify new employee", () => {
    const firstName = "John";
    const lastName = "Doe";
    const employeeId = Math.floor(10000 + Math.random() * 90000);

    const loginPage = new LoginPage();
    const pimPage = new PimPage();

    loginPage.login("Admin", "admin123");

    cy.contains("PIM").click();
    cy.url().should("include", "/pim");

    pimPage.clickAddEmployeeButton();

    cy.contains("Employee Full Name").should("be.visible");

    pimPage.enterFirstName(firstName);
    pimPage.enterLastName(lastName);

    pimPage.enterEmployeeId(employeeId);

    pimPage.clickSaveButton();

    cy.contains("PIM").click();
    cy.url().should("include", "/pim");

    pimPage.searchEmployeeByName(firstName, lastName);
    pimPage.clickSearchButton();
    pimPage.validateEmployeeInList(employeeId, firstName, lastName);
  });
});

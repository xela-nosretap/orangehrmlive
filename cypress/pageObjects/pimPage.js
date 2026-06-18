export class PimPage {
  enterFirstName(firstName) {
    cy.get("input[name='firstName']").type(firstName);
  }

  enterLastName(lastName) {
    cy.get("input[name='lastName']").type(lastName);
  }

  clickEmployeeListLink() {
    cy.contains("a", "Employee List").click();
    cy.url().should("include", "/pim/viewEmployeeList");
  }

  clickSaveButton() {
    cy.get("button[type='submit']").click();
    cy.contains("Successfully Saved").should("be.visible");
  }

  enterEmployeeId(employeeId) {
    cy.contains("label", "Employee Id")
      .parent()
      .parent()
      .find("input")
      .clear()
      .type(employeeId);
  }

  clickSearchButton() {
    cy.contains("button", "Search").click();
  }

  clickAddEmployeeButton() {
    cy.contains("a", "Add Employee").click();
  }

  searchEmployeeByName(firstName, lastName) {
    cy.contains("Employee Name")
      .parent()
      .parent()
      .within(() => {
        cy.get("input[placeholder='Type for hints...']").type(
          `${firstName} ${lastName}`,
        );
      });
  }

  validateEmployeeInList(employeeId, firstName, lastName) {
    cy.contains("div.oxd-table-cell", employeeId)
      .parent()
      .parent()
      .as("employeeRow");

    cy.get("@employeeRow").within(() => {
      cy.get('div[role="cell"]')
        .eq(1)
        .invoke("text")
        .should("contain", employeeId);

      cy.get('div[role="cell"]')
        .eq(2)
        .invoke("text")
        .should("contain", firstName);

      cy.get('div[role="cell"]')
        .eq(3)
        .invoke("text")
        .should("contain", lastName);
    });
  }
}

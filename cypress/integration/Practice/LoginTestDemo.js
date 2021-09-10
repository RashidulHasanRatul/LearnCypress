/// <reference types="cypress"/>
 

it("Orange Hrm Login Test",()=>{

    cy.visit("https://opensource-demo.orangehrmlive.com/index.php/auth/login");

    // Type Username
    cy.get('#txtUsername').type("Admin ");

    // Type Password
    cy.get('#txtPassword').type("admin123");

    // Click on Login BTN 
    cy.get('#btnLogin').click();

    // Click on Admin 

    cy.get('#menu_admin_viewAdminModule > b').find('#menu_admin_UserManagement').click();
    // cy.contains('User Management').invoke('show');
    // cy.contains('Users').click();

    // Assertion 


    // cy.get('#menu_admin_UserManagement').trigger("mouseover")

    // cy.get('#menu_admin_viewSystemUsers').should("be.visible")
    // .wait(1000)


})


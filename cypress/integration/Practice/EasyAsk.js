///<reference types="cypress"/>

it("Easy Ask",()=>{
    cy.visit("http://18.209.122.163/admin/login");

    cy.get('#email').type("superadmin@gmail.com");

    cy.get('#password').type("superadmin");

    cy.get('.btn').click();

    cy.get('.nav > :nth-child(3) > .nav-dropdown-toggle').click();
    cy.get('.nav-dropdown.open > .nav-dropdown-items > :nth-child(3) > .nav-link').click();

    cy.get('.d-print-none > .btn').click();

    cy.get('.vue-treeselect__value-container > .vue-treeselect__input-container > .vue-treeselect__input').select("laptop");
    // cy.get('.vue-treeselect__input').select('1');


})




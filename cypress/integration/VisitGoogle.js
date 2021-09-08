/// <reference types="cypress"/>

it("This is Google Homepage",()=>{
    cy.visit("https://www.google.com/");

    // Goto Page and Type Something
    cy.get('.gLFyf').type("Hey this is test");

    // Click on Google Search Button 
    cy.get('.FPdoLc > center > .gNO89b').click();

    // Get Element by 

})
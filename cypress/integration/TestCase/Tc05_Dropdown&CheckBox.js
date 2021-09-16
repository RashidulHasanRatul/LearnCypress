/// <reference types="cypress"/>

it("Checkbox",()=>{
    cy.visit("http://demo.automationtesting.in/Register.html");


    cy.get('#checkbox1').check().should("be.checked").and("have.value","Cricket");
    cy.get('#checkbox2').check().should("be.checked").and("have.value","Movies");
    cy.get('#checkbox3').check().should("be.checked").and("have.value","Hockey");

    cy.get('#checkbox1').uncheck().should("not.be.checked");
    cy.get('#checkbox2').uncheck().should("not.be.checked");
    cy.get('#checkbox3').uncheck().should("not.be.checked");

    // Check Multiple check box 
    cy.get('input[type=checkbox]').check(['Cricket','Hockey'])


  
})


it("Select Type DropDown ",()=>{
    
    // Select value from dropdown and Assert Value
    cy.get("#Skills").select('Android').should('have.value',"Android");

  
  
})


it("Select Multiple dropdown  ",()=>{
  
    
  // Select Multiple value from dropdown and Assert value 
cy.get("#msdd").click();
cy.get('.ui-corner-all').contains("Dutch").click();
cy.get('.ui-corner-all').contains("English").click();
 
})



/// <reference types="cypress"/>

describe('Haygor Instrument',function(){

    it("Verify title of the test -Positive Test",function(){
        cy.visit("https://staging.haygor.com/");
        cy.title().should('eq','Home');

    })

    
    it("Verify title of the test -Negative  Test",function(){
        cy.visit("https://staging.haygor.com/");
        cy.title().should('eq','Home problem');
        
    })





})   
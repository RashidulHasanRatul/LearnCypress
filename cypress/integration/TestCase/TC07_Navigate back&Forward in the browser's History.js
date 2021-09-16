

/// <reference types ="cypress"/>

describe("Back & forward from browser history",()=>{

    it("navigation's Tests",function ()                                                                                                                                                           {

        cy.visit("https://demo.nopcommerce.com/");

        cy.title().should('eq',"nopCommerce demo store") // Home 

        cy.get('.ico-register').click()// CLick on Register

        // cy.title().should("eq","nopCommerce demo store");

        cy.go("back"); 

        cy.go("forward");
         
    })


})
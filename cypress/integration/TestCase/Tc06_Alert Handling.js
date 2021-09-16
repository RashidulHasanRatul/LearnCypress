

/// <reference types = "cypress"/>

describe("This is Alert ",function () {

    it("Alert",()=>{
        cy.visit("http://demo.guru99.com/test/delete_customer.php");
        cy.get('[type="submit"]').click();

        cy.on('window:alert',(str)=>{
            expect(str).to.equal('Do you really want to delete this Customer?');
        })
        

    })
    
})
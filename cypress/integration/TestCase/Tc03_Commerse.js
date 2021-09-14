/// <reference types="cypress"/>

import { commercePage } from "../../Pages/commersePage";

const cpage = new commercePage();

describe("Ecommerce Test",function(){

    it("Ecomerce Test",function( ){

        cpage.Navigate("https://demo.nopcommerce.com/");
        cpage.EnterTextinSearchBox();
        cpage.clickOnSearchButton();
        cy.get(':nth-child(2) > .product-item > .details > .product-title > a').click();
        cpage.clearValue();
        cpage.clickOnAddtoCartbtn();
        cpage.shopingCartClick();
        // cpage.continuebtnClick();

        // Price Validation 
        cy.get(".product-unit-price").contains('$1,590.00');


    }

    )
    
}


)
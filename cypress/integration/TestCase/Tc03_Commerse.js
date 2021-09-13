/// <reference types="cypress"/>

import { commercePage } from "../../Pages/commersePage";

const cpage = new commercePage();

describe("Ecommerce Test",function(){

    it("Ecomerce Test",function( ){

        cpage.Navigate("https://demo.nopcommerce.com/");
        cpage.EnterTextinSearchBox();
        cpage.clickOnSearchButton();
        cpage.clickOnProduct();
        cpage.clearValue();
        cpage.clickOnAddtoCart();

    

    }

    )
    
}


)
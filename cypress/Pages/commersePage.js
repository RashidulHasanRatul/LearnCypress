

export class commercePage {

    searchBox = "#small-searchterms";
    searchbtn="#small-search-box-form > .button-1";
    addToCart=':nth-child(2) > .product-item > .details > .add-info > .buttons > .product-box-add-to-cart-button';
    // clickOnProduct="//a[normalize-space()='Lenovo Thinkpad X1 Carbon Laptop']";
    Quantity ="#product_enteredQuantity_9";
    shr ="#topcartlink";
    continueShoppingBtn = '.continue-shopping-button'

 


   

    Navigate(url){

        cy.visit(url);
    }


    EnterTextinSearchBox(){
        cy.get(this.searchBox).type("Laptop");
    }

    clickOnSearchButton(){
        cy.get(this.searchbtn).click();
    }

    // clickProduct(){
    //     cy.get(this.clickOnProduct).click();
    // }



    clearValue(){
        cy.get(this.Quantity).clear().type("5");
    }

    clickOnAddtoCartbtn(){

        cy.get(this.addToCart).click();

    }

    shopingCartClick(){
        cy.get(this.shr).click();
    }


    continuebtnClick(){

        cy.get(this.continueShoppingBtn).click();
    }



   



}
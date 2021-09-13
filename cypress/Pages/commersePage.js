

export class commercePage {

    searchBox = "#small-searchterms";
    searchbtn="#small-search-box-form > .button-1";
    addToCart=':nth-child(2) > .product-item > .details > .add-info > .buttons > .product-box-add-to-cart-button';
    clickOnProduct='.product-item';
    Quantity ="#product_enteredQuantity_4";
  


    Navigate(url){

        cy.visit(url);
    }


    EnterTextinSearchBox(){
        cy.get(this.searchBox).type("Laptop");
    }

    clickOnSearchButton(){
        cy.get(this.searchbtn).click();
    }

    clickProduct(){
        cy.get(this.clickOnProduct).click();
    }



    clearValue(){
        cy.get(this.Quantity).clear().type("5");
    }

    clickOnAddtoCart(){

        cy.get(this.addToCart).click();

    }

   



}
export class LoginPage{

   loginPage_Username = '#uname'
   loginPage_passWord = '#pwd'
   loginPage_LoginButton = '[type="submit"]'
   
    navigate(URL){

        cy.visit(URL);

    }

    enterUsername(){


        cy.get(this.loginPage_Username).type("test");

     
    }

    enterPassword(){
        cy.get(this.loginPage_passWord).type("test");

       
    }

    clickLogin(){

        cy.get(this.loginPage_LoginButton).click();

    }





}
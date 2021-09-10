/// <reference types="cypress"/>

import { LoginPage } from "../../Pages/loginPage.js";

const lgn= new LoginPage();



it("Test",()=>{
    lgn.navigate("https://trytestingthis.netlify.app/")
    lgn.enterUsername()
    lgn.enterPassword()
    lgn.clickLogin()
    
})
 
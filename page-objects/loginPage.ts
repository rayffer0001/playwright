import { Locator, Page, expect } from '@playwright/test';


export class LoginPage {

    private readonly page: Page
    readonly usernameField: Locator 
    readonly nextButton: Locator 
    readonly passwordField: Locator
    readonly signinButton: Locator
    
    constructor(page: Page) {
        this.page = page
        this.usernameField = this.page.locator('#idp-discovery-username')
        this.nextButton = this.page.locator('#idp-discovery-submit')
        this.passwordField = this.page.locator('#okta-signin-password')
        this.signinButton = this.page.locator('#okta-signin-submit')
        
    }

    /**
     * This method is to login the user
     * @param email - Should be a valid Samba email address
     * @param password - Should be a valid Samba password
     */
    async login(email: string, password: string){
        
        await this.usernameField.fill(email)
        await this.nextButton.click()
        await this.passwordField.fill(password)
        await this.signinButton.click()
    
    }

    async loginWithCredentials(){
        
        await this.usernameField.fill("ssjunipero+rayfferautoadmin3@gmail.com")
        await this.nextButton.click()
        await this.passwordField.fill("G0F0rBr0ke!")
        await this.signinButton.click()
    
    }

    

}

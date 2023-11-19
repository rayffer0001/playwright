import { Page } from '@playwright/test';

export class LoginPage {

    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    /**
     * This method is to login the user
     * @param email - Should be a valid Samba email address
     * @param password - Should be a valid Samba password
     */
    async Login(email: string, password: string){
        const usernameField = this.page.locator('#idp-discovery-username')
        const nextButton = this.page.locator('#idp-discovery-submit')
        const passwordField = this.page.locator('#okta-signin-password')
        const signinButton = this.page.locator('#okta-signin-submit')
    
        await usernameField.fill(email)
        await nextButton.click()
        await passwordField.fill(password)
        await signinButton.click()
    
    }

}

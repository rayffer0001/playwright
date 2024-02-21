import { Locator, Page, expect } from '@playwright/test';

export class loginforMike {
    private readonly page: Page
    readonly usernameField: Locator
    readonly passwordField: Locator
    readonly nextButton: Locator
    
    readonly siningButton: Locator


    constructor(page: Page){
        this.page = page
        this.usernameField = this.page.getByLabel('Username')
        this.passwordField = this.page.getByLabel('Password')
        this.nextButton = this.page.getByRole('button', { name: 'Next' })
        this.siningButton = this.page.getByRole('button', { name: 'Sign In' })
    }

    async login(username: string, password: string){

        await this.usernameField.fill('ssjunipero+rayfferclarity@gmail.com')
        await this.nextButton.click()
        await this.passwordField.fill('G0F0rBr0ke!')
        await this.siningButton.click()



    }

}

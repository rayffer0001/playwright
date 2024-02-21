import { Page } from '@playwright/test';

export class NavigationMyPeoplePage{

    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async addNewPersonModal () {
        
        const addNewPesonButton = this.page.locator('.v-btn__content > div > :nth-child(2)')
        await addNewPesonButton.click()

    }

    


}
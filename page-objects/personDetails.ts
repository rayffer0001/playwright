import { Page } from '@playwright/test';

export class PersonDetails{

    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async addNewPeson(fisrtName: string, lastName: string, group: string) {
        
        const fisrtNameField = this.page.getByRole('textbox', {name: "First Name*"})

    }

    


}
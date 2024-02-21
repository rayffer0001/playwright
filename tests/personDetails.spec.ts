import {test, expect} from '@playwright/test'
import { LoginPage } from '../page-objects/loginPage'
import { PersonDetails } from '../page-objects/personDetails'
import { NavigationMyPeoplePage } from '../page-objects/navigationMyPeoplePage'



test.describe('Person Details Test Suite' , function () {
    
    const randomInt = (min, max) =>
        Math.floor(Math.random() * (max - min + 1)) + min.toString()

    //const randomPhone = () => {
        //Math.random().toString().substr(2, 6)}

    test.beforeEach(async ({page}) => {
        const loginPage = new LoginPage(page)

        test.slow()
        await page.goto('https://test.sambasafety.io/')
        await loginPage.loginWithCredentials()
        
        
    })

    test ('Add new person without license', async ({ page }) => {
        const navigateTo = new NavigationMyPeoplePage(page)
        const firstNameField = page.locator('#person-first-name')
        const lastNameField = page.locator('#person-last-name')
        const groupfield = page.locator(':nth-child(4) > .v-input__icon > .v-icon')
        const groupSelection = page.locator('.v-list-item__title').nth(0)
        const saveAndClose = page.locator('[data-cy="add_person_save_button"] > .v-btn__content')

        await navigateTo.addNewPersonModal()
        await firstNameField.fill("playwright")
        await lastNameField.fill("one")
        await groupfield.click()
        await groupSelection.click()
        await saveAndClose.click()

        //const successSnackBar = page.locator('.success-snack-bar > .v-snack__wrapper > .v-snack__content > div')
        //await expect(successSnackBar).toBeVisible()
        
    })


    test ('Add new person With a license', async ({ page }) => {
        const navigateTo = new NavigationMyPeoplePage(page)
        const firstNameField = page.locator('#person-first-name')
        const lastNameField = page.locator('#person-last-name')
        const groupfield = page.locator(':nth-child(4) > .v-input__icon > .v-icon')
        const groupSelection = page.locator('.v-list-item__title').nth(0)
        const saveAndAddLicense = page.locator('[data-cy="add_person_save_and_continue_button"] > .v-btn__content')
        const licenseStateField = page.locator('#person-driver-license-state')
        const selectLicenseState = page.locator('.v-list-item__title').nth(1)
        const licenseNumberField = page.locator('#person-driver-license-number')

        await navigateTo.addNewPersonModal()
        await firstNameField.fill("playwright")
        await lastNameField.fill("one")
        await groupfield.click()
        await groupSelection.click()
        await saveAndAddLicense.click()
        await licenseStateField.click()
        await selectLicenseState.click()
        await licenseNumberField.fill(randomInt(0, 9))

        //const successSnackBar = page.locator('.success-snack-bar > .v-snack__wrapper > .v-snack__content > div')
        //await expect(successSnackBar).toBeVisible()
        
    })

    





})
import {test, Expect, expect} from '@playwright/test'

test.describe('Login' , function () {

    var email = 'ssjunipero+rayfferautoadmin1@gmail.com'
    var password = 'G0F0rBr0ke!'

    test.beforeEach(async ({page}) => {
        await page.goto('https://test.sambasafety.io/')

    })
    
    test ('should login sucessfully', async ({page}) => {

        const usernameField = page.locator('#idp-discovery-username')
        const nextButton = page.locator('#idp-discovery-submit')
        const passwordField = page.locator('#okta-signin-password')
        const signinButton = page.locator('#okta-signin-submit')
        
        await usernameField.fill(email)
        await nextButton.click()
        await passwordField.fill(password)
        await signinButton.click()

        const myPeopleTitle = await page.locator('#people-table-title__text').textContent()
        expect(myPeopleTitle).toEqual(' My People ')
    })

    test ('should fail, wrong username', async ({page}) => {
        
        const usernameField = page.locator('#idp-discovery-username')
        const nextButton = page.locator('#idp-discovery-submit')
        const passwordField = page.locator('#okta-signin-password')
        const signinButton = page.locator('#okta-signin-submit')
        
        await usernameField.fill("wrongusername@gmail.com")
        await nextButton.click()
        await passwordField.fill(password)
        await signinButton.click()

        const unableTosignIn = await page.locator('p').textContent()
        expect(unableTosignIn).toEqual('Unable to sign in')


    })

});



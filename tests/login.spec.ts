import {test, expect} from '@playwright/test'
import { LoginPage } from '../page-objects/loginPage'

test.describe('Login' , function () {

    var email = 'ssjunipero+rayfferautoadmin2@gmail.com'
    var password = 'G0F0rBr0ke!'

    test.beforeEach(async ({page}) => {
        await page.goto('https://test.sambasafety.io/')
    })

    test ('should login successfully', async ({ page }) => {
        const login = new LoginPage(page)

        await login.login(email, password)
        const myPeopleTitle = await page.locator('#people-table-title__text').textContent()
        expect(myPeopleTitle).toEqual(' My People ')
    })

    test ('should fail, wrong username', async ({ page }) => {
        const login = new LoginPage(page)

        await login.login("wrongusername@gmail.com", password)
        const unableTosignIn = await page.locator('p').textContent()
        expect(unableTosignIn).toEqual('Unable to sign in')
    })

    test ('should fail, wrong password', async ({ page }) => {
        const login = new LoginPage(page)

        await login.login(email, "wrongpassword")
        const unableTosignIn = await page.locator('p').textContent()
        expect(unableTosignIn).toEqual('Unable to sign in')
    })


})
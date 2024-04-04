import { test } from "../BaseTestFixture";
import * as testData from "../TestData/LoginTest.json"

test("To verify error message unsuccessful login using empty credentials", async ({page, loginPage}) => {

    await page.goto('/')
    await loginPage.isUserOnLambdaTestMainPage()
    await loginPage.navigateToLoginPageViaBaseURL()
    await loginPage.isUserOnLoginPage()
    await loginPage.enterUsername(testData.EmptyCredentials.EmptyEmailID)
    await loginPage.enterPassword(testData.EmptyCredentials.EmptyPassword)
    await loginPage.clickLoginButton()
    await loginPage.retrieveErrorTextOnLoginPage()
})
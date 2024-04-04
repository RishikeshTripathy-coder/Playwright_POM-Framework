import { test } from "../BaseTestFixture";
import * as testData from "../TestData/LoginTest.json"

test("To verify error message unsuccessful login using incorrect credentials", async ({page, loginPage}) => {

    await page.goto('/')
    await loginPage.isUserOnLambdaTestMainPage()
    await loginPage.navigateToLoginPageViaBaseURL()
    await loginPage.isUserOnLoginPage()
    await loginPage.enterUsername(testData.IncorrectCredentials.IncorrectEmailID)
    await loginPage.enterPassword(testData.IncorrectCredentials.IncorrectPassword)
    await loginPage.clickLoginButton()
    await loginPage.retrieveErrorTextOnLoginPage()
})
import { test } from "../BaseTestFixture";
import * as testData from "../TestData/LoginTest.json"

test("To verify successful login using correct credentials", async ({page, loginPage, myAccountPage}) => {

    await page.goto('/')
    await loginPage.isUserOnLambdaTestMainPage()
    await loginPage.navigateToLoginPageViaBaseURL()
    await loginPage.isUserOnLoginPage()
    await loginPage.enterUsername(testData.Email)
    await loginPage.enterPassword(testData.Password)
    await loginPage.clickLoginButton()
    await myAccountPage.isUserOnMyAccount()
})
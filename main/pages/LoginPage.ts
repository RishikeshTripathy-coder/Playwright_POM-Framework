import { Page, expect } from "@playwright/test";
import CommonUtils from "./CommonFunctions/CommonUtils";

export default class LoginPage extends CommonUtils {

    constructor(public loginPage: Page) {
        super(loginPage);
    }

    async isUserOnLambdaTestMainPage(): Promise<void> {
        await expect(this.loginPage.getByTitle("Poco Electro")).toBeVisible({visible: true})
    }

    async navigateToLoginPageViaBaseURL(): Promise<void> {
        await this.navigateToMyAccountSection()
        await this.clickGivenTextOnGivenPage('Login')
    }

    async isUserOnLoginPage(): Promise<void> {
        await this.isUserOnGivenPage('Returning Customer')
    }

    async enterUsername(username: string): Promise<void> {
        await this.populateRequiredTextOnGivenPage('E-Mail Address', username)
    }

    async enterPassword(password: string): Promise<void> {
        await this.populateRequiredTextOnGivenPage('Password', password)
    }

    async clickLoginButton(): Promise<void> {
        await this.clickGivenButtonOnGivenPage('Login')
    }

    async clickRegisterButton(): Promise<void> {
        await this.clickGivenButtonOnGivenPage('Continue')
    }

    async retrieveErrorTextOnLoginPage(): Promise<void> {
        await this.retrieveErrorTextOnGivenPage("div[class='alert alert-danger alert-dismissible']")
    }

    private async navigateToMyAccountSection(): Promise<void> {
        await this.loginPage.hover("css = i[class='icon fas fa-user']")
    }
}
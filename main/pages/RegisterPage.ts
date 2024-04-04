import { Page, expect } from "@playwright/test"
import CommonUtils from "./CommonFunctions/CommonUtils"

export default class RegisterPage extends CommonUtils{

    constructor(public registerPage: Page) {
        super(registerPage)
    }

    async isUserOnRegisterPage(): Promise<void> {
        this.isUserOnGivenPage('Register Account')
    }

    async enterFirstName(placeholderText: string, firstName: string): Promise<void> {
        this.populateRequiredTextOnGivenPage('First Name', firstName)
    }

    async enterLastName(placeholderText: string, lastName: string): Promise<void> {
        this.populateRequiredTextOnGivenPage('Last Name', lastName)
    }

    async enterEmailID(placeholderText: string, emailID: string): Promise<void> {
        this.populateRequiredTextOnGivenPage('E-Mail', emailID)
    }

    async enterTelephoneNum(placeholderText: string, telNum: string): Promise<void> {
        this.populateRequiredTextOnGivenPage('Telephone', telNum)
    }

    async setPassword(placeholderText: string, password: string): Promise<void> {
        this.populateRequiredTextOnGivenPage('Password', password)
    }

    async setConfirmPassword(placeholderText: string, password: string): Promise<void> {
        this.populateRequiredTextOnGivenPage('Password Confirm', password)
    }

    async setNewsletterSubscription(subscription: boolean): Promise<void> {
        if(subscription) {
            expect(this.registerPage.locator("input[id='input-newsletter-yes']").
                isChecked()).toBeFalsy();
            await this.registerPage.locator("input[id='input-newsletter-yes']").
                check()
        }
        else {
            expect(this.registerPage.locator("input[id='input-newsletter-no']").
                isChecked()).toBeFalsy();
            await this.registerPage.locator("input[id='input-newsletter-no']").
                check()
        }
    }

    async setAgreeToPrivacyPolicy(subscription: boolean): Promise<void> {
        if(subscription) {
            expect(this.registerPage.getByRole('checkbox', { name: 'I have read and agree to the' })).
                toBeEditable({editable: true})
            await this.registerPage.getByRole('checkbox', { name: 'I have read and agree to the' }).
                check()
        }
    }

    async clickContinueOnRegisterPage(): Promise<void> {
        this.clickGivenButtonOnGivenPage('Continue')
    }
}
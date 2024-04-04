import { Page, expect } from "@playwright/test";
import RegisterPage from "../RegisterPage";

export default class EditAccountPage extends RegisterPage {

    constructor(public editAccountPage: Page) {
        super(editAccountPage);
    }

    async isUserOnEditAccount(): Promise<void> {
        this.isUserOnGivenPage('My Account Information')
    }

    async clickBackOnEditAccountPage(): Promise<void> {
        this.clickGivenButtonOnGivenPage('Back')
    }
}
import { Page } from "@playwright/test";
import EditAccountPage from "./EditAccountPage";

export default class ChangePasswordPage extends EditAccountPage {

    constructor(public changePasswordPage: Page) {
        super(changePasswordPage);
    }

    async isUserOnChangePasswordPage(): Promise<void> {
        this.isUserOnGivenPage('Change Password')
    }
}
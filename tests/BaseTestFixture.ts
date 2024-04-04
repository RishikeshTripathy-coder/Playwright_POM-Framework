import {test as baseTest} from "@playwright/test"
import CommonUtils from "../main/pages/CommonFunctions/CommonUtils"
import LoginPage from "../main/pages/LoginPage"
import RegisterPage from "../main/pages/RegisterPage"
import MyAccountPage from "../main/pages/MyAccountSections/MyAccountPage"
import AddressBookPage from "../main/pages/MyAccountSections/AddressBookPage"
import EditAccountPage from "../main/pages/MyAccountSections/EditAccountPage"
import ChangePasswordPage from "../main/pages/MyAccountSections/ChangePasswordPage"


type pages = {
    commonUtils: CommonUtils,
    loginPage: LoginPage,
    registerPage: RegisterPage,
    myAccountPage: MyAccountPage,
    addressBookPage: AddressBookPage,
    editAccountPage: EditAccountPage,
    changePasswordPage: ChangePasswordPage
}

const testPages = baseTest.extend<pages>({

    commonUtils: async ({page}, use) => {
        await use(new CommonUtils(page));
    },
    loginPage: async ({page}, use) => {
        await use(new LoginPage(page));
    },
    registerPage: async ({page}, use) => {
        await use(new RegisterPage(page));
    },
    myAccountPage: async ({page}, use) => {
        await use(new MyAccountPage(page));
    },
    addressBookPage: async ({page}, use) => {
        await use(new AddressBookPage(page));
    },
    editAccountPage: async ({page}, use) => {
        await use(new EditAccountPage(page));
    },
    changePasswordPage: async ({page}, use) => {
        await use(new ChangePasswordPage(page));
    }
})

export const test = testPages;
export const expect = testPages.expect;

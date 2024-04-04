import { Page } from "@playwright/test";
import EditAccountPage from "./EditAccountPage";


export default class AddressBookPage extends EditAccountPage {

    constructor(public addressBookPage: Page) {
        super(addressBookPage);
    }

    async isUserOnAddressBookPage(): Promise<void> {
        this.isUserOnGivenPage('Address Book Entries')
    }

    async clickNewAddressToCreate(): Promise<void> {
        this.clickGivenButtonOnGivenPage('New Address')
    }
}
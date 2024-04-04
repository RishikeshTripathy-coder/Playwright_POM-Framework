import { Page, expect } from "@playwright/test";

export default class MyAccountPage {

    constructor(public myAccountPage: Page) {}

    async isUserOnMyAccount(): Promise<void> {
        await expect(this.myAccountPage.getByRole("heading", {name: 'My Account'})).
            toBeVisible({visible: true})
        await console.log(this.myAccountPage.getByRole("heading", {name: 'My Account'}).textContent())
    }

    async clickEditAccountInfoLinkFromMyAccountSection(): Promise<void> {
        await this.clickGivenLinkFromMyAccountSection(' Edit your account information')
    }

    async clickChangePasswordFromMyAccountSection(): Promise<void> {
        await this.clickGivenLinkFromMyAccountSection(' Change your password')
    }

    async clickModifyAddressBookFromMyAccountSection(): Promise<void> {
        await this.clickGivenLinkFromMyAccountSection(' Modify your address book entries')
    }

    async clickModifyWishlistFromMyAccountSection(): Promise<void> {
        await this.clickGivenLinkFromMyAccountSection(' Modify your wish list')
        await expect(this.myAccountPage.getByRole('heading', {name: 'My Wish List'})).
            toBeVisible({visible: true})
    }

    async clickSubscribeUnsubscribeNewsFromMyAccountSection(): Promise<void> {
        await this.clickGivenLinkFromMyAccountSection('  Subscribe / unsubscribe to newsletter')
        await expect(this.myAccountPage.getByRole('heading', {name: 'Newsletter Subscription'})).
            toBeVisible({visible: true})
    }

    async clickViewOrderHistoryFromMyAccountSection(): Promise<void> {
        await this.myAccountPage.getByRole('link', {name: 'My Orders'}).
            scrollIntoViewIfNeeded()
        await this.clickGivenLinkFromMyAccountSection(' View your order history')
        await expect(this.myAccountPage.getByRole('heading', {name: 'Order History'})).
            toBeVisible({visible: true})
    }

    async clickDownloadsFromMyAccountSection(): Promise<void> {
        await this.myAccountPage.getByRole('link', {name: 'My Orders'}).
            scrollIntoViewIfNeeded()
        await this.clickGivenLinkFromMyAccountSection(' Downloads')
        await expect(this.myAccountPage.getByRole('heading', {name: 'Account Downloads'})).
            toBeVisible({visible: true})
    }

    async clickYourRewardPointsFromMyAccountSection(): Promise<void> {
        await this.myAccountPage.getByRole('link', {name: 'My Orders'}).
            scrollIntoViewIfNeeded()
        await this.clickGivenLinkFromMyAccountSection(' Your Reward Points')
        await expect(this.myAccountPage.getByRole('heading', {name: 'Your Reward Points'})).
            toBeVisible({visible: true})
    }

    async clickViewReturnRequestsFromMyAccountSection(): Promise<void> {
        await this.myAccountPage.getByRole('link', {name: 'My Orders'}).
            scrollIntoViewIfNeeded()
        await this.clickGivenLinkFromMyAccountSection(' View your return requests')
        await expect(this.myAccountPage.getByRole('heading', {name: 'Product Returns'})).
            toBeVisible({visible: true})
    }

    async clickYourTransactionsFromMyAccountSection(): Promise<void> {
        await this.myAccountPage.getByRole('link', {name: 'My Orders'}).
            scrollIntoViewIfNeeded()
        await this.clickGivenLinkFromMyAccountSection(' Your Transactions')
        await expect(this.myAccountPage.getByRole('heading', {name: 'Your Transactions'})).
            toBeVisible({visible: true})
    }

    async clickRecurringPaymentsFromMyAccountSection(): Promise<void> {
        await this.myAccountPage.getByRole('link', {name: 'My Orders'}).
            scrollIntoViewIfNeeded()
        await this.clickGivenLinkFromMyAccountSection(' Recurring payments')
        await expect(this.myAccountPage.getByRole('heading', {name: 'Recurring Payments'})).
            toBeVisible({visible: true})
    }

    async clickRegisterForAffiliateAccountFromMyAccountSection(): Promise<void> {
        await this.myAccountPage.getByRole('link', {name: 'My Affiliate Account'}).
            scrollIntoViewIfNeeded()
        await this.clickGivenLinkFromMyAccountSection(' Register for an affiliate account')
        await expect(this.myAccountPage.getByRole('heading', {name: 'Your Affiliate Information'})).
            toBeVisible({visible: true})
    }

    private async clickGivenLinkFromMyAccountSection(link: string): Promise<void> {
        await expect(this.myAccountPage.getByRole('link', {name: link})).
            toBeEnabled({enabled: true})
        await this.myAccountPage.getByRole('link', {name: link}).
            click()
    }
}
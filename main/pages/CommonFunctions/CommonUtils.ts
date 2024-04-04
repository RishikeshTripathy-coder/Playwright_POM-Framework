import { Page, expect } from "@playwright/test"

export default class CommonUtils {

    constructor(public commonUtils: Page) {}

    async isUserOnGivenPage(pageHeading: string): Promise<void> {
        await expect(this.commonUtils.getByRole("heading", {name: pageHeading})).
            toBeVisible({visible: true})
        console.log(this.commonUtils.getByRole("heading", { name: pageHeading }).
            textContent())
    }

    async populateRequiredTextOnGivenPage(placeholderText:string, textToEnter: string): Promise<void> {
        await expect(this.commonUtils.getByPlaceholder(placeholderText)).
            toBeEditable({editable: true})
        await this.commonUtils.getByPlaceholder(placeholderText).
            type(textToEnter)
    }

    async clickGivenButtonOnGivenPage(button: string): Promise<void> {
        await expect(this.commonUtils.getByRole('button', {name: button})).
            toBeEnabled({enabled: true})
        await this.commonUtils.getByRole('button', {name: button}).
            click()
    }

    async clickGivenLinkOnGivenPage(link: string): Promise<void> {
        await expect(this.commonUtils.getByRole('link', {name: link})).
            toBeEnabled({enabled: true})
        await this.commonUtils.getByRole('link', {name: link}).
            click()
    }

    async clickGivenTextOnGivenPage(textItem: string): Promise<void> {
        await expect(this.commonUtils.getByText(textItem)).
            toBeEnabled({enabled: true})
        await this.commonUtils.getByText(textItem).
            click()
    }

    async retrieveErrorTextOnGivenPage(webLocator: string): Promise<void> {
        await expect(this.commonUtils.locator(webLocator)).
            toBeVisible({visible: true})
        console.log(this.commonUtils.locator(webLocator).
            textContent())
    }
}
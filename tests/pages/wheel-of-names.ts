import { expect, Locator, Page } from '@playwright/test';

export class WheelOfNamesPage {
    readonly page: Page;
    readonly resultContainer: Locator;
    readonly instructionLayer: Locator;
    readonly closeModalButton: Locator;

    constructor(page: Page) {
        this.page = page;
        
        this.resultContainer = page.locator("div.text-h3");
        this.instructionLayer = page.locator("#instructionLayer");

        this.closeModalButton = page.locator('button', {
            hasText: 'Close'
        })

    }

    async goto() {
        await Promise.all([
            // Ensure JS has been bootstrapped
            this.page.waitForRequest('**/*logSharedWheelRead'),
            // This action triggers the request
            this.page.goto('https://wheelofnames.com/95m-aky')
        ])
    }

    async spinWheel() {
        await this.instructionLayer.isVisible()
        await this.page.press("html", "Control+Enter")
    }

    async getResult(): Promise<string> {
        const result = await this.resultContainer.innerText();

        expect(result).toBeTruthy();

        return result;
    }

}
import type {Locator, Page} from '@playwright/test';
import {expect} from '@playwright/test';

export class WheelOfNamesPage {
	readonly resultContainer: Locator;
	readonly instructionLayer: Locator;
	readonly closeModalButton: Locator;

	constructor(public readonly page: Page) {
		this.resultContainer = page.locator('div.text-h3');
		this.instructionLayer = page.locator('#instructionLayer');

		this.closeModalButton = page.locator('button', {
			hasText: 'Close',
		});
	}

	async goto() {
		await Promise.all([
			// Ensure JS has been bootstrapped
			this.page.waitForRequest('**/*logSharedWheelRead'),
			// This action triggers the request
			this.page.goto('https://wheelofnames.com/95m-aky'),
		]);
	}

	async spinWheel() {
		await this.instructionLayer.isVisible();
		await this.page.press('html', 'Control+Enter');
	}

	async getResult(): Promise<string> {
		const result = await this.resultContainer.innerText();

		expect(result).toBeTruthy();

		return result;
	}
}

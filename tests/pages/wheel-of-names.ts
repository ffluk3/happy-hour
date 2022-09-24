import type {Locator, Page} from '@playwright/test';
import {expect} from '@playwright/test';
import {happyHourLocations} from '../../tools/places';

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
		await this.page.goto('https://wheelofnames.com');
		await this.page.locator('div.basic-editor').fill(happyHourLocations.join('\n'));
	}

	async spinWheel() {
		// Await this.instructionLayer.isVisible();
		await this.page.press('html', 'Control+Enter');
	}

	async getResult(): Promise<string> {
		const result = await this.resultContainer.innerText();

		expect(result).toBeTruthy();

		return result;
	}
}

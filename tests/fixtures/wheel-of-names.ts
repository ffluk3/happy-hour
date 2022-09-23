import {test as base} from '@playwright/test';
import {WheelOfNamesPage} from '../pages/wheel-of-names';

type MyFixtures = {
	wheelOfNames: WheelOfNamesPage;
};

export const test = base.extend<MyFixtures>({
	async wheelOfNames({browser}, use) {
		const context = await browser.newContext({recordVideo: {dir: 'videos/'}});
		const page = await context.newPage();

		const wheelOfNamesPage = new WheelOfNamesPage(page);

		await wheelOfNamesPage.goto();
		await use(wheelOfNamesPage);

		await context.close();
	},
});

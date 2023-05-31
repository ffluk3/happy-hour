import {test} from './fixtures/wheel-of-names';
import {sendEmailForHappyHour} from '../tools/email';
import {readFile} from 'fs/promises';

test.describe('Happy Hour Wheel Spin', () => {
	test('spins the wheel and returns the result', async ({browserName, wheelOfNames}) => {
		await wheelOfNames.spinWheel();
		const result = await wheelOfNames.getResult();

		console.log(`Option ${browserName}: ${result}`);

		await wheelOfNames.page.screenshot({
			path: `${process.cwd()}/images/wheel-spin.jpg`,
			timeout: 60 * 1000,
			quality: 20,
		});

		// eslint-disable-next-line playwright/no-conditional-in-test -- Is this really a test at this point?
		if (process.env.CI) {
			await sendEmailForHappyHour(result);
		}

		const placesConfig = readFile;
	});
});

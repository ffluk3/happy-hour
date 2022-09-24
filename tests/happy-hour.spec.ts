import {test} from './fixtures/wheel-of-names';
import {sendEmailForHappyHour} from '../tools/email';

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

		if (process.env.CI) {
			await sendEmailForHappyHour(result);
		}
	});
});

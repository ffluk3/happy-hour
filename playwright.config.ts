import type {PlaywrightTestConfig} from '@playwright/test';
import {devices} from '@playwright/test';

const config: PlaywrightTestConfig = {
	forbidOnly: Boolean(process.env.CI),
	timeout: 2 * 60 * 1000,
	retries: process.env.CI ? 2 : 0,
	use: {
		trace: 'on-first-retry',
	},
	testDir: 'tests',
	projects: [
		{
			name: 'chromium',
			use: {...devices['Desktop Chrome']},
		},
	],
};
export default config;

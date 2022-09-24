import {sendEmailForHappyHour} from '../email';

import nodemailer from 'nodemailer';

describe('email sender', () => {
	it('can send an email', async () => {
		const mockTransport = {
			sendMail: jest.fn().mockResolvedValue({
				messageId: 'test',
			}),
		};

		jest.spyOn(nodemailer, 'createTransport').mockReturnValue(mockTransport as any);

		const consoleLogSpy = jest.spyOn(console, 'log');

		await sendEmailForHappyHour('Roxy\'s');

		expect(mockTransport.sendMail).toHaveBeenCalledTimes(1);

		expect(mockTransport.sendMail).toHaveBeenCalledWith(expect.objectContaining({
			subject: 'We are going to Roxy\'s!',
		}));

		expect(consoleLogSpy).toHaveBeenCalledWith('Message sent: %s', 'test');
	});
});

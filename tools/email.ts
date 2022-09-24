import * as nodemailer from 'nodemailer';

export async function sendEmailForHappyHour(location: string) {
	// Create reusable transporter object using the default SMTP transport
	const transporter = nodemailer.createTransport({
		host: 'smtp.sparkpostmail.com',
		port: 587,
		secure: false, // True for 465, false for other ports
		auth: {
			user: 'SMTP_Injection',
			pass: process.env.SPARKPOST_API_KEY,
		},
	});

	const info = await transporter.sendMail({
		from: '"Happy Hour Bot" <happy-hour@mail.lshadler.io>', // Sender address
		to: process.env.SLACK_CHANNEL_EMAIL, // List of receivers
		subject: `Wheel Spun! We are going to ${location}`,
		html: '<img src="cid:wheel-spin-proof" width="500px" alt="Wheel spin"/></img>',
		attachments: [
			{
				cid: 'wheel-spin-proof',
				path: `${process.cwd()}/images/wheel-spin.png`,
			},
		],
	});

	console.log('Message sent: %s', info.messageId);
}

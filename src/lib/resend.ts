import { Resend } from 'resend';

if (!process.env.RESEND_API_KEY) {
  // eslint-disable-next-line no-console
  console.warn('RESEND_API_KEY is not set — contact form emails will fail until it is configured.');
}

export const resend = new Resend(process.env.RESEND_API_KEY);

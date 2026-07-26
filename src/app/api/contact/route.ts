import { NextResponse } from 'next/server';
import { resend } from '@/lib/resend';

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'info@nozentic.com';
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || 'Nozentic Website <noreply@nozentic.com>';

function escapeHtml(str: string) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export async function POST(request: Request) {
  try {
    const { name, email, projectType, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New project inquiry — ${projectType || 'General'} — ${name}`,
      html: `
        <div style="font-family:sans-serif;font-size:15px;line-height:1.6;color:#0A0A0A">
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Project type:</strong> ${escapeHtml(projectType || 'Not specified')}</p>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, '<br />')}</p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Failed to send email.' }, { status: 502 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json({ error: 'Unexpected server error.' }, { status: 500 });
  }
}

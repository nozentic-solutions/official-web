'use client';

import { useState } from 'react';
import { projectTypes } from '@/lib/data';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState(projectTypes[0]);
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, projectType, message }),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('sent');
      setName('');
      setEmail('');
      setMessage('');
      setProjectType(projectTypes[0]);
    } catch {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-[18px] p-7 sm:p-10">
      <div className="flex flex-wrap gap-[18px]">
        <label className="min-w-[180px] flex-1 basis-[200px]">
          <div className="mb-2 font-mono text-[11px] font-bold text-ink/55 dark:text-paper/55">NAME</div>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border-b-2 border-ink bg-transparent py-2.5 text-[15px] outline-none dark:border-paper"
            placeholder="Jane Founder"
          />
        </label>
        <label className="min-w-[180px] flex-1 basis-[200px]">
          <div className="mb-2 font-mono text-[11px] font-bold text-ink/55 dark:text-paper/55">EMAIL</div>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border-b-2 border-ink bg-transparent py-2.5 text-[15px] outline-none dark:border-paper"
            placeholder="jane@company.com"
          />
        </label>
      </div>

      <div>
        <div className="mb-2 font-mono text-[11px] font-bold text-ink/55 dark:text-paper/55">PROJECT TYPE</div>
        <div className="flex flex-wrap gap-2.5">
          {projectTypes.map((pt) => (
            <button
              type="button"
              key={pt}
              onClick={() => setProjectType(pt)}
              className={`border-2 border-ink px-4 py-2.5 font-mono text-[12.5px] font-bold dark:border-paper ${projectType === pt ? 'bg-lime text-ink' : ''}`}
            >
              {pt}
            </button>
          ))}
        </div>
      </div>

      <label>
        <div className="mb-2 font-mono text-[11px] font-bold text-ink/55 dark:text-paper/55">MESSAGE</div>
        <textarea
          required
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full resize-none border-b-2 border-ink bg-transparent py-2.5 text-[15px] outline-none dark:border-paper"
          placeholder="Tell us a bit about what you're building..."
        />
      </label>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="mt-2 self-start bg-ink px-7 py-4 font-mono text-[15px] font-bold text-paper disabled:opacity-60 dark:bg-paper dark:text-ink"
      >
        {status === 'sending' ? 'SENDING…' : 'SEND MESSAGE →'}
      </button>

      {status === 'sent' && (
        <div className="font-mono text-[13px] text-ink dark:text-paper">
          Thanks — we&apos;ll reply within one business day.
        </div>
      )}
      {status === 'error' && (
        <div className="font-mono text-[13px] text-red-600">
          Something went wrong. Email us directly at info@nozentic.com.
        </div>
      )}
    </form>
  );
}

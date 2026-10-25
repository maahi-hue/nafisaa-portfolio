import { useState, type FormEvent } from 'react'
import Stamp from './Stamp'

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    setStatus('sending')

    try {
      const res = await fetch(import.meta.env.VITE_FORMSPREE_URL, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      })

      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="font-mono bg-concrete p-6 border-2 border-dashed border-ink/30 -rotate-1 max-w-md"
    >
      <div className="border-b-2 border-ink pb-4 mb-4">
        <div className="text-xs text-ink/60 mb-1">TO:</div>
        <div className="text-sm font-bold text-ink">Nafisa Kamal</div>
      </div>

      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="text-xs text-ink/60 mb-1 block">
            NAME
          </label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="name"
            required
            className="w-full border-b-2 border-ink/30 bg-transparent py-2 font-mono text-ink focus:outline-none focus:border-harbor transition-colors"
          />
        </div>

        <div>
          <label htmlFor="email" className="text-xs text-ink/60 mb-1 block">
            EMAIL
          </label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            required
            className="w-full border-b-2 border-ink/30 bg-transparent py-2 font-mono text-ink focus:outline-none focus:border-harbor transition-colors"
          />
        </div>

        <div>
          <label htmlFor="message" className="text-xs text-ink/60 mb-1 block">
            MESSAGE
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full border-b-2 border-ink/30 bg-transparent py-2 font-mono text-ink focus:outline-none focus:border-harbor transition-colors resize-none"
          />
        </div>

        {/* Honeypot field */}
        <input
          type="text"
          name="_gotcha"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
        />

        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full px-4 py-3 bg-teal text-white font-display font-bold rounded hover:bg-teal/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'sending' ? 'Sending…' : 'Send shipment'}
        </button>

        {/* Status messages */}
        <p role="status" aria-live="polite" className="text-sm">
          {status === 'success' && (
            <span className="text-ink flex items-center gap-2">
              <Stamp text="DELIVERED" rotation={-2} />
              Shipment sent. I'll reply to your email soon.
            </span>
          )}
          {status === 'error' && (
            <span className="text-signal">
              The message didn't send. Check your connection and try again, or email me directly at{' '}
              <a
                href="mailto:nafisakamal180@gmail.com"
                className="underline hover:text-signal/80"
              >
                nafisakamal180@gmail.com
              </a>
            </span>
          )}
        </p>

        {/* Fallback */}
        <p className="text-xs text-ink/60 text-center">
          Prefer email?{' '}
          <a
            href="mailto:nafisakamal180@gmail.com"
            className="text-ink underline hover:text-ink/80"
          >
            nafisakamal180@gmail.com
          </a>
        </p>
      </div>
    </form>
  )
}

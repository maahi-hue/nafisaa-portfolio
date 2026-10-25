import { useState, useEffect, useRef } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    // Toggle body scroll when menu is open
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
      document.addEventListener('keydown', handleEscape)
      return () => {
        document.body.style.overflow = ''
        document.removeEventListener('keydown', handleEscape)
      }
    } else {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-concrete/90 backdrop-blur-sm">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="font-display text-2xl font-bold text-ink">
          Nafisa
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#work" className="text-ink hover:text-teal transition-colors">
            Work
          </a>
          <a href="#about" className="text-ink hover:text-teal transition-colors">
            About
          </a>
          <a href="#journey" className="text-ink hover:text-teal transition-colors">
            Journey
          </a>
          <a
            href="#contact"
            className="px-4 py-2 bg-teal text-white rounded hover:bg-teal/90 transition-colors"
          >
            Contact
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          ref={menuButtonRef}
          className="md:hidden text-ink"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {menuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          id="mobile-nav"
          className="md:hidden px-6 pb-4 flex flex-col gap-4"
        >
          <a
            href="#work"
            className="text-ink hover:text-teal transition-colors py-3 min-h-11"
            onClick={() => setMenuOpen(false)}
          >
            Work
          </a>
          <a
            href="#about"
            className="text-ink hover:text-teal transition-colors py-3 min-h-11"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#journey"
            className="text-ink hover:text-teal transition-colors py-3 min-h-11"
            onClick={() => setMenuOpen(false)}
          >
            Journey
          </a>
          <a
            href="#contact"
            className="px-4 py-3 bg-teal text-white rounded hover:bg-teal/90 transition-colors text-center min-h-11"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </header>
  )
}

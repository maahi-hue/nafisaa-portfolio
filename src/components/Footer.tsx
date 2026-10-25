export default function Footer() {
  return (
    <footer className="py-12 border-t border-ink/20">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <p className="text-ink/60">© 2026 Nafisa Kamal</p>
        <p className="font-mono text-ink/60">Shipped from Chattogram.</p>
        <a
          href="#top"
          className="text-ink hover:text-teal transition-colors text-sm"
        >
          Back to top
        </a>
      </div>
    </footer>
  )
}

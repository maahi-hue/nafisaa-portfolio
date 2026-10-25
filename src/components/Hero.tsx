import Waybill from './Waybill'
import Stamp from './Stamp'

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-ink mb-6">
              Built in Chattogram. Shipped to production.
            </h1>
            <p className="text-xl text-ink/80 mb-8 max-w-lg">
              I'm Nafisa, a full-stack developer who builds React and Node apps,
              from inventory systems to POS screens.
            </p>
            <div className="flex gap-4 mb-8">
              <a
                href="#work"
                className="px-6 py-3 bg-teal text-white rounded hover:bg-teal/90 transition-colors"
              >
                View Work
              </a>
              <a
                href="#about"
                className="px-6 py-3 border-2 border-ink text-ink rounded hover:bg-ink hover:text-concrete transition-colors"
              >
                About Me
              </a>
            </div>
            <Stamp text="DELIVERED" rotation={-3} />
          </div>
          <div className="flex justify-center">
            <Waybill />
          </div>
        </div>
      </div>
    </section>
  )
}

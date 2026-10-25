import SectionHeading from './SectionHeading'
import Timeline from './Timeline'
import SkillCrates from './SkillCrates'

export default function Journey() {
  return (
    <section id="journey" className="py-24 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading>Journey</SectionHeading>
        <p className="text-ink/70 mb-12">My path from student to software engineer.</p>

        <Timeline />

        {/* Résumé strip */}
        <div className="mt-12 bg-concrete border-2 border-ink/20 rounded-lg p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-display text-xl font-bold text-ink mb-1">
              Want the full picture?
            </h3>
            <p className="font-mono text-xs text-ink/60">
              PDF · 1 page 
            </p>
          </div>
          <a
            href="/Nafisa-Kamal-Resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-teal text-white font-display font-bold rounded hover:bg-teal/90 transition-colors whitespace-nowrap"
          >
            Download résumé
          </a>
        </div>

        <div className="mt-16">
          <h3 className="font-display text-2xl font-bold text-ink mb-6">Skills</h3>
          <SkillCrates />
        </div>
      </div>
    </section>
  )
}

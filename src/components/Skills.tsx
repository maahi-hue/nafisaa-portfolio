import { skillGroups } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-display text-4xl font-bold text-ink mb-12">Skills</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skillGroups.map((group) => (
            <div
              key={group.id}
              className="bg-white p-6 rounded-lg border-2 border-ink/20"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-teal rounded flex items-center justify-center">
                  <span className="text-white text-sm">📦</span>
                </div>
                <h3 className="font-display text-xl font-bold text-ink">
                  {group.label}
                </h3>
              </div>
              <p className="text-sm text-ink/60 mb-4">{group.blurb}</p>
              <ul className="space-y-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="font-mono text-sm text-ink flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-teal rounded-full" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

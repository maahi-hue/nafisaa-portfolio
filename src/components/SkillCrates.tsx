import Tag from './Tag'
import Stamp from './Stamp'
import { skillGroups } from '../data/skills'

function Crate({
  label,
  blurb,
  skills,
  isFirst = false,
  hasHazardStripe = false,
  hasStamp = false,
}: {
  label: string
  blurb: string
  skills: string[]
  isFirst?: boolean
  hasHazardStripe?: boolean
  hasStamp?: boolean
}) {
  return (
    <article
      className={`relative border-2 py-4 border-ink rounded-lg overflow-hidden ${
        isFirst ? 'md:col-span-2' : ''
      }`}
      style={{
        backgroundImage: 'linear-gradient(45deg, var(--color-ink) / 0.06 25%, transparent 25%)',
        backgroundSize: '20px 20px',
      }}
    >
      {/* Hazard stripe for "Loading" crate */}
      {hasHazardStripe && (
        <div
          className="h-1.5"
          style={{
            background: 'repeating-linear-gradient(45deg, var(--color-mustard) 0 10px, var(--color-ink) 10px 20px)',
          }}
        />
      )}

      {/* Solid concrete panel for text */}
      <div className="relative bg-concrete p-6">
        {/* Stencil label plate */}
        <div className="absolute -top-3 left-4 bg-ink text-concrete px-4 py-1 font-display text-lg font-bold">
          {label}
        </div>

        {/* Stamp (optional) */}
        {hasStamp && (
          <div className="absolute top-4 right-4 -rotate-6">
            <Stamp text="TESTED" color="signal" rotation={0} />
          </div>
        )}

        {/* Blurb */}
        <p className="mt-4 mb-4 text-ink/80">{blurb}</p>

        {/* Skills */}
        <ul className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <li key={skill}>
              <Tag>{skill}</Tag>
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default function SkillCrates() {
  const daily = skillGroups.find((g) => g.id === 'daily')
  const comfortable = skillGroups.find((g) => g.id === 'comfortable')
  const loading = skillGroups.find((g) => g.id === 'loading')

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Crate
        label={daily?.label || 'SHIP DAILY'}
        blurb={daily?.blurb || ''}
        skills={daily?.skills || []}
        isFirst
        hasStamp
      />
      <Crate
        label={comfortable?.label || 'COMFORTABLE'}
        blurb={comfortable?.blurb || ''}
        skills={comfortable?.skills || []}
      />
      <Crate
        label={loading?.label || 'LOADING'}
        blurb={loading?.blurb || ''}
        skills={loading?.skills || []}
        hasHazardStripe
      />
    </div>
  )
}

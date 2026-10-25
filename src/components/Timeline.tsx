import { journey } from '../data/journey'
import Tag from './Tag'

const markerColors = {
  work: 'bg-teal',
  education: 'bg-harbor',
}

export default function Timeline() {
  const reversedJourney = [...journey].reverse()

  return (
    <ol className="border-l-2 border-ink/30 ml-3 pl-8 space-y-8">
      {reversedJourney.map((entry, index) => {
        const isFirst = index === 0
        const markerColor = markerColors[entry.kind]

        return (
          <li key={entry.id} className="relative">
            {/* Marker */}
            <div
              className={`absolute left-[-2.6rem] top-1.5 size-5 rounded-full ${
                isFirst
                  ? `${markerColor} ring-4 ring-concrete`
                  : markerColor
              }`}
            />

            {/* Date */}
            <p className="font-mono text-sm text-ink/60 mb-1">
              {entry.start} – {entry.end}
            </p>

            {/* Title */}
            <h3 className="font-display text-2xl font-bold text-ink mb-1">
              {entry.title}
            </h3>

            {/* Place */}
            <p className="text-ink/80 mb-2">
              {entry.place}
              {entry.kind === 'education' && (
                <span className="text-ink/60 ml-2">(Education)</span>
              )}
            </p>

            {/* Summary */}
            <p className="text-ink/70 max-w-prose mb-3">{entry.summary}</p>

            {/* Stack tags */}
            {entry.stack && (
              <ul className="flex flex-wrap gap-2">
                {entry.stack.map((tech) => (
                  <li key={tech}>
                    <Tag>{tech}</Tag>
                  </li>
                ))}
              </ul>
            )}
          </li>
        )
      })}
    </ol>
  )
}

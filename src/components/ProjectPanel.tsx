import type { Project } from '../data/projects'
import Tag from './Tag'

type Props = {
  project: Project
  id: string
}

export default function ProjectPanel({ project, id }: Props) {
  return (
    <div
      id={id}
      role="region"
      aria-labelledby={`${id}-title`}
      className="space-y-6"
    >
      {/* Title and summary */}
      <div>
        <h3 id={`${id}-title`} className="font-display text-2xl font-bold text-ink mb-2">
          {project.title}
        </h3>
        <p className="text-ink/80">{project.summary}</p>

        {/* Highlights */}
        {project.highlights && (
          <ul className="mt-3 space-y-1 text-sm text-ink/75">
            {project.highlights.map((highlight) => (
              <li key={highlight}>• {highlight}</li>
            ))}
          </ul>
        )}
      </div>

      {/* Problem, Role, Result */}
      <dl className="space-y-4">
        <div>
          <dt className="font-mono text-xs text-ink/70 mb-1">PROBLEM:</dt>
          <dd className="text-ink">{project.problem}</dd>
        </div>
        <div>
          <dt className="font-mono text-xs text-ink/70 mb-1">MY ROLE:</dt>
          <dd className="text-ink">{project.role}</dd>
        </div>
        <div>
          <dt className="font-mono text-xs text-ink/70 mb-1">RESULT:</dt>
          <dd className="text-ink">{project.result}</dd>
        </div>
      </dl>

      {/* Stack tags */}
      <ul className="flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <li key={tech}>
            <Tag>{tech}</Tag>
          </li>
        ))}
      </ul>

      {/* Platform stack */}
      {project.platformStack && (
        <div>
          <p className="font-mono text-xs text-ink/60 mb-2">PLATFORM:</p>
          <ul className="flex flex-wrap gap-2">
            {project.platformStack.map((tech) => (
              <li key={tech}>
                <Tag>{tech}</Tag>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Links */}
      <div className="flex gap-3">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-teal text-white rounded hover:bg-teal/90 transition-colors"
          >
            Live site
          </a>
        )}
        {project.codeUrl && (
          <a
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border-2 border-ink text-ink rounded hover:bg-ink hover:text-concrete transition-colors"
          >
            Code
          </a>
        )}
      </div>
    </div>
  )
}

import { useState, useEffect } from 'react'
import type { Project } from '../data/projects'

const colorMap = {
  teal: 'bg-teal',
  mustard: 'bg-mustard',
  harbor: 'bg-harbor',
  signal: 'bg-signal',
  cargo: 'bg-cargo',
}

export default function Container({ project }: { project: Project }) {
  const [isOpen, setIsOpen] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
  }, [])

  const bgColor = colorMap[project.color]

  return (
    <div className="relative">
      {/* Container body */}
      <div
        className={`relative h-64 ${bgColor} rounded-lg cursor-pointer overflow-hidden`}
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            setIsOpen(!isOpen)
          }
        }}
        tabIndex={0}
        role="button"
        aria-expanded={isOpen}
      >
        {/* Container doors - with reduced motion fallback */}
        {!prefersReducedMotion ? (
          <>
            <div
              className={`absolute inset-0 flex transition-transform duration-500 ${
                isOpen ? 'translate-x-full' : 'translate-x-0'
              }`}
              style={{ transformOrigin: 'left' }}
            >
              <div className="w-1/2 h-full bg-white border-r-2 border-ink/20" />
            </div>
            <div
              className={`absolute inset-0 flex transition-transform duration-500 ${
                isOpen ? '-translate-x-full' : 'translate-x-0'
              }`}
              style={{ transformOrigin: 'right' }}
            >
              <div className="w-1/2 h-full bg-white border-l-2 border-ink/20 ml-auto" />
            </div>
          </>
        ) : (
          <div className={`absolute inset-0 transition-opacity duration-200 ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
            <div className="w-full h-full bg-white border-x-2 border-ink/20" />
          </div>
        )}

        {/* Project name on door */}
        {!isOpen && (
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <h3 className="font-display text-3xl font-bold text-ink">
              {project.title}
            </h3>
          </div>
        )}

        {/* Case study content inside */}
        <div className="absolute inset-0 p-6 overflow-auto">
          <h3 className="font-display text-2xl font-bold text-ink mb-3">
            {project.title}
          </h3>
          <p className="text-sm text-ink/80 mb-4">{project.summary}</p>
          <div className="mb-4">
            <p className="text-xs text-ink/60 mb-1">PROBLEM:</p>
            <p className="text-sm text-ink">{project.problem}</p>
          </div>
          <div className="mb-4">
            <p className="text-xs text-ink/60 mb-1">ROLE:</p>
            <p className="text-sm text-ink">{project.role}</p>
          </div>
          <div className="mb-4">
            <p className="text-xs text-ink/60 mb-1">STACK:</p>
            <p className="font-mono text-xs text-ink">{project.stack.join(' • ')}</p>
          </div>
          <div className="mb-4">
            <p className="text-xs text-ink/60 mb-1">RESULT:</p>
            <p className="text-sm text-ink">{project.result}</p>
          </div>
          <div className="flex gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 bg-teal text-white text-sm rounded hover:bg-teal/90"
                onClick={(e) => e.stopPropagation()}
              >
                Live
              </a>
            )}
            {project.codeUrl && (
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 border border-ink text-ink text-sm rounded hover:bg-ink hover:text-concrete"
                onClick={(e) => e.stopPropagation()}
              >
                Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

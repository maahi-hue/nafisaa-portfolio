import { motion, useReducedMotion } from 'motion/react'
import type { Project } from '../data/projects'

const fills = {
  teal: 'fill-teal',
  mustard: 'fill-mustard',
  harbor: 'fill-harbor',
  signal: 'fill-signal',
  cargo: 'fill-cargo',
}

const darkerFills = {
  teal: 'fill-teal/70',
  mustard: 'fill-mustard/70',
  harbor: 'fill-harbor/70',
  signal: 'fill-signal/70',
  cargo: 'fill-cargo/70',
}

const INSIDE = 'top-[17%] bottom-[13%]'

type Props = {
  project: Project
  isOpen: boolean
  onToggle: () => void
}

const containerCodes: Record<string, string> = {
  'shayonis-emporium': 'NKML 9024 7',
  caremeds: 'NKML 8473 2',
  bistroboard: 'NKML 3156 9',
  emventory: 'NKML 4021 6',
}

function ContainerBody({ project, className }: { project: Project; className?: string }) {
  const darkerFill = darkerFills[project.color]
  const containerCode = containerCodes[project.id] || 'NKML 0000 0'

  return (
    <svg
      viewBox="0 0 400 260"
      className={className}
      aria-hidden="true"
    >
      {/* Ground shadow */}
      <ellipse
        cx="200"
        cy="245"
        rx="160"
        ry="12"
        className="fill-ink/15"
      />

      {/* Interior (dark rectangle where doors will be) */}
      <rect
        x="20"
        y="44"
        width="360"
        height="184"
        rx="4"
        className="fill-ink/90"
      />

      {/* Ribs on interior */}
      {Array.from({ length: 30 }).map((_, i) => (
        <rect
          key={i}
          x={32 + i * 12}
          y="44"
          width="2"
          height="184"
          className={darkerFill}
        />
      ))}

      {/* Header strip */}
      <rect
        x="20"
        y="40"
        width="360"
        height="28"
        rx="6"
        className="fill-ink/20"
      />
      {/* Stenciled title */}
      <text
        x="35"
        y="59"
        className="fill-ink font-display text-sm font-bold"
        style={{ fontSize: '14px' }}
      >
        {project.title.toUpperCase()}
      </text>
      {/* Container code */}
      <text
        x="380"
        y="59"
        className="fill-ink/70 font-mono text-xs"
        style={{ fontSize: '11px', textAnchor: 'end' }}
      >
        {containerCode}
      </text>

      {/* Frame - top rail */}
      <rect x="20" y="40" width="360" height="8" rx="2" className="fill-ink/30" />
      {/* Frame - bottom rail */}
      <rect x="20" y="220" width="360" height="8" rx="2" className="fill-ink/30" />
      {/* Frame - corner blocks */}
      <rect x="20" y="40" width="12" height="12" rx="2" className="fill-ink/40" />
      <rect x="368" y="40" width="12" height="12" rx="2" className="fill-ink/40" />
      <rect x="20" y="216" width="12" height="12" rx="2" className="fill-ink/40" />
      <rect x="368" y="216" width="12" height="12" rx="2" className="fill-ink/40" />
    </svg>
  )
}

function Door({ project, side }: { project: Project; side: 'left' | 'right' }) {
  const fillColor = fills[project.color]
  const darkerFill = darkerFills[project.color]

  return (
    <svg
      viewBox="0 0 200 260"
      preserveAspectRatio="none"
      className="h-full w-full"
      aria-hidden="true"
    >
      {/* Door body */}
      <rect
        x="0"
        y="0"
        width="200"
        height="260"
        className={fillColor}
      />

      {/* Ribs */}
      {Array.from({ length: 12 }).map((_, i) => (
        <rect
          key={i}
          x={i * 17}
          y="0"
          width="2"
          height="260"
          className={darkerFill}
        />
      ))}

      {/* Lock rods */}
      <rect x="10" y="0" width="3" height="260" className="fill-ink/40" />
      <rect x="187" y="0" width="3" height="260" className="fill-ink/40" />

      {/* Handle */}
      {side === 'left' ? (
        <rect x="180" y="120" width="8" height="20" rx="1" className="fill-ink/60" />
      ) : (
        <rect x="12" y="120" width="8" height="20" rx="1" className="fill-ink/60" />
      )}
    </svg>
  )
}

export default function ShippingContainer({ project, isOpen, onToggle }: Props) {
  const reduce = useReducedMotion()
  const swing = reduce
    ? { duration: 0 }
    : { type: 'spring' as const, stiffness: 70, damping: 14 }

  return (
    <motion.button
      type="button"
      onClick={onToggle}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onToggle()
        }
      }}
      aria-expanded={isOpen}
      aria-controls={`panel-${project.id}`}
      className="w-full focus-visible:outline-none"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.15 }}
    >
      <span className="sr-only">{project.title} container</span>
      <div className="relative aspect-400/260 w-full" style={{ perspective: '1600px' }}>
        {/* 1. back of the crate */}
        <ContainerBody project={project} className="absolute inset-0 h-full w-full" />

        {/* 2. the picture, inside */}
        <motion.div
          className={`absolute left-[5%] right-[5%] ${INSIDE} overflow-hidden bg-ink`}
          animate={{ opacity: isOpen ? 1 : 0 }}
          transition={{ duration: reduce ? 0 : 0.35, delay: isOpen && !reduce ? 0.15 : 0 }}
        >
          <img
            src={project.image}
            alt={project.imageAlt}
            className="h-full w-full object-cover object-top"
          />
          <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_30px_rgba(0,0,0,0.55)]" />
        </motion.div>

        {/* 3. left door */}
        <motion.div
          className={`absolute left-[5%] w-[45%] ${INSIDE}`}
          style={{ transformOrigin: 'left center' }}
          animate={{ rotateY: isOpen ? -112 : 0 }}
          transition={swing}
        >
          <Door project={project} side="left" />
        </motion.div>

        {/* 4. right door */}
        <motion.div
          className={`absolute right-[5%] w-[45%] ${INSIDE}`}
          style={{ transformOrigin: 'right center' }}
          animate={{ rotateY: isOpen ? 112 : 0 }}
          transition={{ ...swing, delay: reduce ? 0 : 0.06 }}
        >
          <Door project={project} side="right" />
        </motion.div>
      </div>
    </motion.button>
  )
}

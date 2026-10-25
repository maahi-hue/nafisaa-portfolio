import { useState, useEffect } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { projects } from '../data/projects'
import ShippingContainer from './ShippingContainer.tsx'
import ProjectPanel from './ProjectPanel.tsx'
import Tag from './Tag'
import SectionHeading from './SectionHeading'

export default function Work() {
  const [openId, setOpenId] = useState<string | null>(null)
  const reduce = useReducedMotion()

  // Escape key to close open row
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && openId) {
        setOpenId(null)
      }
    }
    if (openId) {
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [openId])

  return (
    <section id="work" className="py-24 overflow-x-clip scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading>Work</SectionHeading>
        <p className="text-ink/70 mb-12">
          {projects.length} shipment{projects.length !== 1 ? 's' : ''}. Open a container to see what's inside.
        </p>

        <div className="space-y-12">
          {projects.map((project) => {
            const isOpen = openId === project.id

            return (
              <div
                key={project.id}
                className="grid gap-10 lg:grid-cols-[minmax(0,26rem)_1fr] lg:gap-x-20"
              >
                {/* Container */}
                <div className="px-4 lg:sticky lg:top-24 lg:self-start lg:px-16 flex justify-center lg:justify-start">
                  <ShippingContainer
                    project={project}
                    isOpen={isOpen}
                    onToggle={() => setOpenId(isOpen ? null : project.id)}
                  />
                </div>

                {/* Details */}
                <div className="relative z-10 min-w-0 flex flex-col justify-center">
                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        key={project.id}
                        initial={reduce ? false : { opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={reduce ? undefined : { opacity: 0, y: 8 }}
                        transition={{ duration: 0.3, delay: reduce ? 0 : 0.2 }}
                      >
                        <ProjectPanel project={project} id={`panel-${project.id}`} />
                      </motion.div>
                    ) : (
                      <div className="space-y-4">
                        <h3 className="font-display text-2xl font-bold text-ink">
                          {project.title}
                        </h3>
                        <p className="text-ink/80">{project.summary}</p>
                        <ul className="flex flex-wrap gap-2">
                          {project.stack.map((tech) => (
                            <li key={tech}>
                              <Tag>{tech}</Tag>
                            </li>
                          ))}
                        </ul>
                        <button
                          onClick={() => setOpenId(project.id)}
                          className="text-teal hover:text-teal/80 font-medium inline-flex items-center gap-2"
                        >
                          Open container
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M9 18l6-6-6-6" />
                          </svg>
                        </button>
                      </div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export type SkillGroup = {
  id: 'daily' | 'comfortable' | 'loading'
  label: string
  blurb: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'daily',
    label: 'Ship daily',
    blurb: 'What I used every day at mPair.',
    skills: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'HTML',
      'CSS',
      'Tailwind CSS',
      'Vite',
      'GraphQL (Apollo Client)',
      'Material-UI',
    ],
  },
  {
    id: 'comfortable',
    label: 'Comfortable',
    blurb: 'I can build and ship with these.',
    skills: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'MySQL',
      'PHP',
      'Firebase',
      'Git',
      'Framer Motion',
      'Radix UI',
    ],
  },
  {
    id: 'loading',
    label: 'Loading',
    blurb: 'Learning and building right now.',
    skills: ['next-auth', 'Python (Pygame)', 'C++'],
  },
]
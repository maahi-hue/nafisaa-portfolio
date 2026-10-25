export type JourneyEntry = {
  id: string
  kind: 'work' | 'education'
  title: string
  place: string
  start: string
  end: string
  summary: string
  stack?: string[]
}

// Oldest first, to read like a ship's log.
// For newest first, use journey.toReversed() in the component.
export const journey: JourneyEntry[] = [
  {
    id: 'iiuc',
    kind: 'education',
    title: 'BSc in Computer Science and Engineering',
    place: 'International Islamic University, Chattogram',
    start: '2022',
    end: '2026',
    summary:
      'Studying computer science and engineering with a focus on software development and web technologies.',
  },
  {
    id: 'mpair-intern',
    kind: 'work',
    title: 'Front-End Developer Intern',
    place: 'mPair Technologies Ltd., Chattogram',
    start: 'May 2025',
    end: 'Aug 2025',
    summary:
      'Led the initial project setup for Emventory, an in-house SaaS inventory management system. Connected GraphQL APIs, built responsive interface components, and worked on the POS interface through several design iterations.',
    stack: ['React 18', 'Vite', 'Tailwind CSS', 'Apollo Client', 'GraphQL', 'Material-UI'],
  },
  {
    id: 'mpair-trainee',
    kind: 'work',
    title: 'Trainee Software Engineer',
    place: 'mPair Technologies Ltd., Chattogram',
    start: 'Sep 2025',
    end: 'Apr 2026',
    summary:
      'Moved into backend work on Emventory, building models and controllers in TypeScript. Contributed to the POS module, improved its usability through design changes, and helped deploy the app to production.',
    stack: ['TypeScript', 'cPanel'],
  },
]

// Optional: older education, if you want it on the site.
export const earlierEducation = [
  {
    title: 'HSC (Science)',
    place: 'Kapasgola City Corporation Mohila College, Chattogram',
    years: '2018 – 2020',
  },
  {
    title: 'SSC',
    place: "Bangladesh Mahila Samiti Girls' High School and College, Chattogram",
    years: '2012 – 2018',
  },
]
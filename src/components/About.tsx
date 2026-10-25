import PhotoPrint from './PhotoPrint'

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24 overflow-x-clip">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-[minmax(0,22rem)_1fr] md:px-8">
        <PhotoPrint />
        <div>
          <h2 className="font-display text-5xl mb-6">About</h2>
          <div className="space-y-4 text-ink/80 max-w-prose">
            <p>
              I'm Nafisa, a full-stack developer from Chattogram,
              finishing my CSE degree. I build web apps with React,
              TypeScript and Node.
            </p>
            <p>
              At mPair Technologies I worked on Emventory, an inventory
              system, from the first project setup to the POS module
              and production deployment.
            </p>
            <p>
              I'm looking for a full-time role where I can keep building
              real products with a great team. Outside code, I enjoy
              reading and exploring new places.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

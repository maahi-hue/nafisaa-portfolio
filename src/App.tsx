import Header from './components/Header'
import Hero from './components/Hero'
import Work from './components/Work'
import About from './components/About'
import Journey from './components/Journey'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Work />
        <About />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App

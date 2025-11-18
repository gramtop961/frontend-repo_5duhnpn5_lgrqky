import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Listings from './components/Listings'
import Podcast from './components/Podcast'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-black/5 selection:text-black">
      {/* Minimal sticky header */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b" style={{borderColor:'#DADADA'}}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a href="#top" className="text-lg tracking-wide font-semibold">AUDACITÉ</a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#about" className="opacity-70 hover:opacity-100 transition-opacity">À propos</a>
            <a href="#services" className="opacity-70 hover:opacity-100 transition-opacity">Services</a>
            <a href="#locations" className="opacity-70 hover:opacity-100 transition-opacity">Locations</a>
            <a href="#podcast" className="opacity-70 hover:opacity-100 transition-opacity">Podcast</a>
            <a href="#contact" className="opacity-70 hover:opacity-100 transition-opacity">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <Hero />
        <About />
        <Services />
        <Listings />
        <Podcast />
        <Contact />
      </main>

      <footer className="border-t" style={{borderColor:'#DADADA'}}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 text-sm opacity-70 flex items-center justify-between">
          <p>© {new Date().getFullYear()} AUDACITÉ</p>
          <p>Gestion immobilière haut de gamme</p>
        </div>
      </footer>
    </div>
  )
}

export default App

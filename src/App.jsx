import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Listings from './components/Listings'
import Podcast from './components/Podcast'
import WhyUs from './components/WhyUs'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Top bar / brand */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-slate-200/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-700 to-blue-500"></div>
            <span className="font-semibold tracking-wide">AUDACITÉ</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
            <a href="#services" className="hover:text-slate-900">Services</a>
            <a href="#locations" className="hover:text-slate-900">Locations</a>
            <a href="#podcast" className="hover:text-slate-900">Podcast</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </nav>
          <a href="#contact" className="hidden sm:inline-flex items-center justify-center rounded-xl bg-blue-600 text-white px-4 py-2 text-sm font-semibold shadow-sm hover:bg-blue-700 transition-colors">Nous contacter</a>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Services />
        <Listings />
        <Podcast />
        <WhyUs />
        <Contact />
      </main>

      <footer className="border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} AUDACITÉ — Gestion immobilière avec audace</p>
          <p className="text-sm text-slate-500">Bold property management</p>
        </div>
      </footer>
    </div>
  )
}

export default App

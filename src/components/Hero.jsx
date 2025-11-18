import React from 'react'

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-32 w-[36rem] h-[36rem] rounded-full bg-gradient-to-br from-blue-500/20 to-blue-600/10 blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-[28rem] h-[28rem] rounded-full bg-gradient-to-tr from-blue-700/20 to-indigo-500/10 blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="uppercase tracking-[0.2em] text-blue-700/70 text-xs mb-3">AUDACITÉ</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
              La gestion immobilière avec audace
            </h1>
            <p className="mt-5 text-slate-600 text-lg leading-relaxed">
              Gestion immobilière avec audace • Bold property management. Une approche humaine, transparente et rigoureuse au service des propriétaires et des locataires.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#locations" className="inline-flex items-center justify-center rounded-xl bg-blue-600 text-white px-6 py-3 font-semibold shadow-sm shadow-blue-600/20 hover:bg-blue-700 transition-colors">
                Voir les locations disponibles
              </a>
              <a href="#podcast" className="inline-flex items-center justify-center rounded-xl bg-white text-blue-700 px-6 py-3 font-semibold border border-blue-200 hover:border-blue-300 hover:bg-blue-50 transition-colors">
                Écouter le podcast
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 shadow-xl overflow-hidden">
              <div className="w-full h-full grid grid-cols-3 gap-2 p-2">
                <div className="rounded-2xl bg-blue-50 border border-blue-100"></div>
                <div className="rounded-2xl bg-slate-50 border border-slate-200"></div>
                <div className="rounded-2xl bg-blue-50 border border-blue-100"></div>
                <div className="rounded-2xl bg-slate-50 border border-slate-200 col-span-2"></div>
                <div className="rounded-2xl bg-blue-100/40 border border-blue-100"></div>
                <div className="rounded-2xl bg-blue-50 border border-blue-100"></div>
                <div className="rounded-2xl bg-slate-50 border border-slate-200"></div>
                <div className="rounded-2xl bg-blue-50 border border-blue-100 col-span-2"></div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white border border-slate-200 rounded-2xl p-4 shadow-lg">
              <p className="text-sm text-slate-500">AUDACITÉ — Gestion immobilière</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

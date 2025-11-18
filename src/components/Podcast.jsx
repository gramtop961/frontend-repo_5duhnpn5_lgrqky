import React from 'react'

const episodes = [
  { id: 1, title: 'Trouver le bon locataire', desc: 'Conseils pratiques pour une sélection sereine et efficace.' },
  { id: 2, title: 'Optimiser l’entretien', desc: 'Prévenir plutôt que guérir: réduire les coûts sur le long terme.' },
  { id: 3, title: 'Communication transparente', desc: 'Construire une relation de confiance avec vos locataires.' },
]

const Podcast = () => {
  return (
    <section id="podcast" className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-xl border border-blue-600/20 flex items-center justify-center">
              <div className="text-white text-3xl font-extrabold tracking-wide">AUDACITÉ
                <div className="text-xs font-normal opacity-80">PODCAST</div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Podcast Audacité</h2>
            <ul className="space-y-4">
              {episodes.map(e => (
                <li key={e.id} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-slate-900">{e.title}</h3>
                  <p className="text-slate-600 mt-1 text-sm">{e.desc}</p>
                  <button className="mt-3 rounded-xl bg-blue-600 text-white px-4 py-2 text-sm font-medium hover:bg-blue-700 transition-colors">Écouter</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Podcast

import React from 'react'

const points = [
  { title: 'Approche humaine', desc: 'Un interlocuteur dédié, à l’écoute, disponible et bienveillant.' },
  { title: 'Gestion rigoureuse', desc: 'Processus cadrés, due diligence, suivi documentaire sans faille.' },
  { title: 'Communication claire', desc: 'Informations simples, régulières et transparentes.' },
  { title: 'Expérience premium', desc: 'Service soigné, réactif, avec des outils digitaux modernes.' },
]

const WhyUs = () => {
  return (
    <section id="why" className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8">Pourquoi nous choisir</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map(p => (
            <div key={p.title} className="rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow p-6">
              <div className="w-10 h-10 rounded-lg bg-blue-600/10 text-blue-700 flex items-center justify-center font-bold mb-4">✓</div>
              <h3 className="font-semibold text-slate-900">{p.title}</h3>
              <p className="text-slate-600 mt-2 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyUs

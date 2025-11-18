import React from 'react'

const services = [
  { title: 'Gestion locative', desc: 'Mise en location, sélection des locataires, baux et états des lieux.' },
  { title: 'Entretien & maintenance', desc: 'Suivi des interventions, artisans qualifiés, prévention des risques.' },
  { title: 'Gestion des loyers', desc: 'Encaissement, relances, indexations et régularisations de charges.' },
  { title: 'Reporting & transparence', desc: 'Tableaux de bord clairs et accès aux documents à tout moment.' },
]

const Services = () => {
  return (
    <section id="services" className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Services</h2>
          <p className="text-sm text-slate-500">Premium • Fiable • Transparent</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow p-6">
              <div className="w-10 h-10 rounded-lg bg-blue-600/10 text-blue-700 flex items-center justify-center font-bold mb-4">•</div>
              <h3 className="font-semibold text-slate-900">{s.title}</h3>
              <p className="text-slate-600 mt-2 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

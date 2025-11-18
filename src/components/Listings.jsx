import React from 'react'

const sampleListings = [
  { id: 1, title: 'Appartement lumineux', city: 'Paris', price: 1450, type: 'T2 • 38 m²' },
  { id: 2, title: 'Studio rénové', city: 'Lyon', price: 780, type: 'Studio • 22 m²' },
  { id: 3, title: 'Maison familiale', city: 'Bordeaux', price: 1890, type: '4 pièces • 95 m²' },
  { id: 4, title: 'Loft industriel', city: 'Marseille', price: 1650, type: 'T3 • 60 m²' },
  { id: 5, title: 'Duplex moderne', city: 'Nantes', price: 1320, type: 'T2 • 45 m²' },
  { id: 6, title: 'Appartement haussmannien', city: 'Toulouse', price: 1580, type: 'T3 • 68 m²' },
]

const Listings = () => {
  return (
    <section id="locations" className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Locations disponibles</h2>
          <p className="text-sm text-slate-500">Exemples</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleListings.map((l) => (
            <div key={l.id} className="rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-40 bg-gradient-to-br from-blue-100 to-blue-50"></div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-slate-900">{l.title}</h3>
                  <span className="text-blue-700 font-semibold">{l.price}€</span>
                </div>
                <p className="text-sm text-slate-500 mt-1">{l.city} • {l.type}</p>
                <button className="mt-4 w-full rounded-xl bg-blue-600 text-white px-4 py-2 font-medium hover:bg-blue-700 transition-colors">Voir les détails</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Listings

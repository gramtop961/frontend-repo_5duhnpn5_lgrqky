import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const sample = [
  { id: 1, title: 'Appartement lumineux', city: 'Paris', price: '1 450€', type: 'T2 • 38 m²' },
  { id: 2, title: 'Studio rénové', city: 'Lyon', price: '780€', type: 'Studio • 22 m²' },
  { id: 3, title: 'Maison familiale', city: 'Bordeaux', price: '1 890€', type: '4 pièces • 95 m²' },
  { id: 4, title: 'Loft industriel', city: 'Marseille', price: '1 650€', type: 'T3 • 60 m²' },
  { id: 5, title: 'Duplex moderne', city: 'Nantes', price: '1 320€', type: 'T2 • 45 m²' },
  { id: 6, title: 'Haussmannien', city: 'Toulouse', price: '1 580€', type: 'T3 • 68 m²' },
]

const Listings = () => {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 400], [0, -20])

  return (
    <section id="locations" className="py-24 border-t" style={{borderColor:'#DADADA'}} aria-label="Locations disponibles">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <motion.h2 style={{ y }} className="text-4xl sm:text-5xl font-bold">Locations</motion.h2>
          <div className="mx-auto mt-4 h-px w-24" style={{background:'#DADADA'}} />
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {sample.map((l, i) => (
            <motion.article
              key={l.id}
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { delay: i * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }}
              className="overflow-hidden border rounded-xl bg-white" style={{borderColor:'#DADADA', boxShadow:'0 6px 18px rgba(0,0,0,0.04)'}}
              whileHover={{ boxShadow: '0 10px 28px rgba(0,0,0,0.08)' }}
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-neutral-100" />
                <motion.div className="absolute inset-0" whileHover={{ scale: 1.06 }} transition={{ duration: 0.6 }} />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-lg">{l.title}</h3>
                  <span className="font-medium">{l.price}</span>
                </div>
                <p className="text-sm opacity-70 mt-1">{l.city} • {l.type}</p>
                <button className="mt-4 w-full px-4 py-2 border rounded-lg text-sm" style={{borderColor:'#DADADA'}}>Voir les détails</button>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Listings

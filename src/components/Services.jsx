import React from 'react'
import { motion } from 'framer-motion'

const items = [
  { title: 'Gestion locative', desc: 'Sélection, baux, états des lieux, conformité.' },
  { title: 'Maintenance', desc: 'Interventions suivies, prévention, artisans qualifiés.' },
  { title: 'Loyers & charges', desc: 'Encaissement, relances, indexations, régularisations.' },
  { title: 'Reporting', desc: 'Tableaux de bord clairs, documents accessibles.' },
]

const Services = () => {
  return (
    <section id="services" className="py-24 border-t" style={{borderColor:'#DADADA'}} aria-label="Services">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold">Services</h2>
        </div>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {items.map((s, i) => (
            <motion.div
              key={s.title}
              variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { delay: i * 0.04, duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }}
              className="p-6 border rounded-xl bg-white" style={{borderColor:'#DADADA', boxShadow:'0 6px 18px rgba(0,0,0,0.04)'}}
              whileHover={{ scale: 1.02, boxShadow: '0 10px 24px rgba(0,0,0,0.06)' }}
              transition={{ type: 'spring', stiffness: 220, damping: 18 }}
            >
              <h3 className="font-semibold text-lg">{s.title}</h3>
              <p className="mt-2 text-sm opacity-70 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services

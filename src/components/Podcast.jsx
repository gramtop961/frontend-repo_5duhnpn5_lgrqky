import React from 'react'
import { motion } from 'framer-motion'

const episodes = [
  { id: 1, title: 'Trouver le bon locataire', meta: '12 min' },
  { id: 2, title: 'Maintenance proactive', meta: '18 min' },
  { id: 3, title: 'Transparence & confiance', meta: '22 min' },
  { id: 4, title: 'Optimiser la valeur', meta: '16 min' },
]

const Podcast = () => {
  return (
    <section id="podcast" className="py-24 border-t" style={{borderColor:'#DADADA'}} aria-label="Podcast Audacité">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="aspect-square border rounded-2xl bg-white flex items-center justify-center" style={{borderColor:'#DADADA', boxShadow:'0 8px 26px rgba(0,0,0,0.06)'}}>
              <div className="text-3xl font-extrabold tracking-tight select-none">AUDACITÉ<div className="text-xs font-normal opacity-60">PODCAST</div></div>
            </div>
          </motion.div>

          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Podcast</h2>
            <ul>
              {episodes.map((e, i) => (
                <motion.li
                  key={e.id}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className="py-5"
                >
                  <div className="flex items-center justify-between">
                    <p className="font-medium">{e.title}</p>
                    <span className="text-sm opacity-60">{e.meta}</span>
                  </div>
                  <div className="h-px mt-5" style={{background:'#DADADA'}} />
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Podcast

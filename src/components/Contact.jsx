import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Envoi…')
    await new Promise(r => setTimeout(r, 700))
    setStatus('Merci, nous revenons vers vous sous 24h.')
    e.currentTarget.reset()
  }

  return (
    <section id="contact" className="py-24 border-t" style={{borderColor:'#DADADA'}} aria-label="Contact">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <h2 className="text-4xl sm:text-5xl font-bold">Contact</h2>
          <p className="mt-4 opacity-70">Ultra-minimal — uniquement l’essentiel.</p>

          <form onSubmit={onSubmit} className="mt-10 space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="text-sm opacity-70">Nom</label>
                <input name="nom" required className="mt-2 w-full px-4 py-3 rounded-lg border focus:outline-none" style={{borderColor:'#DADADA'}} />
              </div>
              <div>
                <label className="text-sm opacity-70">Courriel</label>
                <input type="email" name="courriel" required className="mt-2 w-full px-4 py-3 rounded-lg border focus:outline-none" style={{borderColor:'#DADADA'}} />
              </div>
            </div>
            <div>
              <label className="text-sm opacity-70">Message</label>
              <textarea name="message" rows="4" className="mt-2 w-full px-4 py-3 rounded-lg border focus:outline-none" style={{borderColor:'#DADADA'}} />
            </div>
            <button type="submit" className="px-6 py-3 border rounded-lg" style={{borderColor:'#DADADA'}}>Envoyer</button>
            {status && <p className="text-sm opacity-70">{status}</p>}
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

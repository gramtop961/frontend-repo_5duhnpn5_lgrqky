import React, { useState } from 'react'

const Contact = () => {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    try {
      setStatus('Envoi...')
      // In a real app, send to backend endpoint
      await new Promise(r => setTimeout(r, 800))
      setStatus('Merci, nous revenons vers vous sous 24h.')
      e.currentTarget.reset()
    } catch (err) {
      setStatus("Une erreur est survenue. Merci de réessayer.")
    }
  }

  return (
    <section id="contact" className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Contact</h2>
            <p className="mt-4 text-slate-600">Parlez-nous de votre projet et recevez une réponse rapide.</p>
            <div className="mt-6 rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
              <p className="text-sm text-slate-500">Courriel</p>
              <p className="font-medium text-slate-900">contact@audacite.immo</p>
              <div className="h-px bg-slate-100 my-4" />
              <p className="text-sm text-slate-500">Téléphone</p>
              <p className="font-medium text-slate-900">+33 1 23 45 67 89</p>
              <div className="h-px bg-slate-100 my-4" />
              <p className="text-sm text-slate-500">Adresse</p>
              <p className="font-medium text-slate-900">Paris, France</p>
            </div>
          </div>

          <form onSubmit={onSubmit} className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Nom</label>
                <input name="nom" required className="mt-1 w-full rounded-xl border-slate-300 focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Courriel</label>
                <input type="email" name="courriel" required className="mt-1 w-full rounded-xl border-slate-300 focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Téléphone</label>
                <input name="telephone" className="mt-1 w-full rounded-xl border-slate-300 focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Rôle</label>
                <select name="role" className="mt-1 w-full rounded-xl border-slate-300 focus:border-blue-500 focus:ring-blue-500">
                  <option>Propriétaire</option>
                  <option>Locataire</option>
                  <option>Investisseur</option>
                  <option>Autre</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700">Message</label>
                <textarea name="message" rows="4" className="mt-1 w-full rounded-xl border-slate-300 focus:border-blue-500 focus:ring-blue-500"></textarea>
              </div>
            </div>
            <button type="submit" className="mt-6 w-full rounded-xl bg-blue-600 text-white px-4 py-3 font-semibold hover:bg-blue-700 transition-colors">Envoyer</button>
            {status && <p className="mt-3 text-sm text-slate-600">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact

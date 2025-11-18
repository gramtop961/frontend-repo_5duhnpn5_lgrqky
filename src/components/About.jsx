import React from 'react'
import { motion } from 'framer-motion'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.18 }
  }
}

const left = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
}

const right = {
  hidden: { opacity: 0, x: 20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
}

const About = () => {
  return (
    <section id="about" className="py-24 border-t" style={{borderColor:'#DADADA'}} aria-label="À propos">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 gap-16 items-start"
        >
          <motion.div variants={left}>
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight">À propos</h2>
          </motion.div>
          <motion.div variants={right} className="max-w-xl">
            <p className="text-lg leading-relaxed opacity-80">
              Une gestion immobilière exigeante et transparente. Nous privilégions la simplicité, la rigueur et une communication claire pour préserver la valeur de vos biens et la sérénité de vos locataires.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

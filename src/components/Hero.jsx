import React, { useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const Hero = () => {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 400], [0, -30])
  const opacity = useTransform(scrollY, [0, 300], [1, 0.9])

  useEffect(() => {
    // No side effects needed; framer handles transforms
  }, [])

  return (
    <section className="relative min-h-[88vh] sm:min-h-screen flex items-center" aria-label="Hero">
      <div className="absolute inset-0 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-start gap-8 py-20 sm:py-28"
        >
          <motion.h1 style={{ y, opacity }} className="text-[13vw] leading-[0.9] sm:text-[9rem] font-extrabold tracking-tight text-black select-none">
            AUDACITÉ
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg sm:text-2xl font-light max-w-2xl"
          >
            Gestion immobilière haut de gamme.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex gap-4"
          >
            <a href="#locations" className="px-5 py-2 border" style={{borderColor:'#DADADA'}}>
              Locations
            </a>
            <a href="#podcast" className="px-5 py-2 border" style={{borderColor:'#DADADA'}}>
              Podcast
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

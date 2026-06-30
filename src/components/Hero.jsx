import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Download, Mail, User } from 'lucide-react'
import { profile } from '../data'

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % profile.titles.length)
    }, 2400)
    return () => clearInterval(id)
  }, [])

  const scrollTo = (href) => (e) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-44 md:pb-28">
      <div className="section-wrap grid md:grid-cols-[1.1fr_0.9fr] gap-12 md:gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow mb-4">{profile.greeting}</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-ink leading-[1.1]">
            {profile.name}
          </h1>

          <div className="mt-4 h-8 flex items-center">
            <span className="text-lg md:text-xl font-medium text-primary">
              {profile.titles[index]}
            </span>
            <span className="ml-1 w-[2px] h-5 bg-primary animate-blink" />
          </div>

          <p className="mt-6 text-base md:text-lg text-muted max-w-xl leading-relaxed">
            {profile.summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {profile.resumeUrl ? (
              <a href={profile.resumeUrl} download className="btn-primary">
                <Download size={16} /> Download CV
              </a>
            ) : (
              <button
                disabled
                className="btn-primary opacity-50 cursor-not-allowed"
                title="Add resumeUrl in src/data.js"
              >
                <Download size={16} /> Download CV
              </button>
            )}
            <a href="#contact" onClick={scrollTo('#contact')} className="btn-secondary">
              <Mail size={16} /> Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative">
            <div className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-3xl bg-subtle border border-line overflow-hidden flex items-center justify-center shadow-card">
              {profile.avatarUrl ? (
                <img src={profile.avatarUrl} alt={profile.name} className="w-full h-full object-cover" />
              ) : (
                <User size={72} className="text-muted/40" strokeWidth={1.2} />
              )}
            </div>
            <div className="absolute -bottom-3 -left-3 w-20 h-20 rounded-2xl bg-primary-50 border border-primary-100 -z-10" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

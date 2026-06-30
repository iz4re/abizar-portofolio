import { motion } from 'framer-motion'
import { aboutStats, aboutText } from '../data'

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 border-t border-line">
      <div className="section-wrap">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow mb-3">About</p>
          <h2 className="section-title">A bit about how I work</h2>
          <p className="section-sub">{aboutText}</p>
        </motion.div>

        <div className="mt-12 grid sm:grid-cols-3 gap-4 md:gap-6">
          {aboutStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="card p-6 hover:shadow-card transition-shadow duration-300"
            >
              <span className="text-3xl md:text-4xl font-bold text-ink tracking-tight">
                {stat.value}
              </span>
              <p className="mt-1.5 text-sm text-muted font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

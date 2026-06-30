import { motion } from 'framer-motion'
import { skills } from '../data'
import SkillBadge from './SkillBadge'

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 border-t border-line">
      <div className="section-wrap">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow mb-3">Skills</p>
          <h2 className="section-title">Tools &amp; technologies</h2>
        </motion.div>

        <div className="mt-12 grid md:grid-cols-2 gap-x-10 gap-y-10">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-ink uppercase tracking-wide mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item, i) => (
                  <SkillBadge key={item} label={item} index={i} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

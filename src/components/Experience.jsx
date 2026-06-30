import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Briefcase, MapPin } from 'lucide-react'
import { experience } from '../data'
import TimelineItem from './TimelineItem'

function ExperienceCard({ item, index }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="card p-6 hover:shadow-card transition-shadow duration-300">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <div className="flex items-center gap-2 text-ink font-semibold">
            <Briefcase size={16} className="text-primary" />
            {item.role}
          </div>
          <p className="text-sm text-muted mt-1">{item.company}</p>
        </div>
        <span className="text-xs font-medium text-muted whitespace-nowrap mt-1">{item.period}</span>
      </div>

      <p className="mt-1.5 text-xs text-muted flex items-center gap-1">
        <MapPin size={12} /> {item.location}
      </p>

      <p className="mt-4 text-sm text-ink/80 leading-relaxed">{item.summary}</p>

      <AnimatePresence initial={false}>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden mt-3 space-y-2"
          >
            {item.details.map((d, i) => (
              <li key={i} className="text-sm text-ink/80 leading-relaxed pl-4 relative">
                <span className="absolute left-0 top-2 w-1 h-1 rounded-full bg-primary" />
                {d}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen((v) => !v)}
        className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary-dark transition-colors"
      >
        {open ? 'Show Less' : 'Read More'}
        <ChevronDown size={16} className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 border-t border-line">
      <div className="section-wrap">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow mb-3">Experience</p>
          <h2 className="section-title">Where I've worked</h2>
        </motion.div>

        <div className="mt-12 max-w-2xl">
          {experience.map((item, i) => (
            <TimelineItem key={item.company + item.role} index={i} isLast={i === experience.length - 1}>
              <ExperienceCard item={item} index={i} />
            </TimelineItem>
          ))}
        </div>
      </div>
    </section>
  )
}

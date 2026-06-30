import { motion } from 'framer-motion'
import { Users, MapPin } from 'lucide-react'
import { organizations } from '../data'
import TimelineItem from './TimelineItem'

export default function Organizations() {
  return (
    <section id="organizations" className="py-20 md:py-28 border-t border-line bg-subtle/50">
      <div className="section-wrap">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow mb-3">Organizations</p>
          <h2 className="section-title">Community &amp; leadership</h2>
        </motion.div>

        <div className="mt-12 max-w-2xl">
          {organizations.map((item, i) => (
            <TimelineItem key={item.org + item.position} index={i} isLast={i === organizations.length - 1}>
              <div className="card p-6 hover:shadow-card transition-shadow duration-300">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <div className="flex items-center gap-2 text-ink font-semibold">
                      <Users size={16} className="text-primary" />
                      {item.org}
                    </div>
                    <p className="text-sm text-muted mt-1">{item.position}</p>
                  </div>
                  <span className="text-xs font-medium text-muted whitespace-nowrap mt-1">{item.period}</span>
                </div>
                <p className="mt-1.5 text-xs text-muted flex items-center gap-1">
                  <MapPin size={12} /> {item.location}
                </p>
                <p className="mt-4 text-sm text-ink/80 leading-relaxed">{item.description}</p>
              </div>
            </TimelineItem>
          ))}
        </div>
      </div>
    </section>
  )
}

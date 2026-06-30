import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { education } from '../data'
import TimelineItem from './TimelineItem'

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-28 border-t border-line bg-subtle/50">
      <div className="section-wrap">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow mb-3">Education</p>
          <h2 className="section-title">Academic background</h2>
        </motion.div>

        <div className="mt-12 max-w-2xl">
          {education.map((edu, i) => (
            <TimelineItem key={edu.school} index={i} isLast={i === education.length - 1}>
              <div className="card p-6">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <div className="flex items-center gap-2 text-ink font-semibold">
                      <GraduationCap size={16} className="text-primary" />
                      {edu.school}
                    </div>
                    <p className="text-sm text-muted mt-1">{edu.degree}</p>
                  </div>
                  <span className="text-xs font-medium text-muted whitespace-nowrap mt-1">
                    {edu.period}
                  </span>
                </div>

                {edu.detail && (
                  <p className="mt-3 text-sm font-medium text-primary">{edu.detail}</p>
                )}

                <div className="mt-4 flex flex-wrap gap-2">
                  {edu.coursework.map((c) => (
                    <span key={c} className="badge text-xs py-1 px-2.5">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </TimelineItem>
          ))}
        </div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { certifications } from '../data'
import CertificateCard from './CertificateCard'

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 md:py-28 border-t border-line">
      <div className="section-wrap">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow mb-3">Certifications</p>
          <h2 className="section-title">Courses &amp; competitions</h2>
        </motion.div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <CertificateCard key={i} cert={cert} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

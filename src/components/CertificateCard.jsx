import { motion } from 'framer-motion'
import { Award, ExternalLink } from 'lucide-react'

export default function CertificateCard({ cert, index }) {
  const empty = !cert.title

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
      whileHover={{ y: -4 }}
      className="card overflow-hidden flex flex-col hover:shadow-hover transition-shadow duration-300"
    >
      <div className="aspect-[4/3] bg-subtle border-b border-line flex items-center justify-center">
        {cert.image ? (
          <img src={cert.image} alt={cert.title} className="w-full h-full object-cover" />
        ) : (
          <Award size={32} strokeWidth={1.2} className="text-muted/40" />
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-semibold text-ink text-sm leading-snug min-h-[2.5rem]">
          {empty ? 'Certificate Title' : cert.title}
        </h3>
        <p className="text-xs text-muted mt-1.5">{empty ? 'Issuing Organization' : cert.issuer}</p>
        <p className="text-xs text-muted/70 mt-0.5">{empty ? 'Date' : cert.date}</p>

        <div className="mt-4">
          {cert.url ? (
            <a
              href={cert.url}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary w-full !py-2 text-xs"
            >
              <ExternalLink size={13} /> View Credential
            </a>
          ) : (
            <button disabled className="btn-secondary w-full !py-2 text-xs opacity-50 cursor-not-allowed">
              <ExternalLink size={13} /> View Credential
            </button>
          )}
        </div>
      </div>
    </motion.div>
  )
}

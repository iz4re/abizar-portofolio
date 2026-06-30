import { motion } from 'framer-motion'

export default function SkillBadge({ label, index }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.3, delay: (index % 8) * 0.04 }}
      whileHover={{ scale: 1.05, y: -2 }}
      className="badge cursor-default hover:border-primary/40 hover:bg-primary-50 hover:text-primary-dark"
    >
      {label}
    </motion.span>
  )
}

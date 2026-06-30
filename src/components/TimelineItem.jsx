import { motion } from 'framer-motion'

export default function TimelineItem({ index, isLast, children }) {
  return (
    <div className="relative pl-10 md:pl-12">
      {!isLast && (
        <span className="absolute left-[7px] md:left-[9px] top-7 bottom-0 w-px bg-line" />
      )}
      <motion.span
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.3, delay: index * 0.05 }}
        className="absolute left-0 top-1.5 w-[15px] h-[15px] md:w-[19px] md:h-[19px] rounded-full bg-primary-50 border-2 border-primary flex items-center justify-center"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
      </motion.span>
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
        className="pb-10"
      >
        {children}
      </motion.div>
    </div>
  )
}

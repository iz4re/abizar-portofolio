import { motion } from 'framer-motion'
import { Github, ExternalLink, ImageOff } from 'lucide-react'

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
      whileHover={{ y: -4 }}
      className="card overflow-hidden flex flex-col h-full hover:shadow-hover transition-shadow duration-300"
    >
      <div className="aspect-video bg-subtle border-b border-line flex items-center justify-center overflow-hidden">
        {project.image ? (
          <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
        ) : (
          <div className="flex flex-col items-center gap-2 text-muted/50">
            <ImageOff size={28} strokeWidth={1.2} />
            <span className="text-xs font-medium">Project preview</span>
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-semibold text-ink text-lg">{project.name}</h3>
        <p className="mt-2 text-sm text-muted leading-relaxed flex-1">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span key={t} className="badge text-xs py-1 px-2.5">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-5 flex gap-3">
          {project.github ? (
            <a href={project.github} target="_blank" rel="noreferrer" className="btn-secondary flex-1 !py-2 text-sm">
              <Github size={15} /> GitHub
            </a>
          ) : (
            <button disabled className="btn-secondary flex-1 !py-2 text-sm opacity-50 cursor-not-allowed">
              <Github size={15} /> GitHub
            </button>
          )}

          {project.demo ? (
            <a href={project.demo} target="_blank" rel="noreferrer" className="btn-primary flex-1 !py-2 text-sm">
              <ExternalLink size={15} /> Live Demo
            </a>
          ) : (
            <button disabled className="btn-primary flex-1 !py-2 text-sm opacity-50 cursor-not-allowed">
              <ExternalLink size={15} /> Live Demo
            </button>
          )}
        </div>
      </div>
    </motion.div>
  )
}

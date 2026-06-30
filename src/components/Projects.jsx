import { motion } from 'framer-motion'
import { projects } from '../data'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 border-t border-line bg-subtle/50">
      <div className="section-wrap">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow mb-3">Projects</p>
          <h2 className="section-title">Selected work</h2>
          <p className="section-sub">
            A mix of academic, competition, and personal projects. Replace these placeholders with real
            screenshots, links, and write-ups — duplicate the object in <code className="text-xs bg-subtle border border-line rounded px-1 py-0.5">src/data.js</code> for more.
          </p>
        </motion.div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.name + i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

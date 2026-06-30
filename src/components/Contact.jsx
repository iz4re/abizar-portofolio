import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, MapPin, ArrowUpRight } from 'lucide-react'
import { profile } from '../data'

const items = [
  {
    icon: Mail,
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/abizartsaqifabrar',
    href: profile.linkedin,
  },
  {
    icon: Github,
    label: 'GitHub',
    value: profile.github || 'Add GitHub URL',
    href: profile.github || null,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: profile.location,
    href: null,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 border-t border-line bg-subtle/50">
      <div className="section-wrap">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-xl mx-auto"
        >
          <p className="eyebrow mb-3">Contact</p>
          <h2 className="section-title">Let's work together</h2>
          <p className="section-sub mx-auto">
            Open to internships, collaborations, and full-time opportunities. Feel free to reach out.
          </p>
          <a href={`mailto:${profile.email}`} className="btn-primary mt-8">
            <Mail size={16} /> Say Hello
          </a>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, i) => {
            const Icon = item.icon
            const content = (
              <>
                <div className="w-9 h-9 rounded-lg bg-primary-50 flex items-center justify-center">
                  <Icon size={16} className="text-primary" />
                </div>
                <p className="mt-3 text-xs font-medium text-muted">{item.label}</p>
                <p className="mt-0.5 text-sm font-medium text-ink truncate w-full">{item.value}</p>
              </>
            )

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    className="card p-5 flex flex-col items-start w-full hover:shadow-card hover:-translate-y-0.5 transition-all duration-300 group"
                  >
                    {content}
                    <ArrowUpRight size={14} className="mt-2 text-muted/0 group-hover:text-primary transition-colors" />
                  </a>
                ) : (
                  <div className="card p-5 flex flex-col items-start w-full">{content}</div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

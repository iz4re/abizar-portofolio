import { profile } from '../data'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-line py-8">
      <div className="section-wrap flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted">
        <p>© {year} {profile.name}. All rights reserved.</p>
        <p>Built with React + Tailwind CSS</p>
      </div>
    </footer>
  )
}

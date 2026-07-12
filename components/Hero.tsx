import { hero } from '@/data/resume'
import { GitHubIcon, LinkedInIcon } from '@/components/icons'
import { Mail } from 'lucide-react'

export default function Hero() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold tracking-tight mb-3">{hero.name}</h1>
      <p className="text-xl text-indigo-600 dark:text-indigo-400 font-medium mb-2">
        {hero.tagline}
      </p>
      <p className="text-gray-500 dark:text-gray-400 mb-8">{hero.subline}</p>
      <div className="flex items-center gap-4">
        <a
          href={hero.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
        >
          <LinkedInIcon size={16} /> LinkedIn
        </a>
        <a
          href={hero.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
        >
          <GitHubIcon size={16} /> GitHub
        </a>
        <a
          href={`mailto:${hero.links.email}`}
          className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
        >
          <Mail size={16} /> Email
        </a>
      </div>
    </section>
  )
}

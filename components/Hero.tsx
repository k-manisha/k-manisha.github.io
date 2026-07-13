import { hero } from '@/data/resume'
import { GitHubIcon, LinkedInIcon } from '@/components/icons'
import { Mail } from 'lucide-react'

export default function Hero() {
  return (
    <section className="max-w-2xl mx-auto px-6 pt-14 pb-8">
      <h1 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white mb-2">
        {hero.name}
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 font-normal mb-1">
        {hero.tagline}
      </p>
      <p className="text-sm text-gray-400 dark:text-gray-500 mb-8">{hero.subline}</p>
      <div className="flex items-center gap-5">
        <a
          href={hero.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <LinkedInIcon size={15} /> LinkedIn
        </a>
        <a
          href={hero.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <GitHubIcon size={15} /> GitHub
        </a>
        <a
          href={`mailto:${hero.links.email}`}
          className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <Mail size={15} /> Email
        </a>
      </div>
    </section>
  )
}

import { footer } from '@/data/resume'
import { GitHubIcon, LinkedInIcon } from '@/components/icons'
import { Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 mt-16">
      <div className="max-w-4xl mx-auto px-6 py-8 flex flex-wrap items-center justify-between gap-4">
        <p className="text-xs text-gray-400 dark:text-gray-500">{footer.credit}</p>
        <div className="flex items-center gap-4">
          <a
            href={`mailto:${footer.email}`}
            className="text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
          <a
            href={footer.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedInIcon size={18} />
          </a>
          <a
            href={footer.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            aria-label="GitHub"
          >
            <GitHubIcon size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}

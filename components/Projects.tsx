import { projects } from '@/data/resume'
import { ExternalLink } from 'lucide-react'
import { GitHubIcon } from '@/components/icons'

export default function Projects() {
  return (
    <section id="projects" className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-bold mb-10">Projects</h2>
      <div className="space-y-6">
        {projects.map((project) => (
          <div
            key={project.name}
            className="p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-indigo-400 dark:hover:border-indigo-500 transition-colors"
          >
            <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
              <h3 className="text-lg font-semibold">{project.name}</h3>
              <div className="flex items-center gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    aria-label="GitHub"
                  >
                    <GitHubIcon size={16} />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    aria-label="Live demo"
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>
            {project.note && (
              <p className="text-xs text-gray-400 dark:text-gray-500 mb-2 italic">{project.note}</p>
            )}
            <p className="text-sm text-indigo-600 dark:text-indigo-400 mb-3">{project.description}</p>
            <ul className="space-y-1">
              {project.bullets.map((bullet, i) => (
                <li key={i} className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  • {bullet}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

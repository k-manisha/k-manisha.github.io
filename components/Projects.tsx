import { projects } from '@/data/resume'
import { ExternalLink } from 'lucide-react'
import { GitHubIcon } from '@/components/icons'
import BulletList from '@/components/BulletList'

export default function Projects() {
  return (
    <section id="projects" className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-8">Projects</h2>
      <div className="space-y-8">
        {projects.map((project) => (
          <div key={project.name}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-base font-semibold text-gray-900 dark:text-white">{project.name}</h3>
                {project.note && (
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{project.note}</p>
                )}
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">{project.description}</p>
              </div>
              <div className="flex items-center gap-3 shrink-0 mt-0.5">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                    aria-label="GitHub"
                  >
                    <GitHubIcon size={15} />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                    aria-label="Live demo"
                  >
                    <ExternalLink size={15} />
                  </a>
                )}
              </div>
            </div>
            <BulletList bullets={project.bullets} />
          </div>
        ))}
      </div>
    </section>
  )
}

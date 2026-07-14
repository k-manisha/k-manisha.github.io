import { hero } from '@/data/resume'
import { GitHubIcon, LinkedInIcon } from '@/components/icons'
import { Mail } from 'lucide-react'
import HeroAvatar from '@/components/HeroAvatar'

export default function Hero() {
  return (
    <section className="max-w-2xl mx-auto px-6 pt-14 pb-8 flex flex-row items-center justify-between gap-12">
      <div className="flex-1">
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white mb-2">
          {hero.name}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 font-normal mb-1">
          {hero.tagline}
        </p>
        <p className="text-sm text-gray-400 dark:text-gray-500 mb-8">{hero.subline}</p>
        <div className="flex items-center gap-5">
          {[
            { href: hero.links.linkedin, icon: <LinkedInIcon size={15} />, label: 'LinkedIn', external: true },
            { href: hero.links.github, icon: <GitHubIcon size={15} />, label: 'GitHub', external: true },
            { href: `mailto:${hero.links.email}`, icon: <Mail size={15} />, label: 'Email', external: false },
          ].map(({ href, icon, label, external }) => (
            <a
              key={label}
              href={href}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white px-2.5 py-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-150 hover:shadow-sm relative hover:z-10"
            >
              {icon} {label}
            </a>
          ))}
        </div>
      </div>

      <HeroAvatar />
    </section>
  )
}

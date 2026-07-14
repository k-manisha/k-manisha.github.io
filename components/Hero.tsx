import Image from 'next/image'
import { hero } from '@/data/resume'
import { GitHubIcon, LinkedInIcon } from '@/components/icons'
import { Mail } from 'lucide-react'

async function getGitHubAvatar(): Promise<string | null> {
  try {
    const res = await fetch('https://api.github.com/users/k-manisha', {
      next: { revalidate: 0 },
    })
    if (!res.ok) return null
    const data = await res.json()
    return data.avatar_url ?? null
  } catch {
    return null
  }
}

export default async function Hero() {
  const avatarUrl = await getGitHubAvatar()

  return (
    <section className="max-w-3xl mx-auto px-6 pt-14 pb-8 flex flex-row items-center justify-between gap-12">
      <div className="flex-1">
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
      </div>

      {avatarUrl && (
        <div className="hidden md:block flex-shrink-0">
          <Image
            src={avatarUrl}
            alt="Manisha Kashyap"
            width={200}
            height={200}
            className="rounded-lg"
            priority
          />
        </div>
      )}
    </section>
  )
}

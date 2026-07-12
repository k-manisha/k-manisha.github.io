import { about } from '@/data/resume'

export default function About() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-100 dark:border-gray-800/60">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">About</h2>
      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">{about}</p>
    </section>
  )
}

import { about } from '@/data/resume'
import Section from '@/components/Section'

export default function About() {
  return (
    <Section>
      <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">About</h2>
      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">{about}</p>
    </Section>
  )
}

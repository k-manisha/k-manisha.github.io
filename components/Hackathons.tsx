import { hackathons } from '@/data/resume'
import Section from '@/components/Section'
import BulletList from '@/components/BulletList'

export default function Hackathons() {
  return (
    <Section id="hackathons">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-8">Hackathons</h2>
      <div className="space-y-4">
        {hackathons.map((item) => (
          <div key={item.name} className="rounded-lg border border-gray-100 dark:border-gray-800 bg-gray-50/60 dark:bg-gray-900/40 px-5 py-4">
            <div className="flex items-start justify-between gap-4 mb-1">
              <h3 className="text-base font-semibold text-gray-900 dark:text-white">{item.name}</h3>
              <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400">
                {item.result}
              </span>
            </div>
            <p className="text-xs text-gray-400 dark:text-gray-500 mb-3">
              {item.location} · {item.period}
            </p>
            <BulletList bullets={item.bullets} />
          </div>
        ))}
      </div>
    </Section>
  )
}

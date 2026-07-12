import { hackathons } from '@/data/resume'
import Section from '@/components/Section'
import BulletList from '@/components/BulletList'

export default function Hackathons() {
  return (
    <Section id="hackathons">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-8">Hackathons</h2>
      <div className="space-y-8">
        {hackathons.map((item) => (
          <div key={item.name}>
            <div className="flex items-baseline justify-between gap-6">
              <h3 className="text-base font-semibold text-gray-900 dark:text-white">{item.name}</h3>
              <span className="text-sm text-gray-400 dark:text-gray-500 shrink-0">{item.period}</span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
              {item.result} · {item.location}
            </p>
            <BulletList bullets={item.bullets} />
          </div>
        ))}
      </div>
    </Section>
  )
}

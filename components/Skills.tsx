import { skills } from '@/data/resume'
import Section from '@/components/Section'

export default function Skills() {
  return (
    <Section id="skills">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-8">Skills</h2>
      <div className="space-y-4">
        {skills.map((group) => (
          <div key={group.label} className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
            <span className="text-xs text-gray-400 dark:text-gray-500 w-24 shrink-0 pt-0.5">{group.label}</span>
            <div className="flex flex-wrap gap-1.5">
              {group.values.map((v) => (
                <span
                  key={v}
                  className="text-xs px-2.5 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                >
                  {v}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

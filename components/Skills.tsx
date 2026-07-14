import { skills } from '@/data/resume'
import Section from '@/components/Section'

export default function Skills() {
  return (
    <Section id="skills">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-8">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {skills.map((group) => (
          <div
            key={group.label}
            className="rounded-lg border border-gray-100 dark:border-gray-800 bg-gray-50/60 dark:bg-gray-900/40 px-4 py-3"
          >
            <div className="flex items-center gap-2 mb-2.5">
              <span className="text-base">{group.icon}</span>
              <span className="text-xs font-medium text-gray-500 dark:text-gray-400">{group.label}</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {group.values.map((v) => (
                <span
                  key={v}
                  className="text-xs px-2 py-0.5 rounded-md bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300"
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

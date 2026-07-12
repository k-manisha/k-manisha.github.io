import { skills } from '@/data/resume'

export default function Skills() {
  return (
    <section id="skills" className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-8">Skills</h2>
      <div className="space-y-3">
        {skills.map((group) => (
          <div key={group.label} className="grid grid-cols-[9rem_1fr] gap-x-4">
            <span className="text-sm text-gray-400 dark:text-gray-500 pt-0.5 shrink-0">
              {group.label}
            </span>
            <span className="text-sm text-gray-700 dark:text-gray-300">
              {group.values.join(', ')}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

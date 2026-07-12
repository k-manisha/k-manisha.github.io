import { skills } from '@/data/resume'

export default function Skills() {
  return (
    <section id="skills" className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-bold mb-10">Skills</h2>
      <div className="space-y-4">
        {skills.map((group) => (
          <div key={group.label} className="flex flex-wrap gap-x-6 gap-y-1">
            <span className="w-32 shrink-0 text-sm font-medium text-gray-500 dark:text-gray-400 pt-0.5">
              {group.label}
            </span>
            <div className="flex flex-wrap gap-2">
              {group.values.map((value) => (
                <span
                  key={value}
                  className="text-sm px-2.5 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                >
                  {value}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

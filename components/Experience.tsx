import { experience } from '@/data/resume'

export default function Experience() {
  return (
    <section id="experience" className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-bold mb-10">Experience</h2>
      <div className="space-y-10">
        {experience.map((item) => (
          <div key={item.company} className="border-l-2 border-indigo-500 dark:border-indigo-400 pl-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
              <h3 className="text-lg font-semibold">{item.company}</h3>
              <span className="text-sm text-gray-500 dark:text-gray-400">{item.period}</span>
            </div>
            <p className="text-sm text-indigo-600 dark:text-indigo-400 mb-1">{item.title}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{item.location}</p>
            <ul className="space-y-2">
              {item.bullets.map((bullet, i) => (
                <li key={i} className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  • {bullet}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

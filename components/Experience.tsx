import { experience } from '@/data/resume'
import TimelineItem from '@/components/TimelineItem'

export default function Experience() {
  return (
    <section id="experience" className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-8">Experience</h2>
      <div className="space-y-10">
        {experience.map((item) => (
          <TimelineItem
            key={item.company}
            title={item.company}
            subtitle={item.title}
            meta={item.location}
            period={item.period}
            summary={item.summary}
          />
        ))}
      </div>
    </section>
  )
}

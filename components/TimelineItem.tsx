type TimelineItemProps = {
  title: string
  subtitle: string
  meta: string
  period: string
  summary: string
  tech?: string[]
}

export default function TimelineItem({ title, subtitle, meta, period, summary, tech }: TimelineItemProps) {
  return (
    <div className="grid grid-cols-[7rem_1fr] gap-x-6 sm:grid-cols-[8rem_1fr]">
      <span className="text-xs text-gray-400 dark:text-gray-500 pt-1 leading-snug">{period}</span>
      <div>
        <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-0.5">{title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
          {subtitle} · {meta}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">{summary}</p>
        {tech && tech.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {tech.map((t) => (
              <span
                key={t}
                className="text-xs px-2 py-0.5 rounded-md bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

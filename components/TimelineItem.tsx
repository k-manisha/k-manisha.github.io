type TimelineItemProps = {
  title: string
  subtitle: string
  meta: string
  period: string
  summary: string
}

export default function TimelineItem({ title, subtitle, meta, period, summary }: TimelineItemProps) {
  return (
    <div>
      <div className="grid grid-cols-[1fr_auto] gap-x-4 items-baseline mb-0.5">
        <h3 className="text-base font-semibold text-gray-900 dark:text-white">{title}</h3>
        <span className="text-sm text-gray-400 dark:text-gray-500 whitespace-nowrap">{period}</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
        {subtitle} · {meta}
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{summary}</p>
    </div>
  )
}

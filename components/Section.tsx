type SectionProps = {
  id?: string
  children: React.ReactNode
  className?: string
}

export default function Section({ id, children, className = '' }: SectionProps) {
  return (
    <section
      id={id}
      className={`max-w-4xl mx-auto px-6 py-12 border-t border-gray-100 dark:border-gray-800/60 ${className}`}
    >
      {children}
    </section>
  )
}

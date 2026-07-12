export default function BulletList({ bullets }: { bullets: string[] }) {
  return (
    <ul className="space-y-1.5 mt-3">
      {bullets.map((bullet, i) => (
        <li key={i} className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed pl-3 relative before:content-['–'] before:absolute before:left-0 before:text-gray-300 dark:before:text-gray-600">
          {bullet}
        </li>
      ))}
    </ul>
  )
}

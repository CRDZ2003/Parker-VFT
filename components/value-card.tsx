import type { LucideIcon } from "lucide-react"

export function ValueCard({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon
  title: string
  description: string
}) {
  return (
    <div className="w-80 h-full bg-cyan-600 text-white rounded-lg border p-6 text-center">
      {/* Icon */}
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-md bg-white/10">
        <Icon className="size-7" aria-hidden="true" />
      </div>

      {/* Heading */}
      <h3 className="text-xl font-bold">{title}</h3>

      {/* Content */}
      <p className="mt-2 text-sm text-gray-200">{description}</p>
    </div>
  )
}

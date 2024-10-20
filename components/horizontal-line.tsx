'use client'

import { Separator } from "@/components/ui/separator"

interface HorizontalLineProps {
  className?: string
  color?: string
  thickness?: number
}

export function HorizontalLine({
  className = "",
  color = "border-primary",
  thickness = 1,
}: HorizontalLineProps = {}) {
  return (
    <Separator
      className={`my-4 ${color} ${className}`}
      style={{ height: `${thickness}px` }}
    />
  )
}
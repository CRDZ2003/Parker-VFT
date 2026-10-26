//components/ui/enhancedbutton.tsx
import type React from "react"
import { Button } from "@/components/ui/button"
import { LoadingSpinner } from "./loading-spinner"
import { cn } from "@/lib/utils"

interface EnhancedButtonProps extends React.ComponentProps<typeof Button> {
  loading?: boolean
  glowEffect?: boolean
  children: React.ReactNode
}

export function EnhancedButton({ loading, glowEffect, className, children, disabled, ...props }: EnhancedButtonProps) {
  return (
    <Button
      className={cn(
        "button-press transition-all duration-300",
        glowEffect && "hover-glow",
        "industrial-border",
        className,
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <div className="flex items-center space-x-2">
          <LoadingSpinner size="sm" />
          <span>Loading...</span>
        </div>
      ) : (
        children
      )}
    </Button>
  )
}
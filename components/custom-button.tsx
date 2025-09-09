import type React from "react"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline"
  children: ReactNode
}

export function CustomButton({ variant = "default", className, children, ...props }: CustomButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-all",
        variant === "default"
          ? "bg-gradient-to-r from-red-500 to-purple-500 text-white hover:opacity-90 border-0"
          : "border-2 border-white text-white hover:bg-white/10 hover:border-red-500 hover:text-red-500",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}

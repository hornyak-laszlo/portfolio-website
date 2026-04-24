"use client"

import { useContext } from "react"
import { ThemeContext } from "./theme-context"

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    return {
      theme: "light" as const,
      toggleTheme: () => {},
    }
  }
  return context
}

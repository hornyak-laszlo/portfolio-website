"use client"

import { createContext } from "react"

type Theme = "light" | "dark"

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

export type { ThemeContextType }
export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
)

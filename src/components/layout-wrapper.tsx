"use client"

import { ThemeProvider } from "./providers/theme-provider"
import { Header } from "./header"

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <Header />
      {children}
    </ThemeProvider>
  )
}

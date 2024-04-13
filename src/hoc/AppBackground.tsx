'use client'

import { Box } from "@mui/material"
import { ReactNode } from "react"

export const AppBackground = ({ children }: { children: ReactNode }) => {
  return (
    <Box sx={{
      backgroundColor: (theme) => theme.color.background.primary
    }}>
      {children}
    </Box>
  )
}

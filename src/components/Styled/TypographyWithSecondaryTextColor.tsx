'use client'

import { Typography, styled } from "@mui/material";

export const TypographyWithSecondaryTextColor = styled(Typography)
  (
    ({ theme }) => ({
      color: theme.color.text.secondary
    })
  )

'use client'

import { Typography, styled } from "@mui/material";

export const TypographyVariation2 = styled(Typography)
  (
    ({ theme }) => ({
      color: theme.color.text.variation2
    })
  )

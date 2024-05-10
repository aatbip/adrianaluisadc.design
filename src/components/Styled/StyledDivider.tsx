'use client'

import { Divider, styled } from "@mui/material"

export const StyledDivider = styled(Divider)
  (
    ({ theme }) => ({
      backgroundColor: theme.color.outline
    })
  )
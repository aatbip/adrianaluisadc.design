'use client'

import { TypographyVariation2 } from "@/components/Styled/TypographyVariation2"
import { Box, Stack } from "@mui/material"
import { ReactNode } from "react";

export const BlockRenderer = ({ blockHeading, leftNode, rightNode }: { blockHeading: string; leftNode: ReactNode; rightNode: ReactNode; }) => {
  return (
    <Box mt="64px">
      <Box sx={{
        borderBottom: (theme) => `1px solid ${theme.color.outline}`,
        pb: '24px',
        mb: '24px',
      }}>
        <TypographyVariation2 variant="heading5">{blockHeading}</TypographyVariation2>
      </Box>
      <Stack direction="row" columnGap={10}>
        <Box flexBasis="50%">{leftNode}</Box>
        <Box flexBasis="50%">{rightNode}</Box>
      </Stack>
    </Box>
  )
}

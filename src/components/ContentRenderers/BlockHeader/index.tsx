'use client'

import { TypographyVariation2 } from "@/components/Styled/TypographyVariation2"
import { Box } from "@mui/material";

export const BlockHeader = ({ content }: { content: string; }) => {
  return (
    <Box mb={5}>
      <TypographyVariation2 variant="heading6">{content}</TypographyVariation2>
    </Box>
  )
}

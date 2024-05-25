'use client'

import { TypographyWithSecondaryTextColor } from "@/components/Styled/TypographyWithSecondaryTextColor"
import { Box } from "@mui/material"
import { ISecondaryTitle, Renderer } from '@/types/contentRendererTypes'

export const SecondaryTitle = (props: ISecondaryTitle) => {
  return (
    <Box m="40px 0px">
      <TypographyWithSecondaryTextColor variant="capsMd" letterSpacing={"2px"}> {props.content}</TypographyWithSecondaryTextColor>
    </Box>
  )
}

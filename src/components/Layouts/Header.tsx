'use client'

import { Box, Stack } from "@mui/material"
import { TypographyWithSecondaryTextColor } from "../Styled/TypographyWithSecondaryTextColor"
import { SunBrightIcon } from "@/icons"

export const Header = () => {
  return (
    <Stack direction="row" padding="24px 0px" justifyContent="space-between">
      <TypographyWithSecondaryTextColor variant="capsSm">Adriana Luisa Dela Cruz <span style={{ margin: '0px 12px' }}>&#x2022;</span>UX Designer</TypographyWithSecondaryTextColor>

      <Stack direction="row" columnGap={10}>
        <TypographyWithSecondaryTextColor variant="capsSm" className="link">Works</TypographyWithSecondaryTextColor>
        <TypographyWithSecondaryTextColor variant="capsSm" className="link">UI Studies</TypographyWithSecondaryTextColor>
        <TypographyWithSecondaryTextColor variant="capsSm" className="link">About Me</TypographyWithSecondaryTextColor>
        <TypographyWithSecondaryTextColor variant="capsSm" className="link">LinkedIn</TypographyWithSecondaryTextColor>
        <TypographyWithSecondaryTextColor variant="capsSm" className="link">Behance</TypographyWithSecondaryTextColor>
        <Box className="link"><SunBrightIcon /></Box>
      </Stack>
    </Stack>
  )
}

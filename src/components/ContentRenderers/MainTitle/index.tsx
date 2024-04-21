'use client'

import { CTAButton } from "@/components/Buttons/CTAButton"
import { TypographyVariation1 } from "@/components/Styled/TypographyVariation1"
import { Box, Stack } from "@mui/material"

export const MainTitle = () => {
  return (
    <Box sx={{
      borderBottom: (theme) => `1px solid ${theme.color.outline}`,
    }}>
      <TypographyVariation1 variant="heading3">Nepal Air Trip Case Study</TypographyVariation1>
      <Stack direction="row" columnGap={7.5} m="40px 0px 24px 0px">
        <CTAButton content="SEE THIS PROJECT LIVE" handleClick={() => { }} />
        <CTAButton content="UI SHOWCASE" handleClick={() => { }} />
      </Stack>
    </Box>
  )
}

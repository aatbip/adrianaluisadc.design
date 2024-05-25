'use client'

import { CTAButton } from "@/components/Buttons/CTAButton"
import { TypographyVariation1 } from "@/components/Styled/TypographyVariation1"
import { IMainTitle } from "@/types/contentRendererTypes"
import { Box, Stack } from "@mui/material"

export const MainTitle = (props: IMainTitle) => {

  const openLink = (link: string | undefined) => {
    if (link) {
      window.open(link, "__blank")
    }
  }

  return (
    <Box sx={{
      borderBottom: (theme) => `1px solid ${theme.color.outline}`,
    }}>
      <TypographyVariation1 variant="heading3">{props.title}</TypographyVariation1>
      <Stack direction="row" columnGap={7.5} m="40px 0px 24px 0px">
        {
          props.ctaButton1Content && props.ctaButton1Link &&
          <CTAButton content={props.ctaButton1Content} handleClick={() => { openLink(props.ctaButton1Link) }} />
        }
        {
          props.ctaButton2Content && props.ctaButton2Link &&
          <CTAButton content={props.ctaButton2Content} handleClick={() => { openLink(props.ctaButton2Content) }} />
        }
      </Stack>
    </Box>
  )
}

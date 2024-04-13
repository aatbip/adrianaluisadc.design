'use client'

import { Box, Stack, styled } from "@mui/material"
import { TypographyWithPrimaryTextColor } from "../Styled/TypographyWithPrimaryTextColor"
import { CTAButton } from "../Buttons/CTAButton"
import { useEffect, useRef } from "react"
import { useCheckElementInViewport } from "@/hooks/useCheckElementInViewport"
import { useAppState } from "@/hooks/useAppState"

export const SecondaryHeader = () => {

  const targetRef = useRef<HTMLDivElement | null>(null)
  const isVisible = useCheckElementInViewport(targetRef)

  const appState = useAppState()
  useEffect(() => {
    appState?.setAppState(prev => ({ ...prev, isVisibleSecondaryHeaderCTAButton: isVisible }))
  }, [isVisible])

  return (
    <Box pt="18px">
      <TypographyWithPrimaryTextColor variant="heading1" fontWeight={300} lineHeight="126px" letterSpacing="-2px">Hi! I'm Adriana, a UX Designer who specializes in <BoldedText variant="heading1">User Interface, Design System,</BoldedText> & <BoldedText variant="heading1">Storytelling</BoldedText></TypographyWithPrimaryTextColor>

      <Stack direction="row" columnGap={10} p="64px 0px" sx={{
        borderBottom: (theme) => `1px solid ${theme.color.outline}`
      }} ref={targetRef}>
        <CTAButton content="WORKS" handleClick={() => { }} />
        <CTAButton content="UI STUDIES" handleClick={() => { }} />
        <CTAButton content="ABOUT ME" handleClick={() => { }} />
      </Stack>
    </Box>
  )
}


const BoldedText = styled(TypographyWithPrimaryTextColor)({
  fontWeight: 500,
  fontStyle: 'italic',
  lineHeight: "126px",
  letterSpacing: '-2px'
})

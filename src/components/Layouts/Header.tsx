'use client'

import { Box, Stack, styled } from "@mui/material"
import { TypographyWithSecondaryTextColor } from "../Styled/TypographyWithSecondaryTextColor"
import { MoonBrightIcon, SunBrightIcon } from "@/icons"
import { useAppState } from "@/hooks/useAppState"
import { ThemeMode } from "@/types/interfaces"
import { AnimateUnderline } from "../Styled/AnimateUnderline"

export const Header = () => {
  const appState = useAppState()

  const DynamicDisplayTypography = styled(TypographyWithSecondaryTextColor)({
    display: appState?.isVisibleSecondaryHeaderCTAButton ? 'none' : 'block',
  })

  return (
    <Stack direction="row" p="24px 0px" justifyContent="space-between" sx={{
      borderBottom: (theme) => `1px solid ${theme.color.outline}`,
      position: 'sticky',
      width: '100%',
      top: 0,
      left: 0,
      zIndex: 999,
      background: (theme) => theme.color.background.primary,
      mb: '34px'
    }}>
      <TypographyWithSecondaryTextColor variant="capsSm">Adriana Luisa Dela Cruz <span style={{ margin: '0px 12px' }}>&#x2022;</span>UX Designer</TypographyWithSecondaryTextColor>

      <Stack direction="row" columnGap={10}>
        <AnimateUnderline className="link">
          <DynamicDisplayTypography variant="capsSm">Works</DynamicDisplayTypography>
        </AnimateUnderline>
        <AnimateUnderline className="link">
          <DynamicDisplayTypography variant="capsSm">UI Studies</DynamicDisplayTypography>
        </AnimateUnderline>
        <AnimateUnderline className="link">
          <DynamicDisplayTypography variant="capsSm">About Me</DynamicDisplayTypography>
        </AnimateUnderline>
        <AnimateUnderline className="link">
          <TypographyWithSecondaryTextColor variant="capsSm">LinkedIn</TypographyWithSecondaryTextColor>
        </AnimateUnderline>
        <AnimateUnderline className="link">
          <TypographyWithSecondaryTextColor variant="capsSm">Behance</TypographyWithSecondaryTextColor>
        </AnimateUnderline>
        <Box className="link" onClick={() => appState?.setAppState(prev => ({ ...prev, themeMode: appState?.themeMode === ThemeMode.DARK ? ThemeMode.LIGHT : ThemeMode.DARK }))}>
          {
            appState?.themeMode === ThemeMode.DARK ? <SunBrightIcon /> : <MoonBrightIcon />
          }
        </Box>
      </Stack>
    </Stack>
  )
}


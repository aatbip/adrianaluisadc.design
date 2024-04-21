import { TypographyVariant, TypographyVariantsOptions } from '@mui/material'
import React from 'react'

export declare module '@mui/material/styles' {
  interface Theme {
    breakpoints: {
      values: {
        xs: number
        sm: number
        md: number
        lg: number
        xl: number
      }
    }
    color: {
      text: {
        primary: string
        secondary: string
        variation1: string
        variation2: string
      }
      background: {
        primary: string
      }
      outline: string
      bright: string
    }
  }

  interface ThemeOptions {
    breakpoints: {
      values: {
        xs: number
        sm: number
        md: number
        lg: number
        xl: number
      }
    }
    color: {
      text: {
        primary: React.CSSProperties['color']
        secondary: React.CSSProperties['color']
        variation1: React.CSSProperties['color']
        variation2: React.CSSProperties['color']
      }
      background: {
        primary: React.CSSProperties['color']
      }
      outline: React.CSSProperties['color']
      bright: React.CSSProperties['color']
    }
  }

  interface TypographyVariants {
    heading1: React.CSSProperties
    heading2: React.CSSProperties
    heading3: React.CSSProperties
    heading4: React.CSSProperties
    heading5: React.CSSProperties
    heading6: React.CSSProperties
    'Body Reg': React.CSSProperties
    'Body Bold': React.CSSProperties
    'Body Reg Italic': React.CSSProperties
    'Body Bold Italic': React.CSSProperties
    'Subtitle Text': React.CSSProperties
    'Caption Text': React.CSSProperties
    capsSm: React.CSSProperties
    capsLg: React.CSSProperties
    capsMd: React.CSSProperties
    capsXlg: React.CSSProperties
  }

  interface TypographyVariantsOptions {
    heading1: React.CSSProperties
    heading2: React.CSSProperties
    heading3: React.CSSProperties
    heading4: React.CSSProperties
    heading5: React.CSSProperties
    heading6: React.CSSProperties
    'Body Reg': React.CSSProperties
    'Body Bold': React.CSSProperties
    'Body Reg Italic': React.CSSProperties
    'Body Bold Italic': React.CSSProperties
    'Subtitle Text': React.CSSProperties
    'Caption Text': React.CSSProperties
    capsSm: React.CSSProperties
    capsLg: React.CSSProperties
    capsMd: React.CSSProperties
    capsXlg: React.CSSProperties
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    heading1: true
    heading2: true
    heading3: true
    heading4: true
    heading5: true
    heading6: true
    'Body Reg': true
    'Body Bold': true
    'Body Reg Italic': true
    'Body Bold Italic': true
    'Subtitle Text': true
    'Caption Text': true
    capsSm: true
    capsLg: true
    capsMd: true
    capsXlg: true
    h1: false
    h2: false
    h3: false
    h4: false
    h5: false
    h6: false
    caption: false
    subtitle1: false
    subtitle2: false
    body1: false
    body2: false
    button: false
    overline: false
  }
}

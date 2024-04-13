import { createTheme } from '@mui/material'
import { neueRegrade, uncutSans } from '@/fonts/index'

export const darkTheme = createTheme({
  spacing: 4,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 768,
      lg: 1280,
      xl: 1440
    },
  },
  color: {
    text: {
      primary: '#F4F4F4',
      secondary: '#7D7D7D'
    },
    background: {
      primary: '#222324'
    },
    outline: '#333333',
    bright: '#E3BC57'
  },
  typography: {
    heading1: {
      fontFamily: neueRegrade.style.fontFamily,
      fontSize: '100px',
      fontStyle: 'normal',
      fontWeight: 500,
    },
    heading2: {
      fontFamily: neueRegrade.style.fontFamily,
      fontSize: '75',
      fontStyle: 'normal',
      fontWeight: 500,
    },
    heading3: {
      fontFamily: neueRegrade.style.fontFamily,
      fontSize: '56px',
      fontStyle: 'normal',
      fontWeight: 500,
    },
    heading4: {
      fontFamily: neueRegrade.style.fontFamily,
      fontSize: '42px',
      fontStyle: 'normal',
      fontWeight: 500,
    },
    heading5: {
      fontFamily: neueRegrade.style.fontFamily,
      fontSize: '32px',
      fontStyle: 'normal',
      fontWeight: 500,
    },
    heading6: {
      fontFamily: neueRegrade.style.fontFamily,
      fontSize: '24px',
      fontStyle: 'normal',
      fontWeight: 500,
    },
    'Body Reg': {
      fontFamily: neueRegrade.style.fontFamily,
      fontSize: '18px',
      fontStyle: 'normal',
      fontWeight: 400,
    },
    'Body Bold': {
      fontFamily: neueRegrade.style.fontFamily,
      fontSize: '18px',
      fontStyle: 'normal',
      fontWeight: 600,
    },
    'Body Reg Italic': {
      fontFamily: neueRegrade.style.fontFamily,
      fontSize: '18px',
      fontStyle: 'italic',
      fontWeight: 400,
    },
    'Body Bold Italic': {
      fontFamily: neueRegrade.style.fontFamily,
      fontSize: '18px',
      fontStyle: 'italic',
      fontWeight: 600,
    },
    'Subtitle Text': {
      fontFamily: neueRegrade.style.fontFamily,
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: 400,
    },
    'Caption Text': {
      fontFamily: neueRegrade.style.fontFamily,
      fontSize: '11px',
      fontStyle: 'normal',
      fontWeight: 400,
    },
    capsSm: {
      fontFamily: uncutSans.style.fontFamily,
      fontSize: '15px',
      fontStyle: 'normal',
      fontWeight: 500,
      textTransform: 'uppercase'
    },
    capsMd: {
      fontFamily: uncutSans.style.fontFamily,
      fontSize: '20px',
      fontStyle: 'normal',
      fontWeight: 500,
      textTransform: 'uppercase'
    },
    capsLg: {
      fontFamily: uncutSans.style.fontFamily,
      fontSize: '30px',
      fontStyle: 'normal',
      fontWeight: 500,
      textTransform: 'uppercase'
    },
    capsXlg: {
      fontFamily: uncutSans.style.fontFamily,
      fontSize: '40px',
      fontStyle: 'normal',
      fontWeight: 500,
      textTransform: 'uppercase'
    },
  },
})

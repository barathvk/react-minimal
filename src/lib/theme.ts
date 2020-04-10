import { theme as defaultTheme } from '@chakra-ui/core'
const chunder = {
  background: '#0C2D48',
  primary: '#2E8BC0',
  secondary: '#145DA0',
  highlight: '#F8EA8C',
  danger: '#F37970',
  success: '#CFDBC5',
}
const dracula = {
  background: '#282a36',
  primary: '#bd93f9',
  secondary: '#6272a4',
  highlight: '#f1fa8c',
  danger: '#ff5555',
  success: '#50fa7b',
}
export const colors = chunder
export const theme = {
  ...defaultTheme,
  fonts: {
    mono: 'Menlo, monospace',
    body: 'Poppins',
    heading: 'poppins',
  },
  colors: {
    ...defaultTheme.colors,
    ...colors,
  },
}

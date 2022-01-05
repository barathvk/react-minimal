import {
  extendTheme,
  withDefaultColorScheme,
  withDefaultProps,
  withDefaultSize,
} from '@chakra-ui/react'
import { generatePalette } from 'palette-by-numbers'

const nuriColors = {
  lilac: '#BEAAFF',
  black: '#2C232E',
  green: '#6E9E96',
  orange: '#FF8C5A',
}
const styles = {
  colors: {
    'nuri-green': generatePalette(nuriColors.green),
    'nuri-orange': generatePalette(nuriColors.orange),
    'nuri-lilac': generatePalette(nuriColors.lilac),
    'nuri-black': generatePalette(nuriColors.black),
  },
  fonts: {
    body: 'Inter',
    heading: 'Inter',
    mono: 'Menlo',
  },
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
    colorScheme: 'red',
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: 2,
        _focus: {
          boxShadow: 'none',
        },
      },
    },
  },
  styles: {
    global: ({ colorMode }) => ({
      'html,body,#root': {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        backgroundColor: colorMode === 'light' ? 'gray.100' : 'gray.700',
        transition: 'ease-in-out background-color 0.3s',
        color: colorMode === 'light' ? 'gray.600' : 'gray.300',
        height: '100vh',
        width: '100vw',
        overflow: 'hidden',
        padding: 0,
        margin: 0,
      },
    }),
  },
}
export const theme = (colorScheme: string) => {
  return extendTheme(
    withDefaultColorScheme({ colorScheme }),
    withDefaultSize({ size: 'sm' }),
    withDefaultProps({
      defaultProps: ({ colorMode }) => ({
        color: colorMode === 'light' ? 'nuri-black.500' : 'gray.100',
      }),
    }),
    styles
  )
}

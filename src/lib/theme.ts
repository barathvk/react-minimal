import {
  extendTheme,
  withDefaultColorScheme,
  withDefaultProps,
  withDefaultSize,
} from '@chakra-ui/react'
import chroma from 'chroma-js'
const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]
const nuriColors = {
  lilac: '#BEAAFF',
  black: '#2C232E',
  green: '#6E9E96',
  orange: '#FF8C5A',
}
const primaryColor = nuriColors.green
export const generateShade = (base: string, level: number) => {
  if (level < 500) {
    return chroma(base)
      .brighten((500 - level) / 250)
      .hex()
  } else if (level > 500) {
    return chroma(base)
      .darken((level - 500) / 250)
      .hex()
  } else {
    return base
  }
}
export const generatePalette = (base: string) => {
  const palette: { [key: number]: string } = {}
  levels.forEach((level) => {
    palette[level] = generateShade(base, level)
  })
  return palette
}
const styles = {
  colors: {
    primary: generatePalette(primaryColor),
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
        backgroundColor: colorMode === 'light' ? 'gray.200' : 'gray.700',
        transition: 'ease-in-out background-color 0.3s',
        color: colorMode === 'light' ? 'gray.700' : 'gray.300',
        height: '100vh',
        width: '100vw',
        overflow: 'hidden',
        padding: 0,
        margin: 0,
      },
    }),
  },
}
export const theme = extendTheme(
  withDefaultColorScheme({ colorScheme: 'primary' }),
  withDefaultSize({ size: 'sm' }),
  withDefaultProps({
    defaultProps: ({ colorMode }) => ({
      color: colorMode === 'light' ? 'gray.700' : 'gray.300',
    }),
  }),
  styles
)

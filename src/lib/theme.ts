import {
  extendTheme,
  withDefaultColorScheme,
  withDefaultProps,
  withDefaultSize,
} from '@chakra-ui/react'

const styles = {
  fonts: {
    body: 'Inter',
    heading: 'Inter',
    mono: 'Menlo',
  },
  config: {
    initialColorMode: 'dark',
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
export const theme = extendTheme(
  withDefaultColorScheme({ colorScheme: 'blue' }),
  withDefaultSize({ size: 'sm' }),
  withDefaultProps({
    defaultProps: ({ colorMode }) => ({
      color: colorMode === 'light' ? 'nuri-black.500' : 'gray.100',
    }),
  }),
  styles
)

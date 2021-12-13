import { render } from 'react-dom'
import React from 'react'
import App from './app'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { theme } from '@/lib/theme'

render(
  <BrowserRouter>
    <ColorModeScript />
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </BrowserRouter>,
  document.getElementById('root')
)

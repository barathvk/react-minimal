import React from 'react'

import { ChakraProvider } from '@chakra-ui/react'

import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { App } from '@/app'
import { theme } from '@/lib/theme'

const root = createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </BrowserRouter>
)

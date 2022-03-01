import React from 'react'

import { ColorModeScript } from '@chakra-ui/react'

import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from './app'
import { NuriProvider } from './hooks/nuri'

render(
  <BrowserRouter>
    <NuriProvider>
      <ColorModeScript />
      <App />
    </NuriProvider>
  </BrowserRouter>,
  document.getElementById('root')
)

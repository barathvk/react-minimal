import { render } from 'react-dom'
import React from 'react'
import App from './app'
import { BrowserRouter } from 'react-router-dom'
import { ColorModeScript } from '@chakra-ui/react'
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

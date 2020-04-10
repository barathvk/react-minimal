import ReactDOM from 'react-dom'
import React from 'react'
import { ThemeProvider, CSSReset, DarkMode } from '@chakra-ui/core'
import App from './components/app'
import { theme } from './lib/theme'
import { HashRouter } from 'react-router-dom'
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <DarkMode>
      <CSSReset />
      <HashRouter>
        <App />
      </HashRouter>
    </DarkMode>
  </ThemeProvider>,
  document.getElementById('root')
)

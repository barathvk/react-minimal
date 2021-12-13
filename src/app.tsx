import React from 'react'
import { AppHeader } from '@c/app-header'
import { Routes, Route } from 'react-router-dom'
import { Home } from '@c/home'
import { ChakraProvider } from '@chakra-ui/react'
import { useNuri } from '@/hooks/nuri'
import { theme } from '@/lib/theme'
const App: React.FC = () => {
  const { colorScheme } = useNuri()
  return (
    <ChakraProvider theme={theme(colorScheme)}>
      <AppHeader />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </ChakraProvider>
  )
}

export default App

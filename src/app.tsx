import React, { useEffect } from 'react'
import { AppHeader } from '@c/app-header'
import { Routes, Route } from 'react-router-dom'
import { Home } from '@c/home'
import { ChakraProvider } from '@chakra-ui/react'
import { useNuri } from '@/hooks/nuri'
import { theme } from '@/lib/theme'
import { Loading } from './components/loading'
const App: React.FC = () => {
  const { colorScheme, auth } = useNuri()
  useEffect(() => {
    if (auth.isInitialized && !auth.isSignedIn) {
      auth.signIn()
    }
  }, [auth])
  return (
    <ChakraProvider theme={theme(colorScheme)}>
      {!auth.isSignedIn && <Loading />}
      {auth.isSignedIn && (
        <React.Fragment>
          <AppHeader />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </React.Fragment>
      )}
    </ChakraProvider>
  )
}

export default App

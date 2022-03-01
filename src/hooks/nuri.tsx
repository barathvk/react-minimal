import React, { useContext, createContext, useState, useEffect } from 'react'

import {
  useGoogleLogin,
  GoogleLoginHookReturnValue,
} from 'react-use-googlelogin'

import { config } from '@/lib/config'

interface INuriContext {
  colorScheme: string
  setColorScheme: (scheme: string) => void
  auth: GoogleLoginHookReturnValue
}

const createExternalContext = <A extends {} | null>() => {
  const ctx = createContext<A | undefined>(undefined)

  const useCtx = () => {
    const contextValue = useContext(ctx)
    if (contextValue === undefined)
      throw new Error('useContext must be inside a Provider with a value')
    return contextValue
  }
  return [useCtx, ctx.Provider] as const
}

const [useNuri, InternalProvider] = createExternalContext<INuriContext>()

export const NuriProvider: React.FC = ({ children }) => {
  const [colorScheme, setColorScheme] = useState<string>(
    localStorage.getItem('colorScheme') || 'nuri-green'
  )
  useEffect(() => {
    if (colorScheme) {
      localStorage.setItem('colorScheme', colorScheme)
    }
  }, [colorScheme])
  const auth = useGoogleLogin({
    uxMode: 'redirect',
    clientId: config.google.clientId,
    scope: config.google.scopes.join(' '),
    hostedDomain: 'bitwala.com',
    persist: true,
  })
  return (
    <InternalProvider value={{ auth, colorScheme, setColorScheme }}>
      {children}
    </InternalProvider>
  )
}
export { useNuri }

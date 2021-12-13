import React, { useContext, createContext, useState, useEffect } from 'react'

interface INuriContext {
  colorScheme: string
  setColorScheme: (scheme: string) => void
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
  return (
    <InternalProvider value={{ colorScheme, setColorScheme }}>
      {children}
    </InternalProvider>
  )
}
export { useNuri }

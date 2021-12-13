import { Stack, IconButton, useColorMode, Spacer } from '@chakra-ui/react'
import React from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
export const AppHeader: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Stack direction="row" spacing={2} alignItems="center" padding={2}>
      <Spacer />
      <IconButton
        aria-label="color-mode"
        size="xs"
        variant="ghost"
        icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
        onClick={toggleColorMode}
      />
    </Stack>
  )
}

import React from 'react'

import { Center, Text, useTheme } from '@chakra-ui/react'

import { Cat } from 'react-kawaii'

import { useNuri } from '@/hooks/nuri'

export const Home: React.FC = () => {
  const { auth, colorScheme } = useNuri()
  const { colors } = useTheme()
  return (
    <Center flex={1} flexDirection="column" gap={8}>
      <Cat size={320} mood="blissful" color={colors[colorScheme][500]} />
      <Text fontSize="3xl">
        Hello {auth.googleUser.profileObj.givenName || 'World'}
      </Text>
    </Center>
  )
}

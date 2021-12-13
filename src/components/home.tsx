import { useNuri } from '@/hooks/nuri'
import { Center, Text, useTheme } from '@chakra-ui/react'
import React from 'react'
import { Cat } from 'react-kawaii'

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

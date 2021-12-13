import { useNuri } from '@/hooks/nuri'
import { Center, Text } from '@chakra-ui/react'
import React from 'react'
import { Cat } from 'react-kawaii'

export const Home: React.FC = () => {
  const { auth } = useNuri()
  return (
    <Center flex={1} flexDirection="column" gap={8}>
      <Cat size={320} mood="blissful" color="orange" />
      <Text fontSize="3xl">
        Hello {auth.googleUser.profileObj.givenName || 'World'}
      </Text>
    </Center>
  )
}

import { Center, Spinner } from '@chakra-ui/react'
import React from 'react'

export const Loading: React.FC = () => {
  return (
    <Center flex={1}>
      <Spinner />
    </Center>
  )
}

import React from 'react'
import { hot } from 'react-hot-loader/root'
import { FillBox, CenteredBox } from './elements/layout'
import { Text } from '@chakra-ui/core'
const App = () => {
  return (
    <FillBox bg="background" color="primary">
      <CenteredBox>
        <Text fontSize="6xl">Hello World!</Text>
      </CenteredBox>
    </FillBox>
  )
}

export default hot(App)

import React, { FunctionComponent } from 'react'
import { Box, BoxProps } from '@chakra-ui/core'
import chroma from 'chroma-js'
import { colors } from '../../lib/theme'
export const CenteredBox: FunctionComponent<BoxProps> = ({
  children,
  ...props
}) => {
  return (
    <FillBox alignItems="center" justifyContent="center" {...props}>
      {children}
    </FillBox>
  )
}

export const FillBox: FunctionComponent<BoxProps> = ({
  children,
  ...props
}) => {
  return (
    <Box display="flex" flex={1} flexDirection="column" {...props}>
      {children}
    </Box>
  )
}

export const PaddedBox: FunctionComponent<BoxProps> = ({
  children,
  ...props
}) => {
  return (
    <CenteredBox
      padding={4}
      border="1x solid primary"
      borderRadius={6}
      flex={0}
      flexDirection="row"
      background="rgba(0,0,0,0.2)"
      {...props}
    >
      {children}
    </CenteredBox>
  )
}

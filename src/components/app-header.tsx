import React from 'react'

import { FaMoon, FaSignOutAlt, FaSun, FaTint } from 'react-icons/fa'
import { GoPrimitiveDot } from 'react-icons/go'

import {
  Stack,
  IconButton,
  useColorMode,
  Spacer,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useTheme,
  Avatar,
  Text,
  Tooltip,
} from '@chakra-ui/react'

import { useNuri } from '@/hooks/nuri'

interface IScheme {
  label: string
  value: string
}
const schemes: IScheme[] = [
  {
    label: 'Orange',
    value: 'nuri-orange',
  },
  {
    label: 'Green',
    value: 'nuri-green',
  },
  {
    label: 'Lilac',
    value: 'nuri-lilac',
  },
  {
    label: 'Blue',
    value: 'blue',
  },
]

export const AppHeader: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const { setColorScheme, auth } = useNuri()
  const { colors } = useTheme()
  return (
    <Stack direction="row" spacing={2} alignItems="center" padding={2}>
      <Spacer />
      <Stack direction="row" spacing={2} alignItems="center">
        <Avatar src={auth.googleUser.profileObj.imageUrl} size="2xs" />
        <Text fontSize="xs">{auth.googleUser.profileObj.givenName}</Text>
        <Tooltip label="Sign out">
          <IconButton
            aria-label="sign-out"
            icon={<FaSignOutAlt />}
            onClick={async () => {
              await auth.signOut()
            }}
            variant="ghost"
            size="xs"
          />
        </Tooltip>
      </Stack>
      <Menu>
        <MenuButton
          as={IconButton}
          size="xs"
          variant="ghost"
          icon={<FaTint />}
        />
        <MenuList>
          {schemes.map((scheme) => (
            <MenuItem
              onClick={() => {
                setColorScheme(scheme.value)
              }}
              key={scheme.value}
              icon={<GoPrimitiveDot color={colors[scheme.value][500]} />}
            >
              {scheme.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
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

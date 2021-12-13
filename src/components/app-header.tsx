import { useNuri } from '@/hooks/nuri'
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
} from '@chakra-ui/react'
import React from 'react'
import { FaMoon, FaSun, FaTint } from 'react-icons/fa'
import { GoPrimitiveDot } from 'react-icons/go'

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
    label: 'Black',
    value: 'nuri-black',
  },
  {
    label: 'Blue',
    value: 'blue',
  },
]

export const AppHeader: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const { setColorScheme } = useNuri()
  const { colors } = useTheme()
  return (
    <Stack direction="row" spacing={2} alignItems="center" padding={2}>
      <Spacer />
      <Menu>
        <MenuButton
          as={IconButton}
          size="sm"
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

import { extendTheme } from '@chakra-ui/react'
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools'

export default extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: mode('fr.background', 'fr.background')(props),
        fontFamily: 'Poppins',
      },
    }),
  },
  semanticTokens: {
    colors: {
      'fr.background': '#FFFFFF',
      'fr.primary': 'blackAlpha.800',
      'fr.secondary': 'red.700'
    },
  },
})
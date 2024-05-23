
import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  styles: {
    global: (props) => ({
      body: {
        bg: mode('gray.900', 'gray.900')(props),
        color: 'whiteAlpha.900',
      },
    }),
  },
});

export default theme;

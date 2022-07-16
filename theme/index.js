// theme.js
import { extendTheme } from "@chakra-ui/react";

// Version 1: Using objects
const theme = extendTheme({
  fonts: {
    heading: `'Share Tech', sans-serif`,
    body: `'Share Tech', sans-serif`,
  },
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: "white.900",
        color: "white",
      },
      // styles for the `a`
      a: {
        color: "teal.500",
        _hover: {
          textDecoration: "underline",
        },
      },
    },
  },
});

export default theme;

/* https://chakra-ui.com/docs/styled-system/theming/customize-theme */

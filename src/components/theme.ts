
// // theme.ts

import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: `'sd prostreet Heading', Impact`,
    bodyTitle: `'Impact Body', Impact`,
    bodyParagraph: `'Oswald Body',  Calibri`,
  },
  initialColorMode: "dark",
  useSystemColorMode: false,

})

export default theme


// // 1. import `extendTheme` function
// import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

// // 2. Add your color mode config
// const config: ThemeConfig = {
//   initialColorMode: "dark",
//   useSystemColorMode: false,
  
// };

// // 3. extend the theme
// const theme = extendTheme({ config });

// export default theme;

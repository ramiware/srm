import {
  ChakraProvider,
  Box,
  Grid,
} from "@chakra-ui/react"

import theme from "./components/theme"
import Fonts from "./components/Fonts"
import Home from "./components/Home"



export const App = () => (
  <ChakraProvider theme={theme}>
    <Fonts />
    <Box textAlign="center"
      textColor='gray.900'
      fontFamily={'body'}
      fontSize={["sm", "md", "lg", "xl"]}
      // bgColor='gray.900'
      bgColor='white'
    >

      <Grid minH="100vh" p={0}>

        <Home></Home>

      </Grid>
    </Box>
  </ChakraProvider>
)

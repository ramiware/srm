import { useEffect } from "react";
import { BrowserRouter, useLocation } from "react-router-dom";
import {
  ChakraProvider,
  Box, Text,
  Grid,
} from "@chakra-ui/react"

import theme from "./components/theme"
import Fonts from "./components/Fonts"
import Home from "./pages/Home"




/***********************************************************************************************************
 * CLASS
 ***********************************************************************************************************/
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  return null;
}

/***********************************************************************************************************
 * CLASS
 ***********************************************************************************************************/
export const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <ChakraProvider theme={theme}>
      <Fonts />
      <Box textAlign="center"
        textColor='gray.900'
        fontFamily={'body'}
        fontSize={["sm", "md", "lg", "xl"]}
        // bgColor='gray.900'
        bgColor='white'
        width={'100%'}
      >

        <Grid minH="100vh" p={0}>
          <Home></Home>

        </Grid>
      </Box>
    </ChakraProvider>
  </BrowserRouter>
)

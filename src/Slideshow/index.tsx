import { Box, Center, Flex, Link, Text, VStack } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

// Hooks
import { useTheme } from "../hooks/useTheme";
import { useBusiness } from "../hooks/useBusiness";

// Slideshow images
import slide1 from "../images/slideshow/srm-banner1-2000x1125.png"
import slide2 from "../images/slideshow/srm-banner2-2000x1125.png"
import slide3 from "../images/slideshow/srm-banner3-2000x1125.png"
import slide4 from "../images/slideshow/srm-banner4-2000x1125.png"

import callToActionBG from "../images/call-to-action/call-to-action-bg-400x60.png";



const Slide = ({ isActive, slide, handleDrag }: any) => {

  const slideImages = [slide1, slide2, slide3, slide4];
  const slideTitles = [
    'TRUSTABLE EXPERTS',
    'MAINTENANCE SERVICE',
    'AUTO REPAIR SERVICE',
    'DIAGNOSTIC SERVICES'];
  const slideDescriptions = [
    'Your Reliable Neighborhood Mechanic with 20+ Years of Experience',
    'Oil Changes, Air Filter Replacement, Spark Plug Replacement',
    'Muffler Repair, Coolant Flush, Tire Maintenance and Repair',
    'Engine Diagnostics, Brake Inspection and Repair'
  ];

  const { fonts } = useTheme();
  const { card } = useBusiness();


  if (isActive) {
    // UI
    return (

      <Box
        transition="1.5s"
        bgImage={slideImages[slide - 1]}
        backgroundPosition={'center'} bgSize={"cover"} backgroundRepeat={"no-repeat"}
        bgColor='black'
        height={['300px', '350px', '500px', '600px']}
        width='100%'
      >

        {/* {slide} */}
        <Flex width={"100%"} height={"100%"} justifyContent={"left"}>
          {/* Vertically Center using <Center> */}
          <Center width='100%' justifyContent={['center', 'center', 'left', 'left']}>

            <VStack pl={['0px', '0px', '100px', '100px']} color='white'>
              {/* TITLE */}
              <Text fontSize={[fonts.BNR_H1_SIZE_S, fonts.BNR_H1_SIZE_S, fonts.BNR_H1_SIZE_L, fonts.BNR_H1_SIZE_L]}
                fontFamily='heading' fontWeight='bold'
                textAlign={['center', 'center', 'left', 'left']}
                width='100%' >
                {slideTitles[slide - 1]}
              </Text>
              {/* DESCRIPTION */}
              <Text fontSize={[fonts.BNR_P_SIZE_S, fonts.BNR_P_SIZE_S, fonts.BNR_P_SIZE_L, fonts.BNR_P_SIZE_L]}
                fontFamily='body'
                textAlign={['center', 'center', 'left', 'left']}
                width='100%'>
                {slideDescriptions[slide - 1]}
              </Text>
              {/* CALL TO ACTION */}

              <Box
                pt={{ base: '10px', md: '15px' }}
                width='100%'>
                <Center width='100%' justifyContent={['center', 'center', 'left', 'left']}>

                  <motion.button
                    whileHover={{
                      scale: 1.2,
                      transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Text
                      fontSize={[fonts.BNR_P_SIZE_S, fonts.BNR_P_SIZE_S, fonts.BNR_P_SIZE_L, fonts.BNR_P_SIZE_L]}
                      fontFamily='body' fontWeight={'bold'} fontStyle='italic'
                      width={['340px', '340px', '400px', '400px']}
                      height={{ base: '45px', md: '60px' }}
                      textAlign={['center', 'center', 'center', 'center']}
                      // bgColor={colors.ACCENT_BODY3}
                      bgImg={callToActionBG} bgRepeat={'no-repeat'} bgSize={'contain'} bgPosition={'center'}
                      pt={['10px', '11px', '15px', '15px']}>
                      <Link href={"Tel:+1" + card.BUS_PHONE1}>
                        CALL US NOW FOR A FREE ESTIMATE
                      </Link>
                    </Text>
                  </motion.button>
                </Center>
              </Box>

            </VStack>

          </Center>
        </Flex>

      </Box>

    );
  }
  return null;
};

const Dots = ({ slides, currentSlide, displayed, setActive }: any) => {

  if (!displayed) return null;

  // UI
  return (
    <Center>
      <Flex>
        {slides.map((slide: any) => {
          return (

            <Box p="3">
              <Box
                h="10px"
                cursor="pointer"
                onClick={() => setActive(slide)}
                w="10px"
                borderRadius="50%"
                transition="1.5s"
                bg={currentSlide === slide ? "blue.500" : "#eee"}

              />
            </Box>
          );
        })}
      </Flex>
    </Center>
  );
};

const SlideShow = ({ autoplay, delay }: any) => {
  const slides = [1, 2, 3, 4];
  const [active, setActive] = useState(1);
  const [seconds, setSeconds] = useState(0);

  const prev = () =>
    setActive(active > 1 ? active - 1 : slides[slides.length - 1]);
  const next = () => setActive(active < slides.length ? active + 1 : 1);

  useEffect(() => {
    if (autoplay) {
      setTimeout(() => {
        setSeconds((seconds) => seconds + 1);
        next();
      }, delay || 5000);
    }
  }, [active, next]);


  // UI
  return (
    <Box width='100%' bgColor={'transparent'}>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
          exit={{ opacity: 0 }}

          key={seconds}
        >
          {slides.map((slide) => {
            return <Slide isActive={active === slide} slide={slide} />;
          })}
        </motion.div>
      </AnimatePresence>
      <Dots
        displayed
        currentSlide={active}
        slides={slides}
        setActive={setActive}
      />
      {/* <p>active: {active} </p> */}


      {/* 
      <Button onClick={prev}>prev</Button>
      <Button onClick={next}>next</Button> */}
    </Box>
  );
};

export default SlideShow;

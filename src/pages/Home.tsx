import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Center,
  Image,
  VStack,
  Text,
  Flex,
  HStack,
  Link,
  Spacer,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  StackDivider,
  IconButton
} from "@chakra-ui/react"
import { HamburgerIcon, StarIcon } from "@chakra-ui/icons";
import { ImPhone, ImLocation } from "react-icons/im";
import { motion } from "framer-motion"

// Hooks
import { useTheme } from "../hooks/useTheme";
import { useBusiness } from "../hooks/useBusiness";
import { useFeature } from "../hooks/useFeature";
import { useInsurance } from "../hooks/useInsurance";
import { useReview } from "../hooks/useReview";
import { useHours } from "../hooks/useHours";
import Slideshow from "../Slideshow";

// Images

// HEADER
import imgHdrToolL from "../images/header/tool-m-image-L-201x75.png"

// SECTION BGS
import bgBlue from "../images/section-bgs/srm-section-blue-bg-2000x1125.png"
import bgRed from "../images/section-bgs/srm-section-red-bg-2000x1125.png"
import bgLightBlue from "../images/section-bgs/srm-section-lightblue-bg-2000x1125.png"
import bgCars from "../images/section-bgs/srm-section-cars-bg-2000x1125.png"


/***********************************************************************************************************
 * CLASS
 ***********************************************************************************************************/
const Home = () => {

  /***********************************************************************************************************
   * CLASS VARIABLES
   ***********************************************************************************************************/

  const { isOpen, onOpen, onClose } = useDisclosure()

  const { colors, fonts, sizes } = useTheme();
  const { logoWhiteTransBG, logoColorTransBG, imgLocationCard1, imgBusiness, card, BUSINESS_TITLE_DESCRIPTION, BUSINESS_ABOUT_DESCRIPTION1, BUSINESS_ABOUT_DESCRIPTION2, BUSINESS_ABOUT_DESCRIPTION3 } = useBusiness();
  const { imgFeatureCard1, featureList, FEATURES_TITLE_DESCRIPTION } = useFeature();
  const { imgInsuranceCard1, imgInsuranceCard2, INSURANCE_TITLE_DESCRIPTION1, INSURANCE_TITLE_DESCRIPTION2, INSURANCE_TITLE_DESCRIPTION3 } = useInsurance();
  const { reviewList, REVIEWS_TITLE_DESCRIPTION } = useReview();
  const { hoursOfOperation } = useHours();

  let currentYear = new Date().getFullYear()


  /***********************************************************************************************************
   * CLASS FUNCTIONS
   ***********************************************************************************************************/

  /////////////////////////////////////////////////
  // Handles opening menu drawer
  /////////////////////////////////////////////////
  function openMenuDrawer() {

    onOpen();
  }


  /***********************************************************************************************************
   * UI
   ***********************************************************************************************************/
  return (
    <Box bgColor='white'>

      {/* HEADER **********************************************************************************************************/}
      <Box
        as="header"
        position="fixed"
        width='100%'
        bgColor={colors.BG_HEADER}
        backdropFilter="saturate(5%) blur(5px)"
        pt={0}>

        <Center>
          <HStack spacing={['0px', '0px', '10px', '40px']}
            height={[sizes.HDR_HEIGHT_S, sizes.HDR_HEIGHT_S, sizes.HDR_HEIGHT_L, sizes.HDR_HEIGHT_L]}
            width='100%'>

            {/* IMAGE TOOL M (DESKTOP ONLY) */}
            <Image display={{ base: "none", md: "flex" }} src={imgHdrToolL} width={[sizes.HDR_TOOL_WIDTH_S, sizes.HDR_TOOL_WIDTH_S, sizes.HDR_TOOL_WIDTH_L, sizes.HDR_TOOL_WIDTH_L]}></Image>

            {/* LOGO IMG/TXT */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.0 }}
            >
              <Link href={card.BUS_WEBSITE}>
                <Image src={logoWhiteTransBG} ml={{ base: '20px', md: '0px' }}
                  width={[sizes.HDR_LOGO_WIDTH_S, sizes.HDR_LOGO_WIDTH_S, sizes.HDR_LOGO_WIDTH_L, sizes.HDR_LOGO_WIDTH_L]} />
              </Link>
            </motion.div>


            {/* BUS INFO (MOB ONLY) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.0 }}
            >
              <HStack display={{ base: "block", md: "none" }}
                fontSize={[fonts.BUS_INFO_SIZE_S, fonts.BUS_INFO_SIZE_S, fonts.BUS_INFO_SIZE_L, fonts.BUS_INFO_SIZE_L]}
                fontWeight={"bold"}
                fontFamily={'heading'}
                color={colors.TXT_HEADER}
                spacing='20px'>

                <Spacer></Spacer>

                {/* PHONE */}
                <HStack spacing='2px'>
                  <ImPhone />
                  <Link href={"Tel:+1" + card.BUS_PHONE1}>{card.BUS_PHONE1}</Link>
                </HStack>
                {/* ADDRESS */}
                <HStack spacing='2px'>
                  <ImLocation />
                  <Text>{card.BUS_ADDRESS}</Text>
                </HStack>
              </HStack>
            </motion.div>

            {/* MOBILE ONLY - PUSH HAMBURGER */}
            <Spacer display={{ base: "block", md: "none" }}></Spacer>

            {/* BUS INFO (DESKTOP ONLY) / NAV (BOTH) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.0 }}
            >
              <VStack spacing='0px' color={colors.TXT_HEADER} fontFamily={'heading'} fontWeight={"bold"} pl='30px'>

                {/* BUS INFO (DESKTOP ONLY) */}
                <HStack display={{ base: "none", md: "flex" }}
                  fontSize={[fonts.BUS_INFO_SIZE_S, fonts.BUS_INFO_SIZE_S, fonts.BUS_INFO_SIZE_L, fonts.BUS_INFO_SIZE_L]}
                  spacing='20px'
                  width='100%'>
                  <Spacer></Spacer>
                  {/* PHONE */}
                  <HStack spacing='4px'>
                    <Text pt={{ md: '4px' }} pr='5px' color={colors.ACCENT_BODY2}>Call us Today!</Text>
                    <ImPhone />
                    <Link pt={{ md: '4px' }} href={"Tel:+1" + card.BUS_PHONE1}>{card.BUS_PHONE1}</Link>
                  </HStack>
                  {/* ADDRESS */}
                  <HStack spacing='4px'>
                    <ImLocation />
                    <Text pt={{ md: '4px' }}>{card.BUS_ADDRESS}</Text>
                  </HStack>
                </HStack>

                {/* DESKTOP NAV */}
                <HStack display={{ base: "none", md: "block" }} >
                  <Spacer></Spacer>

                  <Breadcrumb separator='-' width='100%'
                    fontSize={[fonts.NAV_SIZE_S, fonts.NAV_SIZE_S, fonts.NAV_SIZE_L, fonts.NAV_SIZE_L]}>

                    <BreadcrumbItem>
                      <motion.button
                        whileHover={{
                          scale: 1.2,
                          transition: { duration: 0.2 },
                        }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <BreadcrumbLink href='#'>HOME</BreadcrumbLink>
                      </motion.button>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                      <motion.button
                        whileHover={{
                          scale: 1.2,
                          transition: { duration: 0.2 },
                        }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <BreadcrumbLink href='#about'>ABOUT</BreadcrumbLink>
                      </motion.button>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                      <motion.button
                        whileHover={{
                          scale: 1.2,
                          transition: { duration: 0.2 },
                        }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <BreadcrumbLink href='#services'>SERVICES</BreadcrumbLink>
                      </motion.button>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                      <motion.button
                        whileHover={{
                          scale: 1.2,
                          transition: { duration: 0.2 },
                        }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <BreadcrumbLink href='#insurance'>INSURANCE CLAIMS</BreadcrumbLink>
                      </motion.button>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                      <motion.button
                        whileHover={{
                          scale: 1.2,
                          transition: { duration: 0.2 },
                        }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <BreadcrumbLink href='#reviews'>REVIEWS</BreadcrumbLink>
                      </motion.button>
                    </BreadcrumbItem>


                    <BreadcrumbItem>
                      <motion.button
                        whileHover={{
                          scale: 1.2,
                          transition: { duration: 0.2 },
                        }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <BreadcrumbLink href='#location'>LOCATION</BreadcrumbLink>
                      </motion.button>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                      <motion.button
                        whileHover={{
                          scale: 1.2,
                          transition: { duration: 0.2 },
                        }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <BreadcrumbLink href='#hours'>HOURS</BreadcrumbLink>
                      </motion.button>
                    </BreadcrumbItem>

                  </Breadcrumb>
                </HStack>

                {/* MOBILE NAV BUTTON (HAMBURGER) */}
                <HStack display={{ base: "block", md: "none" }}>
                  <Spacer></Spacer>
                  <IconButton
                    bgColor={colors.BG_HEADER}
                    color={colors.TXT_HEADER}
                    aria-label='Menu'
                    icon={<HamburgerIcon />}
                    onClick={openMenuDrawer}></IconButton>
                </HStack>

              </VStack>
            </motion.div>

          </HStack>
        </Center>

      </Box>


      {/* MOBILE NAV DRAWER **********************************************************************************************/}
      <Drawer onClose={onClose} isOpen={isOpen} placement='right' size={'xs'}>
        <DrawerOverlay />
        <DrawerContent bgColor={colors.BG_HEADER} color={colors.TXT_HEADER}>
          <DrawerCloseButton />

          {/* DRAWER BODY */}
          <DrawerBody
            fontSize={[fonts.NAV_SIZE_S, fonts.NAV_SIZE_S, fonts.NAV_SIZE_L, fonts.NAV_SIZE_L]}
            fontFamily={'heading'} fontWeight={"bold"}
            pt='40px' m='0px' mt='0px'>

            <VStack divider={<StackDivider borderColor='gray.200' />}
              spacing={'10px'}
              align='stretch'>
              <Box></Box>
              <Box>
                <Link href='#'>HOME</Link>
              </Box>
              <Box>
                <Link href='#about'>ABOUT</Link>
              </Box>
              <Box>
                <Link href='#services'>SERVICES</Link>
              </Box>
              <Box>
                <Link href='#insurance'>INSURANCE CLAIMS</Link>
              </Box>
              <Box>
                <Link href='#reviews'>REVIEWS</Link>
              </Box>
              <Box>
                <Link href='#location'>LOCATION</Link>
              </Box>
              <Box>
                <Link href='#hours'>HOURS</Link>
              </Box>

              <Box></Box>
            </VStack>

          </DrawerBody>
        </DrawerContent>
      </Drawer>




      {/* MAIN ***********************************************************************************************************/}
      <Box as="main" mt={[sizes.HDR_HEIGHT_S, sizes.HDR_HEIGHT_S, sizes.HDR_HEIGHT_L, sizes.HDR_HEIGHT_L]}>
        <Slideshow autoplay={true} />



        {/* ABOUT */}
        <Box id='about' height='100px' backgroundColor='white'></Box> {/* VERTICAL SPACER */}
        {/* <Box bgImage={bgRed} bgPos={"center"} bgRepeat={'no-repeat'} bgSize={'cover'}> */}
        <Box>
          <VStack p={5}>

            {/* TITLE */}
            <VStack pb={5}>
              <motion.div
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.2 },
                }}
              >
                <Text color={colors.TXT_BODY1} fontFamily={'heading'} fontWeight={'bold'}
                  fontSize={[fonts.H1_SIZE_S, fonts.H1_SIZE_S, fonts.H1_SIZE_L, fonts.H1_SIZE_L]}>
                  ABOUT
                </Text>
              </motion.div>


              <Flex m={0} gap={['5px', '5px', '10px', '15px']} flexWrap={"wrap"}
                width={[sizes.GRID_FLEX_SIZE_S, sizes.GRID_FLEX_SIZE_M, sizes.GRID_FLEX_SIZE_L, sizes.GRID_FLEX_SIZE_XL]}
                justifyContent={'left'}>
                <Box color={colors.TXT_BODY1} fontFamily={'body'} textAlign={'left'}
                  fontSize={[fonts.H2_SIZE_S, fonts.H2_SIZE_S, fonts.H2_SIZE_L, fonts.H2_SIZE_L]}>
                  <Text pt='30px'>
                    {BUSINESS_ABOUT_DESCRIPTION1}
                  </Text>
                  <Text pt='30px'>
                    {BUSINESS_ABOUT_DESCRIPTION2}
                  </Text>
                  <Text pt='30px'>
                    {BUSINESS_ABOUT_DESCRIPTION3}
                  </Text>
                </Box>
              </Flex>
            </VStack>

          </VStack>
        </Box>






        {/* SERVICES */}
        <Box id='services' height='100px' backgroundColor='white'></Box> {/* VERTICAL SPACER */}
        <Box bgImage={bgRed} bgPos={"center"} bgRepeat={'no-repeat'} bgSize={'cover'}>
          <VStack p={5}>

            {/* TITLE */}
            <VStack pb={5}>
              <motion.div
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.2 },
                }}
              >
                <Text color={colors.TXT_BODY1} fontFamily={'heading'} fontWeight={'bold'}
                  fontSize={[fonts.H1_SIZE_S, fonts.H1_SIZE_S, fonts.H1_SIZE_L, fonts.H1_SIZE_L]}>
                  SERVICES
                </Text>
              </motion.div>
              <Text color={colors.TXT_BODY1} fontFamily={'body'}
                fontSize={[fonts.H2_SIZE_S, fonts.H2_SIZE_S, fonts.H2_SIZE_L, fonts.H2_SIZE_L]}>
                {FEATURES_TITLE_DESCRIPTION}
              </Text>
            </VStack>


            {/* GRID WIDTH */}
            <Flex m={0} gap={['5px', '5px', '10px', '15px']} flexWrap={"wrap"}
              width={[sizes.GRID_FLEX_SIZE_S, sizes.GRID_FLEX_SIZE_M, sizes.GRID_FLEX_SIZE_L, sizes.GRID_FLEX_SIZE_XL]}
              justifyContent={'center'}>

              {/* SERVICES MAPPING */}
              {featureList.map((feat, index: any) => (

                // BG IMAGE
                <Box
                  p='0px'
                  boxShadow='dark-lg' rounded='md'
                  bgImage={imgFeatureCard1} bgPosition={'center'} bgSize={'cover'} bgRepeat={'no-repeat'}
                  width={[sizes.FEAT_W_S, sizes.FEAT_W_M, sizes.FEAT_W_L, sizes.FEAT_W_XL]}
                  height={[sizes.FEAT_H_S, sizes.FEAT_H_M, sizes.FEAT_H_L, sizes.FEAT_H_XL]}>

                  {/* CARD */}
                  <VStack
                    // border='4px' borderColor={colors.TXT_BODY1}
                    // bgImage={imgServGeoBG} bgPosition={'center'} bgSize={'cover'} bgRepeat={'no-repeat'}
                    width={[sizes.FEAT_W_S, sizes.FEAT_W_M, sizes.FEAT_W_L, sizes.FEAT_W_XL]}
                    height={[sizes.FEAT_H_S, sizes.FEAT_H_M, sizes.FEAT_H_L, sizes.FEAT_H_XL]}
                  >

                    {/* IMAGE */}
                    <Center>
                      <motion.div
                        whileHover={{
                          scale: 1.2,
                          transition: { duration: 0.2 },
                        }}
                      >
                        <Image mt={'20px'} src={feat.thumb}
                          boxSize={[sizes.FEAT_IMG_W_S, sizes.FEAT_IMG_W_M, sizes.FEAT_IMG_W_L, sizes.FEAT_IMG_W_XL]}
                          objectFit={'contain'}></Image>
                      </motion.div>
                    </Center>
                    {/* SERVICE TITLE */}
                    <Text color='white' fontFamily={'heading'} pt='20px' pl='12px' pr='12px'
                      fontSize={[fonts.FEAT_TITLE_FONT_SIZE_S, fonts.FEAT_TITLE_FONT_SIZE_M, fonts.FEAT_TITLE_FONT_SIZE_L, fonts.FEAT_TITLE_FONT_SIZE_XL]}
                      textAlign={'center'}>
                      {feat.title}
                    </Text>

                  </VStack>

                </Box>

              ))}

            </Flex>

          </VStack>
        </Box>



        {/* INSURANCE */}
        <Box id='insurance' height='100px' backgroundColor='white'></Box> {/* VERTICAL SPACER */}
        <Box>
          <VStack p={5}>

            {/* TITLE */}
            <VStack pb={5}>
              <motion.div
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.2 },
                }}
              >
                <Text color={colors.TXT_BODY1} fontFamily={'heading'} fontWeight={'bold'}
                  fontSize={[fonts.H1_SIZE_S, fonts.H1_SIZE_S, fonts.H1_SIZE_L, fonts.H1_SIZE_L]}>
                  INSURANCE CLAIMS
                </Text>
              </motion.div>
            </VStack>

            {/* GRID WIDTH */}
            <Flex m={0} gap={['5px', '5px', '10px', '15px']} flexWrap={"wrap"}
              width={[sizes.GRID_FLEX_SIZE_S, sizes.GRID_FLEX_SIZE_M, sizes.GRID_FLEX_SIZE_L, sizes.GRID_FLEX_SIZE_XL]}
              justifyContent={'center'}>

              {/* IMAGES */}
              <Box
                p='0px'
                boxShadow='dark-lg' rounded='md'
                bgImage={imgInsuranceCard1} bgPosition={'center'} bgSize={'cover'} bgRepeat={'no-repeat'}
                width={[sizes.FEAT_W_S, sizes.FEAT_W_M, sizes.FEAT_W_L, sizes.FEAT_W_XL]}
                height={[sizes.FEAT_H_S, sizes.FEAT_H_M, sizes.FEAT_H_L, sizes.FEAT_H_XL]} />
              <Box
                p='0px'
                boxShadow='dark-lg' rounded='md'
                bgImage={imgInsuranceCard2} bgPosition={'center'} bgSize={'cover'} bgRepeat={'no-repeat'}
                width={[sizes.FEAT_W_S, sizes.FEAT_W_M, sizes.FEAT_W_L, sizes.FEAT_W_XL]}
                height={[sizes.FEAT_H_S, sizes.FEAT_H_M, sizes.FEAT_H_L, sizes.FEAT_H_XL]} />

              {/* DESCRIPTION */}
              <Box color={colors.TXT_BODY1} fontFamily={'body'} textAlign={'left'}
                fontSize={[fonts.H2_SIZE_S, fonts.H2_SIZE_S, fonts.H2_SIZE_L, fonts.H2_SIZE_L]}>
                <Text pt='30px'>
                  {INSURANCE_TITLE_DESCRIPTION1}
                </Text>
                <Text pt='30px'>
                  {INSURANCE_TITLE_DESCRIPTION2}
                </Text>
                <Text pt='30px'>
                  {INSURANCE_TITLE_DESCRIPTION3}
                </Text>
              </Box>

            </Flex>


          </VStack>
        </Box>




        {/* REVIEWS */}
        <Box id='reviews' height='100px' backgroundColor='white'></Box> {/* VERTICAL SPACER */}
        <Box bgImage={bgBlue} bgPos={"center"} bgRepeat={'no-repeat'} bgSize={'cover'}>
          <VStack p={5}>

            {/* TITLE */}
            <VStack pb={5}>
              <motion.div
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.2 },
                }}
              >
                <Text color={colors.ACCENT_BODY1} fontFamily={'heading'} fontWeight={'bold'}
                  fontSize={[fonts.H1_SIZE_S, fonts.H1_SIZE_S, fonts.H1_SIZE_L, fonts.H1_SIZE_L]}>
                  CUSTOMER REVIEWS
                </Text>
              </motion.div>
              <Text color={colors.TXT_BODY1} fontFamily={'body'}
                fontSize={[fonts.H2_SIZE_S, fonts.H2_SIZE_S, fonts.H2_SIZE_L, fonts.H2_SIZE_L]}>
                {REVIEWS_TITLE_DESCRIPTION}
              </Text>
            </VStack>

            {/* SEE ALL REVIEWS */}
            <Box
              pb={{ base: '10px', md: '15px' }}
              width='100%'>
              <Center width='100%' justifyContent={['center', 'center', 'center', 'center']}>

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
                    bgColor={colors.ACCENT_BODY1}
                    color='white'
                    border={'1px solid black'}
                    borderRadius={'xl'}
                    boxShadow='dark-lg' rounded='md'
                    // bgImg={callToActionBG} bgRepeat={'no-repeat'} bgSize={'contain'} bgPosition={'center'}
                    pt={['10px', '11px', '15px', '15px']}>
                    <Link href={card.REVIEWS} target="_blank">
                      SEE ALL OUR REVIEWS
                    </Link>
                  </Text>
                </motion.button>
              </Center>
            </Box>


            {/* GRID WIDTH */}
            <Flex m={0} gap={['5px', '5px', '10px', '15px']} flexWrap={"wrap"}
              width={[sizes.GRID_FLEX_SIZE_S, sizes.GRID_FLEX_SIZE_M, sizes.GRID_FLEX_SIZE_L, sizes.GRID_FLEX_SIZE_XL]}
              justifyContent={'center'}>

              {/* REVIEWS MAPPING */}
              {reviewList.map((review, index) => (

                <motion.div
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.9 }}
                >

                  {/* BG IMAGE */}
                  <Box p='0px'
                    width={[sizes.REVIEW_W_S, sizes.REVIEW_W_M, sizes.REVIEW_W_L, sizes.REVIEW_W_XL]}
                    height={[sizes.REVIEW_H_S, sizes.REVIEW_H_M, sizes.REVIEW_H_L, sizes.REVIEW_H_XL]}>

                    {/* CARD */}
                    <VStack key={index} border='4px' borderColor={colors.ACCENT_BODY1} bgColor='white'
                      // bgImage={imgServBG}
                      width={[sizes.REVIEW_W_S, sizes.REVIEW_W_M, sizes.REVIEW_W_L, sizes.REVIEW_W_XL]}
                      height={[sizes.REVIEW_H_S, sizes.REVIEW_H_M, sizes.REVIEW_H_L, sizes.REVIEW_H_XL]}
                    >

                      {/* PROFILE IMAGE */}
                      <Center>
                        <Image mt={'20px'} src={review.thumb}
                          boxSize={[sizes.REVIEW_PROF_IMG_W_S, sizes.REVIEW_PROF_IMG_W_M, sizes.REVIEW_PROF_IMG_W_L, sizes.REVIEW_PROF_IMG_W_XL]}
                          objectFit={'contain'}></Image>
                      </Center>
                      {/* NAME */}
                      <HStack>
                        <Image src={review.sourceThumb} boxSize={[sizes.REVIEW_SOURCE_IMG_W_S, sizes.REVIEW_SOURCE_IMG_W_M, sizes.REVIEW_SOURCE_IMG_W_L, sizes.REVIEW_SOURCE_IMG_W_XL]} />
                        <Text width='100%' fontWeight={'bold'} fontSize={[fonts.REVIEW_NAME_SIZE_S, fonts.REVIEW_NAME_SIZE_S, fonts.REVIEW_NAME_SIZE_L, fonts.REVIEW_NAME_SIZE_L]}>
                          {review.name}
                        </Text>
                      </HStack>
                      {/* RATING */}
                      <Box display='flex' mt='2' alignItems='center'>
                        {/* STARS/RATING */}
                        {Array(5)
                          .fill('')
                          .map((_, i) => (
                            <StarIcon
                              key={i}
                              color={i < review.rating ? colors.ACCENT_BODY1 : 'gray.300'}
                            />
                          ))}
                        {/* # OF REVIEWS */}
                        <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                          {review.reviewCount} reviews
                        </Box>
                      </Box>

                      {/* COMMENT */}
                      <Text align='left' p='10px'
                        fontFamily={'body'}
                        fontStyle={'italic'}
                        fontSize={[fonts.REVIEW_COMMENT_SIZE_S, fonts.REVIEW_COMMENT_SIZE_S, fonts.REVIEW_COMMENT_SIZE_L, fonts.REVIEW_COMMENT_SIZE_L]}>
                        {review.comment.substring(0, 220)} ...
                        <Link href={review.link} target='_blank' fontWeight={'bold'}
                          color={colors.ACCENT_BODY1}
                          fontSize={[fonts.REVIEW_COMMENT_SIZE_S, fonts.REVIEW_COMMENT_SIZE_S, fonts.REVIEW_COMMENT_SIZE_L, fonts.REVIEW_COMMENT_SIZE_L]}>
                          Full Review
                        </Link>
                      </Text>

                    </VStack>
                  </Box>
                </motion.div>
              ))}

            </Flex>


          </VStack>
        </Box>







        {/* LOCATION */}
        <Box id='location' height='100px' backgroundColor='white'></Box> {/* VERTICAL SPACER */}
        <Box bgImage={bgLightBlue} bgPos={"center"} bgRepeat={'no-repeat'} bgSize={'cover'}>
          <VStack p={5}>

            {/* TITLE */}
            <VStack pb={5}>
              <motion.div
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.2 },
                }}
              >
                <Text color={colors.TXT_BODY1} fontFamily={'heading'} fontWeight={'bold'}
                  fontSize={[fonts.H1_SIZE_S, fonts.H1_SIZE_S, fonts.H1_SIZE_L, fonts.H1_SIZE_L]}>
                  LOCATION
                </Text>
              </motion.div>
              <Text color={colors.TXT_BODY1} fontFamily={'body'}
                fontSize={[fonts.H2_SIZE_S, fonts.H2_SIZE_S, fonts.H2_SIZE_L, fonts.H2_SIZE_L]}>
                {BUSINESS_TITLE_DESCRIPTION}
              </Text>
            </VStack>


            {/* DIRECTIONS */}
            <Box
              pb={{ base: '10px', md: '15px' }}
              width='100%'>
              <Center width='100%' justifyContent={['center', 'center', 'center', 'center']}>

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
                    bgColor={colors.ACCENT_BODY3}
                    color='white'
                    border={'1px solid black'}
                    borderRadius={'xl'}
                    boxShadow='dark-lg' rounded='md'
                    // bgImg={callToActionBG} bgRepeat={'no-repeat'} bgSize={'contain'} bgPosition={'center'}
                    pt={['10px', '11px', '15px', '15px']}>
                    <Link href={card.DIRECTIONS} target="_blank">
                      CLICK HERE FOR DRIVING DIRECTIONS
                    </Link>
                  </Text>
                </motion.button>
              </Center>
            </Box>

            {/* CONTENT */}
            <Box display={{ md: "flex" }}
              color={colors.TXT_HEADER}
              width={[sizes.GRID_FLEX_SIZE_S, sizes.GRID_FLEX_SIZE_M, sizes.GRID_FLEX_SIZE_L, sizes.GRID_FLEX_SIZE_XL]}
              height={[sizes.LOCATION_H_S, sizes.LOCATION_H_M, sizes.LOCATION_H_L, sizes.LOCATION_H_XL]}>
              {/* ADDRESS */}
              <Box flexShrink={0}
                bgImage={imgLocationCard1} bgPosition={'center'} bgSize={'cover'} bgRepeat={'no-repeat'}
                fontFamily='body'
                fontSize={[fonts.ADDRESS_SIZE_S, fonts.ADDRESS_SIZE_S, fonts.ADDRESS_SIZE_L, fonts.ADDRESS_SIZE_L]}
                width={[sizes.ADDR_W_S, sizes.ADDR_W_M, sizes.ADDR_W_L, sizes.ADDR_W_XL]}
                height={[sizes.ADDR_H_S, sizes.ADDR_H_M, sizes.ADDR_H_L, sizes.ADDR_H_XL]}
                pt={['30px', '30px', '40px', '40px']}>
                {/* Business Name */}
                <Text fontWeight='bold' pb='10px'>{card.BUS_NAME}</Text>
                {/* Address */}
                <Text>{card.BUS_ADDRESS}</Text>
                <Text>{card.BUS_CITY_PROV}</Text>
                <Text>{card.BUS_POSTAL_CODE}</Text>

                {/* Phone */}
                <Text pt='10px'>Rami: <Link color={colors.ACCENT_BODY2} href={"Tel:+1" + card.BUS_PHONE1}>{card.BUS_PHONE1}</Link></Text>
                <Text>Front Desk: <Link color={colors.ACCENT_BODY2} href={"Tel:+1" + card.BUS_PHONE1}>{card.BUS_PHONE2}</Link></Text>
                <Text>Office: <Link color={colors.ACCENT_BODY2} href={"Tel:+1" + card.BUS_PHONE1}>{card.BUS_PHONE3}</Link></Text>


                {/* Image */}
                <Image pt='20px'
                  borderRadius="lg"
                  // width={{ md: 40 }}
                  src={imgBusiness} />
              </Box>
              {/* MAP */}
              <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }} bgColor={colors.ACCENT_BODY1}
                width='100%'
                height={[sizes.MAP_H_S, sizes.MAP_H_M, sizes.MAP_H_L, sizes.MAP_H_XL]}>
                <iframe title="safer ride motors address" src={card.LOCATION} loading="lazy" width='100%' height='100%'></iframe>
              </Box>
            </Box>

          </VStack>
        </Box>





        {/* HOURS */}
        <Box id='hours' height='100px' backgroundColor='white'></Box> {/* VERTICAL SPACER */}
        <Box bgImage={bgCars} bgPos={"center"} bgRepeat={'no-repeat'} bgSize={'cover'}>
          {/* <Box> */}
          <VStack p={5}>

            {/* TITLE */}
            <VStack pb={5}>
              <motion.div
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.2 },
                }}
              >
                <Text color={colors.TXT_BODY1} fontFamily={'heading'} fontWeight={'bold'}
                  fontSize={[fonts.H1_SIZE_S, fonts.H1_SIZE_S, fonts.H1_SIZE_L, fonts.H1_SIZE_L]}>
                  HOURS
                </Text>
              </motion.div>
              {/* <Text color={colors.TXT_BODY1} fontFamily={'body'}
                fontSize={[fonts.H2_SIZE_S, fonts.H2_SIZE_S, fonts.H2_SIZE_L, fonts.H2_SIZE_L]}>
                {FEATURES_TITLE_DESCRIPTION}
              </Text> */}
            </VStack>

            <Box fontFamily='heading'>
              <Text fontSize={[fonts.H2_SIZE_S, fonts.H2_SIZE_S, fonts.H2_SIZE_L, fonts.H2_SIZE_L]}>
                HOURS OF OPERATION
              </Text>
            </Box>

            <Box
              height={[sizes.HOURS_H_S, sizes.HOURS_H_M, sizes.HOURS_H_L, sizes.HOURS_H_XL]}
              width={[sizes.GRID_FLEX_SIZE_S, sizes.GRID_FLEX_SIZE_M, sizes.GRID_FLEX_SIZE_L, sizes.GRID_FLEX_SIZE_XL]}
              justifyContent={'center'}
              fontSize={[fonts.HOURS_SIZE_S, fonts.HOURS_SIZE_S, fonts.HOURS_SIZE_L, fonts.HOURS_SIZE_L]}>
              <Center>
                <motion.div
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.2 },
                  }}
                >
                  <VStack
                    mt={['0px', '0px', '10px', '10px']}
                    bgColor={colors.BG_HEADER}
                    color={colors.TXT_HEADER}
                    opacity={'0.9'}
                    border='4px'
                    borderStyle='solid'
                    borderColor={colors.ACCENT_BODY1}
                    borderRadius={'xl'}
                    p={['10px', '10px', '20px', '20px']}
                    spacing='0px'>

                    {hoursOfOperation.map((day, index) => (
                      <>
                        <HStack spacing='20px' fontFamily='body' justifyContent={'center'}>
                          <Text align='left'
                            width={[sizes.HOURS_W_S, sizes.HOURS_W_M, sizes.HOURS_W_L, sizes.HOURS_W_XL]}>
                            {day.day}
                          </Text>

                          <Text align='right'
                            width={[sizes.HOURS_W_S, sizes.HOURS_W_M, sizes.HOURS_W_L, sizes.HOURS_W_XL]}>
                            {day.open}{day.close}
                          </Text>
                        </HStack>
                      </>
                    ))}
                  </VStack>
                </motion.div>
              </Center>
            </Box>

          </VStack>
        </Box>
        {/* EXTEND HEIGHT / FUTURE SECTION */}
        <Flex width={"100vw"} height={"100px"} justifyContent={"left"}>
          {/* Vertically Center using <Center> */}
          <Center width='100%' justifyContent='center'>
            {/* <Text>test</Text> */}
          </Center>
        </Flex>





        {/* FOOTER */}

        <Flex flexWrap="wrap"
          width={"100%"}
          height={"210px"}
          justifyContent={"center"}
          bgColor={colors.BG_HEADER}
          color={colors.TXT_HEADER}
          fontFamily={'heading'}
          fontSize={[fonts.FOOTER_SIZE_S, fonts.FOOTER_SIZE_S, fonts.FOOTER_SIZE_L, fonts.FOOTER_SIZE_L]}>

          <HStack spacing='10px' justifyContent={'left'}
            width={[sizes.GRID_FLEX_SIZE_S, sizes.GRID_FLEX_SIZE_M, sizes.GRID_FLEX_SIZE_L, sizes.GRID_FLEX_SIZE_XL]}>

            {/* LOGO */}
            <Image ml='20px' width={[sizes.FTR_LOGO_WIDTH_S, sizes.FTR_LOGO_WIDTH_M, sizes.HDR_LOGO_WIDTH_L, sizes.FTR_LOGO_WIDTH_XL]}
              src={logoColorTransBG}></Image>


            {/* BUS INFO */}
            <VStack textAlign={'left'} width='100%' height='100%' pt='50px' pl='20px' spacing='0px'>
              <Text width='100%' fontWeight='bold' pb='10px'>{card.BUS_NAME}</Text>
              <Text width='100%'>
                <Link href={"Tel:+1" + card.BUS_PHONE1}>Call: {card.BUS_PHONE1}</Link>
              </Text>
              <Text width='100%'>{card.BUS_ADDRESS}</Text>
              <Text width='100%'>{card.BUS_CITY_PROV}</Text>
              <Text width='100%'>{card.BUS_POSTAL_CODE}</Text>
              <Text width='100%'>CANADA</Text>
            </VStack>


            {/* NAV */}
            <VStack textAlign={'left'} width='100%' height='100%' pt='50px' spacing='0px'>
              <Text width='100%' fontWeight='bold' pb='10px'>INFORMATION</Text>
              <Link width='100%' href={"#about"}>About Us</Link>
              <Link width='100%' href={"#services"}>Services</Link>
              <Link width='100%' href={"#insurance"}>Insurance</Link>
              <Link width='100%' href={"#reviews"}>Reviews</Link>
              <Link width='100%' href={"#location"}>Location</Link>
              <Link width='100%' href={"#hours"}>Hours</Link>
            </VStack>


          </HStack>

        </Flex>
        <Text pb='20px' pt='20px'
          bgColor={colors.BG_HEADER} color={colors.TXT_HEADER}
          fontFamily={'heading'}
          fontSize={[fonts.FOOTER_SIZE_S, fonts.FOOTER_SIZE_S, fonts.FOOTER_SIZE_L, fonts.FOOTER_SIZE_L]}>
          Copyright © {currentYear} {card.BUS_NAME}. All rights reserved. | Designed by  <Link href={"https://www.ramiware.com"} target="_blank">Ramiware</Link>
        </Text>

      </Box>
    </Box>

  );
};
export default Home;



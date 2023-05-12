import { useEffect, useState } from "react";
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
  Button,
  FormControl,
  Input,
  HStack,
  FormLabel,
  Link,
  Spacer,
  useDisclosure,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay
} from "@chakra-ui/react"

// Hooks
import { useProducts } from "../hooks/useProducts";

// npm i emailjs-com
import { send } from 'emailjs-com';

// Images
import logoTransBg from "../images/logo-trans-bg.png"
import canadaFlag from "../images/canada-flag.png"
import grille from "../images/grille.png"

// Social media images
import instagram from "../images/instagram.png"
import mail from "../images/mail.png"
import phone from "../images/phone.png"

// Slideshow images
import slide1 from "../images/slideshow/m4_f82_white_front.jpg"
import slide2 from "../images/slideshow/bmw-m4-sky-blue.jpeg"
import slide3 from "../images/slideshow/lsb-f30.jpg"
import slide4 from "../images/slideshow/bmw-m4-black.jpg"

/***********************************************************************************************************
 * CONSTANTS
 ***********************************************************************************************************/

const slideImages = [slide1, slide2, slide3, slide4];
const slideText = ['DOUBLE SLATS', 'GLOSS BLACK FINISH', 'BMW 3 SERIES GRILLZ', 'M3/M4 STYLE'];
const SLIDE_DURATION = 3000;

const EMAIL_SERVICE_ID = 'service_tu97jv8';
const EMAIL_TEMPLATE_ID = 'template_f30grillz';
const EMAIL_API_KEY = 'Kk7OM6714fl9k01aL';

const MESSAGE_SENT = 'Thank you for contacting us. Your message has been sent!';
const MESSAGE_FAILED = 'Your message has not been sent. Please try again or try calling us.';

/***********************************************************************************************************
 * CLASS
 ***********************************************************************************************************/
const Home = () => {

  /***********************************************************************************************************
   * CLASS CONSTANTS
   ***********************************************************************************************************/
  const PROD_FLEX_SIZE_S = '335px';
  const PROD_FLEX_SIZE_M = '335px';
  const PROD_FLEX_SIZE_L = '1245px';
  const PROD_FLEX_SIZE_XL = '1245px';

  const PROD_IMG_SIZE_S = '165px';
  const PROD_IMG_SIZE_M = '165px';
  const PROD_IMG_SIZE_L = '300px';
  const PROD_IMG_SIZE_XL = '300px';

  const PROD_TITLE_FONT_SIZE_S = '18px';
  const PROD_TITLE_FONT_SIZE_M = '18px';
  const PROD_TITLE_FONT_SIZE_L = '25px';
  const PROD_TITLE_FONT_SIZE_XL = '25px';

  const PROD_HDR_DESC_FONT_SIZE_S = '28px';
  const PROD_HDR_DESC_FONT_SIZE_M = '28px';
  const PROD_HDR_DESC_FONT_SIZE_L = '35px';
  const PROD_HDR_DESC_FONT_SIZE_XL = '35px';

  const PROD_DET_DESC_FONT_SIZE_S = '10px';
  const PROD_DET_DESC_FONT_SIZE_M = '10px';
  const PROD_DET_DESC_FONT_SIZE_L = '12px';
  const PROD_DET_DESC_FONT_SIZE_XL = '12px';

  /***********************************************************************************************************
   * CLASS VARIABLES
   ***********************************************************************************************************/
  const { f30Products } = useProducts();
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [currProdIndex, setCurrProdIndex] = useState(0);

  const [slideshowTimer, setSlideshowTimer] = useState<any>(null);

  const [messageStatus, setMessageStatus] = useState('');

  const [toSend, setToSend] = useState({
    from_name: '',
    reply_to: '',
    to_name: '',
    message: '',
  });

  /// Validation consts
  const [formErrorName, setFormErrorName] = useState(false);
  const [formErrorEmail, setFormErrorEmail] = useState(false);
  const [formErrorMessage, setFormErrorMessage] = useState(false);

  /***********************************************************************************************************
   * CLASS FUNCTIONS
   ***********************************************************************************************************/

  /// SHOW PROD DETAILS
  function showProductDetailsPopUp(prodIndex: number) {
    setCurrProdIndex(prodIndex);
    onOpen();
  }

  /// SUBMIT FORM
  const onSubmit = (e: { preventDefault: () => void; }) => {

    // Required Fields
    console.log("Validating...");

    if (toSend.from_name === '' ||
      toSend.reply_to === '' ||
      toSend.message === '') {
      setFormErrorName(toSend.from_name === '' ? true : false);
      setFormErrorEmail(toSend.reply_to === '' ? true : false);
      setFormErrorMessage(toSend.message === '' ? true : false);
      console.log("Fields are missing");
      return;
    }


    console.log("Sending..");
    e.preventDefault();
    e.preventDefault();

    send(
      EMAIL_SERVICE_ID,
      EMAIL_TEMPLATE_ID,
      toSend,
      EMAIL_API_KEY
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setMessageStatus('SUCCESS');
      })
      .catch((err) => {
        console.log('FAILED...', err);
        setMessageStatus('FAILED');
      });
  };

  /// CHANGE HANDLER: FORM
  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    console.log("handleChange");
    setMessageStatus('');
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  /***********************************************************************************************************
   * USE EFFECTS
   ***********************************************************************************************************/
  /// INTIALIZE SLIDESHOW DURATION
  useEffect(() => {
    setSlideshowTimer(slideImages.length);
  }, [])

  /// SLIDESHOW TIMER
  useEffect(() => {
    // console.log("slideshowTimer", slideshowTimer);
    // exit early when we reach 0
    // if (!slideshowTimer) return;

    // loop when we reach 0 
    if (!slideshowTimer) {
      setSlideshowTimer(slideImages.length);
    }

    // save intervalId to clear the interval when the
    // component re-renders
    const intervalId = setInterval(() => {
      setSlideshowTimer(slideshowTimer - 1);
    }, SLIDE_DURATION);

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId);
    // add timeLeft as a dependency to re-rerun the effect
    // when we update it
  }, [slideshowTimer]);

  // CURRENT PROD INDEX
  useEffect(() => {
  }, [currProdIndex]);

  /// FORM VALIDATION
  useEffect(() => {
  }, [formErrorName, formErrorEmail, formErrorMessage]);

  /// FORM SUBMIT RESULT MESSAGE
  useEffect(() => {
  }, [messageStatus]);

  /***********************************************************************************************************
   * UI
   ***********************************************************************************************************/
  return (
    <Box bgColor='transparent'>

      {/* HEADER */}
      <Box
        as="header"
        position="fixed"
        backgroundColor="rgba(49, 130, 206, 0.9)"
        backdropFilter="saturate(5%) blur(5px)"
        width="100%"
        pt={0}>
        <VStack>
          <Flex width={'100%'}>
            <Spacer></Spacer>
            <Text color='white' fontFamily={'bodyParagraph'} fontSize={['14px', '14px', '15px', '15px']} pt={['2px', '2px', '10px', '10px']} pr={'10px'}>(647) 365-5329</Text>
            <Image src={canadaFlag} width={["25px", "25px", "40px", "40px"]} mr={'10px'}></Image>
          </Flex>
          <Link href='https://www.f30grillz.com'><Image src={logoTransBg} width={["180px", "200px", "200px", "200px"]}></Image></Link>

          <Breadcrumb separator='-' fontFamily={'heading'} fontSize={['15px', '20px', '22px', '26px']} color='white'>

            <BreadcrumbItem>
              <BreadcrumbLink href='#grillz'>THE GRILLZ</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href='#prices'>PRODUCTS</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href='#faq'>FAQ</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href='#contact'>CONTACT</BreadcrumbLink>
            </BreadcrumbItem>

          </Breadcrumb>
        </VStack>
      </Box >

      {/* MAIN */}
      <Box as="main" mt={["160px", "160px", "160px", "160px"]} >

        {/* SLIDESHOW */}
        <Box backgroundImage={slideImages[slideshowTimer - 1]} backgroundPosition={'center'} backgroundSize={"cover"} height={['300px', '350px', '400px', '600px']} p={0} m={0} >
          <Center>
            <Box bgColor='blue.500' mt={['10px', '40px', '80px', '80px']} p={['1px']}
              width={['330px', '330px', '360px', '400px']}
              height={['50px', '50px', '60px', '65px']}>
              <Text fontFamily={'bodyTitle'} fontSize={['30px', '30px', '35px', '40px']} color='white'>{slideText[slideshowTimer - 1]}</Text>
            </Box>
          </Center>
        </Box>

        {/* THE GRILLZ */}
        <Box id='grillz' height='200px' backgroundColor='gray.800'></Box>
        <Box backgroundColor='gray.800'>
          <Center>
            <VStack p={5} width={['100%', '100%', '60%', '60%']}>

              <Box pb={5}>
                <Text color='blue.500' fontFamily={'bodyTitle'} fontSize={['45px', '50px', '55px', '65px']}>THE GRILLZ</Text>
              </Box>

              <Box pb={3} m={0} width={'100%'}>
                <Text color='blue.500' fontFamily={'bodyTitle'} fontSize={['25px', '25px', '30px', '35px']} textAlign={'left'}>GLOSS BLACK</Text>
                <Text color='white' fontFamily={'bodyParagraph'} fontSize={'14px'} textAlign={'left'}>The gloss black finish steps up your front end game.</Text>
              </Box>

              <Box pb={3} m={0} width={'100%'}>
                <Text color='blue.500' fontFamily={'bodyTitle'} fontSize={['25px', '25px', '30px', '35px']} textAlign={'left'}>PERFECT FITMENT</Text>
                <Text color='white' fontFamily={'bodyParagraph'} fontSize={'14px'} textAlign={'left'}>2012-2018 F30 F31 F35 3-Series fitment.
                  No gaps, no missing tabs. Fits like a glove.</Text>
              </Box>

              <Box pb={3} m={0} width={'100%'}>
                <Text color='blue.500' fontFamily={'bodyTitle'} fontSize={['25px', '25px', '30px', '35px']} textAlign={'left'}>M3/M4 STYLE</Text>
                <Text color='white' fontFamily={'bodyParagraph'} fontSize={'14px'} textAlign={'left'}>Need we say more?</Text>
              </Box>

              <Image pb={3} src={grille} width={['250px']}></Image>

              <Box pb={3} m={0} width={'100%'}>
                <Text color='blue.500' fontFamily={'bodyTitle'} fontSize={['25px', '25px', '30px', '35px']} textAlign={'right'}>DOUBLE SLATS</Text>
                <Text color='white' fontFamily={'bodyParagraph'} fontSize={'14px'} textAlign={'right'}>Double slats for that aggressive look, while allowing ample airflow through to your engine.</Text>
              </Box>

              <Box pb={3} m={0} width={'100%'}>
                <Text color='blue.500' fontFamily={'bodyTitle'} fontSize={['25px', '25px', '30px', '35px']} textAlign={'right'}>PREMIUM QUALITY</Text>
                <Text color='white' fontFamily={'bodyParagraph'} fontSize={'14px'} textAlign={'right'}>Machine measured and finished with premium materials without a premium price.</Text>
              </Box>

              <Box pb={3} m={0} width={'100%'}>
                <Text color='blue.500' fontFamily={'bodyTitle'} fontSize={['25px', '25px', '30px', '35px']} textAlign={'right'}>NON-INVASIVE INSTALLATION</Text>
                <Text color='white' fontFamily={'bodyParagraph'} fontSize={'14px'} textAlign={'right'}>No lift required. Mobile installation available in the Greater Toronto Area.</Text>
              </Box>

            </VStack>
          </Center>
        </Box>

        {/* PRODUCTS */}
        <Box id='prices' height='200px' backgroundColor='gray.800'></Box>
        <Box backgroundColor='#15171a'>
          <VStack p={5}>

            <Box pb={5}>
              <Text color='white' fontFamily={'bodyTitle'} fontSize={['45px', '50px', '55px', '65px']}>PRODUCTS</Text>
            </Box>

            <Center>
              <Flex m={0} gap={['5px', '5px', '10px', '15px']} flexWrap={"wrap"} width={[PROD_FLEX_SIZE_S, PROD_FLEX_SIZE_M, PROD_FLEX_SIZE_L, PROD_FLEX_SIZE_XL]} bgColor='gray.800'>

                {/* PRODUCT MAPPING */}
                {f30Products.map((f30Prods, index) => (
                  <Box backgroundColor={'white'} p='5px' border={"2px"} borderColor={'white'} maxW={[PROD_IMG_SIZE_S, PROD_IMG_SIZE_M, PROD_IMG_SIZE_L, PROD_IMG_SIZE_XL]}>
                    <Image pb={3} src={f30Prods.thumb} objectFit={'contain'} boxSize={[PROD_IMG_SIZE_S, PROD_IMG_SIZE_M, PROD_IMG_SIZE_L, PROD_IMG_SIZE_XL]}
                      onClick={() => showProductDetailsPopUp(index)}></Image>

                    <Spacer></Spacer>

                    <Text color='black' fontFamily={'bodyTitle'} fontSize={[PROD_TITLE_FONT_SIZE_S, PROD_TITLE_FONT_SIZE_M, PROD_TITLE_FONT_SIZE_L, PROD_TITLE_FONT_SIZE_XL]} textAlign={'center'}>{f30Prods.title}</Text>

                    <VStack bgColor='#3182ce' color='white' fontFamily={'bodyParagraph'}
                      fontSize={[PROD_TITLE_FONT_SIZE_S, PROD_TITLE_FONT_SIZE_M, PROD_TITLE_FONT_SIZE_L, PROD_TITLE_FONT_SIZE_XL]}>
                      <Text>{f30Prods.price}</Text>
                      <Text><Link target="_blank" href={f30Prods.linkURL}>{f30Prods.linkText}</Link></Text>
                    </VStack>
                  </Box>
                ))}

              </Flex>
            </Center>

          </VStack>
        </Box>

        {/* PRODUCT POP UP MODAL */}
        <Modal onClose={onClose} isOpen={isOpen} size={["sm", "md", "xl", "2xl"]} isCentered>
          <ModalOverlay bg='blackAlpha.100'
            backdropFilter='blur(10px) hue-rotate(0deg)' />
          <ModalContent bgColor='white' color='black'>
            {/* <ModalHeader>{f30Products[currProdIndex].title}</ModalHeader> */}
            <ModalCloseButton />
            <ModalBody>
              <HStack>
                <Image pb={3} src={f30Products[currProdIndex].thumb} objectFit={'contain'} boxSize={[PROD_IMG_SIZE_M, PROD_IMG_SIZE_M, PROD_IMG_SIZE_L, PROD_IMG_SIZE_XL]}
                  onClick={onOpen}></Image>

                <VStack align='left' color='black'>
                  {/* TITLE */}
                  <Text fontSize={[PROD_HDR_DESC_FONT_SIZE_S, PROD_HDR_DESC_FONT_SIZE_M, PROD_HDR_DESC_FONT_SIZE_L, PROD_HDR_DESC_FONT_SIZE_XL]} fontFamily={'bodyTitle'}>{f30Products[currProdIndex].title}</Text>
                  {/* PRICE */}
                  <Text fontSize={[PROD_HDR_DESC_FONT_SIZE_S, PROD_HDR_DESC_FONT_SIZE_M, PROD_HDR_DESC_FONT_SIZE_L, PROD_HDR_DESC_FONT_SIZE_XL]} fontFamily={'bodyParagraph'}>{f30Products[currProdIndex].price}</Text>
                  {/* LINK */}
                  <Text fontSize={[PROD_HDR_DESC_FONT_SIZE_S, PROD_HDR_DESC_FONT_SIZE_M, PROD_HDR_DESC_FONT_SIZE_L, PROD_HDR_DESC_FONT_SIZE_XL]} fontFamily={'bodyTitle'}
                    color='white' bgColor='#3182ce' align='center'>
                    <Link target="_blank" href={f30Products[currProdIndex].linkURL}>{f30Products[currProdIndex].linkText}</Link>
                  </Text>
                  <Text fontSize={[PROD_DET_DESC_FONT_SIZE_S, PROD_DET_DESC_FONT_SIZE_M, PROD_DET_DESC_FONT_SIZE_L, PROD_DET_DESC_FONT_SIZE_XL]}>{f30Products[currProdIndex].descLine1}</Text>
                  <Text fontSize={[PROD_DET_DESC_FONT_SIZE_S, PROD_DET_DESC_FONT_SIZE_M, PROD_DET_DESC_FONT_SIZE_L, PROD_DET_DESC_FONT_SIZE_XL]}>{f30Products[currProdIndex].descLine2}</Text>
                  <Text fontSize={[PROD_DET_DESC_FONT_SIZE_S, PROD_DET_DESC_FONT_SIZE_M, PROD_DET_DESC_FONT_SIZE_L, PROD_DET_DESC_FONT_SIZE_XL]}>{f30Products[currProdIndex].descLine3}</Text>
                </VStack>



              </HStack>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>





        {/* FAQ */}
        <Box id='faq' height='200px' backgroundColor='#15171a'></Box>
        <Box backgroundColor='gray.800'>
          <VStack p={5}>

            <Box pb={5}>
              <Text color='blue.500' fontFamily={'bodyTitle'} fontSize={['45px', '50px', '55px', '65px']}>FAQ</Text>
            </Box>

            <Box pb={3} m={0} width={'100%'}>
              <Text color='blue.500' fontFamily={'bodyTitle'} fontSize={['25px', '25px', '30px', '35px']} textAlign={'left'}>Do you offer shipping?</Text>
              <Text color='white' fontFamily={'bodyParagraph'} fontSize={'14px'} textAlign={'left'}>We do not offer shipping on our grills, however all of our recommended products can be purchased through our Amazon partnershipi and shipped directly to your door.</Text>
            </Box>

            <Box pb={3} m={0} width={'100%'}>
              <Text color='blue.500' fontFamily={'bodyTitle'} fontSize={['25px', '25px', '30px', '35px']} textAlign={'left'}>Do you need to remove my bumper to install the grills?</Text>
              <Text color='white' fontFamily={'bodyParagraph'} fontSize={'14px'} textAlign={'left'}>The installation does not require bumper removal. Installation can be done on the spot and takes about 20 minutes. We strongly recommend letting us do the swap for you to avoid breaking the tabs on the grills, or breaking the inserts on your bumper.</Text>
            </Box>

            <Box pb={3} m={0} width={'100%'}>
              <Text color='blue.500' fontFamily={'bodyTitle'} fontSize={['25px', '25px', '30px', '35px']} textAlign={'left'}>Will these fit my car?</Text>
              <Text color='white' fontFamily={'bodyParagraph'} fontSize={'14px'} textAlign={'left'}>Our grills fit all F30, F31, and F35 BMWs. Basically, if you have a 3-series made between 2012-2018, they will fit like a glove.</Text>
            </Box>

            <Box pb={3} m={0} width={'100%'}>
              <Text color='blue.500' fontFamily={'bodyTitle'} fontSize={['25px', '25px', '30px', '35px']} textAlign={'left'}>What's the difference between F30 Grillz and grills on Amazon?</Text>
              <Text color='white' fontFamily={'bodyParagraph'} fontSize={'14px'} textAlign={'left'}>Simply put, our grills are better quality. The plastic on our grills is stronger and the slats are slightly thicker. We have the Amazon grills and can show you the difference.</Text>
            </Box>

          </VStack>
        </Box>


        {/* CONTACT */}
        <Box id='contact' backgroundColor='#15171a'>
          <VStack p={5}>

            <Box pb={0}>
              <Text color='white' fontFamily={'bodyTitle'} fontSize={['45px', '50px', '55px', '65px']}>CONTACT US</Text>
            </Box>

            <Center>
              <VStack>

                <Box p={'20px'} backgroundColor='gray.800'>
                  {messageStatus === '' && (
                    <>
                      <FormControl onSubmit={onSubmit} isRequired>
                        <VStack align={'left'}>

                          {/* NAME */}
                          <FormLabel fontFamily={'bodyParagraph'} mb={'0px'} color='white'>Name</FormLabel>
                          <Input
                            type='text'
                            name='from_name'
                            placeholder='Enter your name'
                            value={toSend.from_name}
                            onChange={handleChange}
                            backgroundColor='white'
                            isInvalid={formErrorName}
                            width={['300px', '300px', '400px', '400px']}
                          />
                          {formErrorName === true && (
                            <>
                              <Text fontFamily={'bodyParagraph'} fontSize={'12px'} color={'red.400'} textAlign={'left'}>Name is required</Text>
                            </>
                          )}

                          {/* EMAIL */}
                          <FormLabel fontFamily={'bodyParagraph'} color='white' pt={'15px'}>Email</FormLabel>
                          <Input
                            type='email'
                            name='reply_to'
                            placeholder='Enter your email'
                            value={toSend.reply_to}
                            onChange={handleChange}
                            backgroundColor='white'
                            isInvalid={formErrorEmail}
                            width={['300px', '300px', '400px', '400px']}
                          />
                          {formErrorEmail === true && (
                            <>
                              <Text fontFamily={'bodyParagraph'} fontSize={'12px'} color={'red.400'} textAlign={'left'}>Email is required</Text>
                            </>
                          )}

                          {/* <Input
                          type='text'
                          name='to_name'
                          placeholder='to name'
                          value={toSend.to_name}
                          onChange={handleChange}
                          backgroundColor='white'
                        /> */}

                          {/* MESSAGE */}
                          <FormLabel fontFamily={'bodyParagraph'} color='white' pt={'15px'}>Message</FormLabel>
                          <Input
                            type='text'
                            name='message'
                            placeholder='Enter your message'
                            value={toSend.message}
                            onChange={handleChange}
                            backgroundColor='white'
                            isInvalid={formErrorMessage}
                            width={['300px', '300px', '400px', '400px']}
                          />
                          {formErrorMessage === true && (
                            <>
                              <Text fontFamily={'bodyParagraph'} fontSize={'12px'} color={'red.400'} textAlign={'left'}>Message is required</Text>
                            </>
                          )}

                          {/* BUTTON */}
                          <Box pt={'15px'} width={'100%'}>
                            <Button type='submit' onClick={onSubmit} colorScheme={'blue'} fontFamily={'bodyParagraph'} width={'100%'}>Submit</Button>
                          </Box>
                        </VStack>
                      </FormControl>
                    </>
                  )}

                  {/* MESSAGE STATUS */}
                  {messageStatus === 'SUCCESS' && (
                    <>
                      <Text color='#3182ce'>{MESSAGE_SENT}</Text>
                    </>
                  )}
                  {messageStatus === 'FAILED' && (
                    <>
                      <Text color='#3182ce'>{MESSAGE_FAILED}</Text>
                    </>
                  )}

                </Box>

                {/* CONTACT SOCIALS */}
                <HStack pt={'30px'}>
                  <Box maxW={['170px', '200px', '300px', '400px']}>
                    <Center>
                      <VStack>
                        <Image pb={3} src={mail} objectFit={'contain'} boxSize={'40px'}></Image>
                        <Text color='white' fontFamily={'bodyTitle'} fontSize={['18px', '25px', '25px', '25px']} textAlign={'center'}>info@f30grillz.com</Text>
                      </VStack>
                    </Center>
                  </Box>

                  <Box width={'15px'}></Box>
                  <Box maxW={['170px', '200px', '300px', '400px']}>
                    <Center>
                      <VStack>
                        <Image pb={3} src={instagram} objectFit={'contain'} boxSize={'40px'}></Image>
                        <Text color='white' fontFamily={'bodyTitle'} fontSize={['18px', '25px', '25px', '25px']} textAlign={'center'}>F30GRILLZ</Text>
                      </VStack>
                    </Center>
                  </Box>

                  <Box width={'15px'}></Box>

                  <Box maxW={['170px', '200px', '300px', '400px']}>
                    <Center>
                      <VStack>
                        <Image pb={3} src={phone} objectFit={'contain'} boxSize={'40px'}></Image>
                        <Text color='white' fontFamily={'bodyTitle'} fontSize={['18px', '25px', '25px', '25px']} textAlign={'center'}>(647) 365-5329</Text>
                      </VStack>
                    </Center>
                  </Box>
                </HStack>

              </VStack>
            </Center>

          </VStack>

        </Box>



        {/* FOOTER */}
        <Box backgroundColor='#3182ce' color='white' fontFamily={'bodyParagraph'} fontSize={'12px'} p={'14px'}>
          <Text>@f30grillz - sales@f30grillz.com - 647-365-5329</Text>
          <Text>
            © F30 GRILLZ 2020 - 2023 TORONTO, ONTARIO, CANADA</Text>
        </Box>

      </Box>
    </Box>

  );
};
export default Home;



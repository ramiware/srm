import ScrollToTop from "react-scroll-to-top";
import { FaChevronUp } from "react-icons/fa";


// hooks
import { useTheme } from "../../hooks/useTheme";

// assets



/***********************************************************************************************************
 * CLASS
 ***********************************************************************************************************/
const ScrollToTopButton = () => {

  const { colors, } = useTheme();

  /***********************************************************************************************************
   * CLASS FUNCTIONS
   ***********************************************************************************************************/


  /***********************************************************************************************************
   * UI
   ***********************************************************************************************************/
  return (
    <ScrollToTop
      component={<FaChevronUp style={{ paddingLeft: '9px', paddingBottom: '2px', color: 'white' }} size='30px' />}
      style={{
        backgroundColor: colors.ACCENT_BODY1,
        fontWeight: 'bold',
        fontFamily: 'heading'
      }} smooth color={'white'} />
  );

};
export default ScrollToTopButton;
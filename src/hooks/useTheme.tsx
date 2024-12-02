export function useTheme() {


  const BMW_RED = '#EB2636'; // bmw red,
  const BMW_BLUE_DARK = '#00558F'; // bmw dark blue
  const BMW_BLUE_LIGHT = '#8DCBFF'; // bmw light blue
  const BMW_GRAY = '#282828'; // bmw dark gray

  const colors = {
    // HEADER
    BG_HEADER: BMW_GRAY,
    TXT_HEADER: 'white',

    // BODY
    BG_BODY1: 'white',
    TXT_BODY1: BMW_GRAY,
    ACCENT_BODY1: BMW_BLUE_DARK,
    ACCENT_BODY2: BMW_BLUE_LIGHT,
    ACCENT_BODY3: BMW_RED,
  }

  const fonts = {
    // HEADER
    BUS_INFO_SIZE_L: '13px',
    BUS_INFO_SIZE_S: '11px',

    NAV_SIZE_L: '18px', // Desktop nav
    NAV_SIZE_S: '16px', // Mobile nav

    //BANNER
    BNR_H1_SIZE_L: '30px',
    BNR_H1_SIZE_S: '22px',

    BNR_P_SIZE_L: '18px',
    BNR_P_SIZE_S: '14px',

    // SECTION TITLES
    H1_SIZE_L: '30px',
    H1_SIZE_S: '22px',

    // SECTION DESCRIPTIONS
    H2_SIZE_L: '18px',
    H2_SIZE_S: '16px',

    // FEATURES
    FEAT_TITLE_FONT_SIZE_S: '14px',
    FEAT_TITLE_FONT_SIZE_M: '14px',
    FEAT_TITLE_FONT_SIZE_L: '23px',
    FEAT_TITLE_FONT_SIZE_XL: '23px',

    // REVIEW NAME
    REVIEW_NAME_SIZE_L: '16px',
    REVIEW_NAME_SIZE_S: '13px',

    // REVIEW COMMENT
    REVIEW_COMMENT_SIZE_L: '16px',
    REVIEW_COMMENT_SIZE_S: '14px',

    // ADDRESS
    ADDRESS_SIZE_L: '16px',
    ADDRESS_SIZE_S: '14px',

    // HOURS
    HOURS_SIZE_L: '20px',
    HOURS_SIZE_S: '14px',

    FOOTER_SIZE_L: '14px',
    FOOTER_SIZE_S: '11px'
  }

  const sizes = {
    // HEADER
    HDR_HEIGHT_S: '75px',
    HDR_HEIGHT_L: '100px',

    HDR_TOOL_WIDTH_S: '150px',
    HDR_TOOL_WIDTH_L: '201px',

    HDR_LOGO_WIDTH_S: '140px',
    HDR_LOGO_WIDTH_L: '225px',


    // GRIDS
    GRID_FLEX_SIZE_S: '100%',
    GRID_FLEX_SIZE_M: '100%',
    GRID_FLEX_SIZE_L: '1245px',
    GRID_FLEX_SIZE_XL: '1245px',

    // FEATURES
    // Sizing
    FEAT_W_S: '165px',
    FEAT_W_M: '165px',
    FEAT_W_L: '300px',
    FEAT_W_XL: '300px',
    FEAT_H_S: '165px',
    FEAT_H_M: '165px',
    FEAT_H_L: '350px',
    FEAT_H_XL: '350px',

    // Images
    FEAT_IMG_W_S: '60px',
    FEAT_IMG_W_M: '60px',
    FEAT_IMG_W_L: '200px',
    FEAT_IMG_W_XL: '200px',

    // REVIEWS
    // Sizing
    REVIEW_W_S: '350px',
    REVIEW_W_M: '350px',
    REVIEW_W_L: '300px',
    REVIEW_W_XL: '300px',
    REVIEW_H_S: '320px',
    REVIEW_H_M: '320px',
    REVIEW_H_L: '390px',
    REVIEW_H_XL: '390px',

    // Profile Image
    REVIEW_PROF_IMG_W_S: '48px',
    REVIEW_PROF_IMG_W_M: '48px',
    REVIEW_PROF_IMG_W_L: '48px',
    REVIEW_PROF_IMG_W_XL: '48px',

    // Source Image
    REVIEW_SOURCE_IMG_W_S: '24px',
    REVIEW_SOURCE_IMG_W_M: '24px',
    REVIEW_SOURCE_IMG_W_L: '24px',
    REVIEW_SOURCE_IMG_W_XL: '24px',




    // LOCATION
    // Sizing
    LOCATION_H_S: '800px',
    LOCATION_H_M: '800px',
    LOCATION_H_L: '500px',
    LOCATION_H_XL: '600px',

    // Address
    ADDR_W_S: '100%',
    ADDR_W_M: '100%',
    ADDR_W_L: '480px',
    ADDR_W_XL: '480px',

    ADDR_H_S: '450px',
    ADDR_H_M: '450px',
    ADDR_H_L: '500px',
    ADDR_H_XL: '600px',

    // Address
    MAP_H_S: '350px',
    MAP_H_M: '350px',
    MAP_H_L: '500px',
    MAP_H_XL: '600px',




    // HOURS
    // Sizing
    HOURS_W_S: '125px',
    HOURS_W_M: '125px',
    HOURS_W_L: '150px',
    HOURS_W_XL: '200px',

    HOURS_H_S: '200px',
    HOURS_H_M: '200px',
    HOURS_H_L: '350px',
    HOURS_H_XL: '350px',


    // FOOTER

    FTR_LOGO_WIDTH_S: '100px',
    FTR_LOGO_WIDTH_M: '200px',
    FTR_LOGO_WIDTH_L: '280px',
    FTR_LOGO_WIDTH_XL: '280px',


  }




  return { colors, fonts, sizes }
};
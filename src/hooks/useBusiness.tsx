// LOGO
import logoWhiteTransBG from "../images/logo/srm-logo-white-2488x1048.png"
import logoColorTransBG from "../images/logo/srm-logo-color-2488x1048.png"

// LOCATION
import imgLocationCard1 from "../images/card-bgs/srm-card-bg-redstripe-800x1000.png"

// SHOP
import imgBusiness from "../images/shop/outdoor-shot.png"

export function useBusiness() {


  const BUSINESS_TITLE_DESCRIPTION = "Conveniently located minutes from the 401 or DVP. Drop by today for your automobile needs.";

  const BUSINESS_ABOUT_DESCRIPTION1 =
    "In the midst of the global pandemic, despite the challenges posed for businesses, we opened our doors to our community—Safe Ride Motors, a mechanic shop with over 20 years of experience " +
    "bringing a wealth of automotive knowledge and trust to our community. ";
  const BUSINESS_ABOUT_DESCRIPTION2 =
    "Safe Ride Motors quickly established itself as a go-to destination for car owners seeking quality service and a personalized touch. " +
    "Our team, with decades of collective experience, showcases a deep understanding of various vehicle models and a commitment to customer satisfaction. " +
    "Our mechanics at Safe Ride Motors don't just fix cars; we build lasting relationships with our clients, fostering a sense of community and trust that extends beyond the garage.";
  const BUSINESS_ABOUT_DESCRIPTION3 =
    "The reputation of Safe Ride Motors continues to grow as word spreads about our dedication to excellence and community support.";

  const card = {

    BUS_WEBSITE: 'https://www.saferidemotors.com',
    BUS_NAME: 'SAFE RIDE MOTORS',
    BUS_EMAIL: 'saferide97@gmail.com',
    BUS_PHONE1: '(647) 292-4705',
    BUS_PHONE2: '(416) 750-9730',
    BUS_PHONE3: '(416) 751-4307',
    BUS_ADDRESS: '20 Sherry Road, Unit #3',
    BUS_CITY_PROV: 'Scarborough, ON',
    BUS_POSTAL_CODE: 'M1L 2J9',
    LOCATION: "https://www.google.com/maps/embed/v1/place?q=Safe+Ride+Motors,+Sherry+Road,+Scarborough,+ON,+Canada&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8",
    DIRECTIONS: "https://maps.google.com/maps/dir//Safe+Ride+Motors+20+Sherry+Rd+Unit+3+Scarborough,+ON+M1L+2J9/@43.7241039,-79.2838619,17z/data=!4m5!4m4!1m0!1m2!1m1!1s0x89d4cf34e5bb3d7d:0x2fa2ef53cedcfe33",
    REVIEWS: "https://www.google.ca/maps/place/Safe+Ride+Motors/@43.7241039,-79.2864368,17z/data=!4m8!3m7!1s0x89d4cf34e5bb3d7d:0x2fa2ef53cedcfe33!8m2!3d43.7241039!4d-79.2838619!9m1!1b1!16s%2Fg%2F11fv4t6lh5?entry=ttu"

  }


  return { logoWhiteTransBG, logoColorTransBG, imgLocationCard1, imgBusiness, card, BUSINESS_TITLE_DESCRIPTION, BUSINESS_ABOUT_DESCRIPTION1, BUSINESS_ABOUT_DESCRIPTION2, BUSINESS_ABOUT_DESCRIPTION3 }
};
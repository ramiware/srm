import grillePreview from "../images/grille-preview.png"
import mirrorCapPreview from "../images/mirror-caps-preview.jpg"
import installs from "../images/grille-install.png"
import meguiarsCompound from "../images/meguiars-compound.jpg"
import meguiarsPolish from "../images/meguiars-polish.jpg"
import meguiarsWax from "../images/meguiars-wax.jpg"
import plateCoversClear from "../images/plate-covers-clear.jpg"
import plateCoversSmoked from "../images/plate-covers-smoked.jpg"

const RECOMMENDED_PRODUCT_DESC = "Recommended product. We only recommend products that we have used and regard as high quality. We do the research so you don't have to.";
const RECOMMENDED_BUY_NOW = "Buy now thanks to our Amazon partnership and have it delivered directly to your door.";

const F30_BUY_NOW = "Call us now to order yours 647-365-5329";

type Product = {
  id: string,
  thumb: string,
  title: string,
  price: string,
  linkText: string,
  linkURL: string,
  descLine1: string,
  descLine2: string,
  descLine3: string
}

const prod1: Product = {
  id: '1',
  thumb: grillePreview,
  title: "3-SERIES GLOSS BLACK GRILL",
  price: "$60",
  linkText: "Call Now",
  linkURL: "tel:+16473655329",
  descLine1: "Gloss Black Dual Slat Grills (Set)",
  descLine2: "Fits 2012-18 BMW 3-Series F30/F31/F35",
  descLine3: F30_BUY_NOW
}

const prod2: Product = {
  id: '2',
  thumb: mirrorCapPreview,
  title: "3-SERIES GLOSS BLACK MIRROR CAPS",
  price: "$80",
  linkText: "Call Now",
  linkURL: "tel:+16473655329",
  descLine1: "Gloss Black M3 Style Mirror Caps (Set)",
  descLine2: "Fits 2012-18 BMW 3-Series F30/F31/F35",
  descLine3: F30_BUY_NOW
}

const prod3: Product = {
  id: '3',
  thumb: installs,
  title: "GRILL/MIRROR CAP INSTALLATION",
  price: "$30",
  linkText: "Call Now",
  linkURL: "tel:+16473655329",
  descLine1: "No lift required. Mobile installation available in the Greater Toronto Area.",
  descLine2: "We do installations for all BMW body types.",
  descLine3: F30_BUY_NOW
}

const prod4: Product = {
  id: '4',
  thumb: meguiarsCompound,
  title: "MEGUIAR'S COMPOUND",
  price: "$14",
  linkText: "Buy Now",
  linkURL: "https://amzn.to/3HYPB3C",
  descLine1: RECOMMENDED_PRODUCT_DESC,
  descLine2: "Step 1 of 3 - Meguiar's Ultimate Compound - Oxidation, Swirl Marks, Water Spots and Scratches Remover",
  descLine3: RECOMMENDED_BUY_NOW
}

const prod5: Product = {
  id: '5',
  thumb: meguiarsPolish,
  title: "MEGUIAR'S POLISH",
  price: "$14",
  linkText: "Buy Now",
  linkURL: "https://amzn.to/3HZKEr6",
  descLine1: RECOMMENDED_PRODUCT_DESC,
  descLine2: "Step 2 of 3 - Meguiar's Ultimate Polish - Prepare The Surface for Car Wax",
  descLine3: RECOMMENDED_BUY_NOW
}

const prod6: Product = {
  id: '6',
  thumb: meguiarsWax,
  title: "MEGUIAR'S WAX",
  price: "$43",
  linkText: "Buy Now",
  linkURL: "https://amzn.to/42SLvlz",
  descLine1: RECOMMENDED_PRODUCT_DESC,
  descLine2: "Step 3 of 3 - Meguiar's Ultimate Liquid Wax. The final step to seal the deal and protect your paint.",
  descLine3: RECOMMENDED_BUY_NOW
}

const prod7: Product = {
  id: '7',
  thumb: plateCoversClear,
  title: "PLATE COVER'S - CLEAR",
  price: "$18",
  linkText: "Buy Now",
  linkURL: "https://amzn.to/42mxP2h",
  descLine1: RECOMMENDED_PRODUCT_DESC,
  descLine2: "Buy It Now With Confidence: This Quality License Plate Shields Combo will keep your license plates safe from sunlight 100% and we guarantee satisfaction with a 100% lifetime money back guarantee.",
  descLine3: RECOMMENDED_BUY_NOW
}

const prod8: Product = {
  id: '8',
  thumb: plateCoversSmoked,
  title: "PLATE COVER'S - SMOKED",
  price: "$18",
  linkText: "Buy Now",
  linkURL: "https://amzn.to/3VXnGXj",
  descLine1: RECOMMENDED_PRODUCT_DESC,
  descLine2: "Buy It Now With Confidence: This Quality License Plate Shields Combo will keep your license plates safe from sunlight 100% and we guarantee satisfaction with a 100% lifetime money back guarantee.",
  descLine3: RECOMMENDED_BUY_NOW
}


export function useProducts() {

  const f30Products: Product[] = [];
  f30Products.push(prod1);
  f30Products.push(prod2);
  f30Products.push(prod3);
  f30Products.push(prod4);
  f30Products.push(prod5);
  f30Products.push(prod6);
  f30Products.push(prod7);
  f30Products.push(prod8);

  return { f30Products: f30Products }
};
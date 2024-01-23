import { useBusiness } from "../hooks/useBusiness";

import imgFeature1 from "../images/services/oil-1000x1000.png"
import imgFeature2 from "../images/services/air-filter-1000x1000.png"
import imgFeature3 from "../images/services/spark-plug-1000x1000.png"
import imgFeature4 from "../images/services/muffler-1000x1000.png"
import imgFeature5 from "../images/services/coolant-1000x1000.png"
import imgFeature6 from "../images/services/tire-1000x1000.png"
import imgFeature7 from "../images/services/engine-1000x1000.png"
import imgFeature8 from "../images/services/brake-1000x1000.png"

export const useFeature = () => {

  const FEATURES_TITLE_DESCRIPTION = "We offer a wide range of services for all makes and models in order to keep your automobile fully serviced and functional.";
  const { card } = useBusiness();

  type Feature = {
    id: string,
    thumb: string,
    title: string,
    description: string,
    price: string,
    linkText: string,
    linkURL: string
  }

  const feature1: Feature = {
    id: '1',
    thumb: imgFeature1,
    title: "OIL CHANGES",
    description: "",
    price: "$60",
    linkText: "Call Now",
    linkURL: "tel:+1" + card.BUS_PHONE1
  }

  const feature2: Feature = {
    id: '2',
    thumb: imgFeature2,
    title: "AIR FILTER REPLACEMENT",
    description: "",
    price: "$80",
    linkText: "Call Now",
    linkURL: "tel:+1" + card.BUS_PHONE1
  }

  const feature3: Feature = {
    id: '3',
    thumb: imgFeature3,
    title: "SPARK PLUG REPLACEMENT",
    description: "",
    price: "$30",
    linkText: "Call Now",
    linkURL: "tel:+1" + card.BUS_PHONE1
  }

  const feature4: Feature = {
    id: '4',
    thumb: imgFeature4,
    title: "MUFFLER REPAIR",
    description: "",
    price: "$14",
    linkText: "Call Now",
    linkURL: "tel:+1" + card.BUS_PHONE1
  }

  const feature5: Feature = {
    id: '5',
    thumb: imgFeature5,
    title: "COOLANT FLUSH",
    description: "",
    price: "$14",
    linkText: "Call Now",
    linkURL: "tel:+1" + card.BUS_PHONE1
  }

  const feature6: Feature = {
    id: '6',
    thumb: imgFeature6,
    title: "TIRE MAINTENANCE & REPAIR",
    description: "",
    price: "$43",
    linkText: "Call Now",
    linkURL: "tel:+1" + card.BUS_PHONE1
  }

  const feature7: Feature = {
    id: '7',
    thumb: imgFeature7,
    title: "ENGINE DIAGNOSTICS",
    description: "",
    price: "$18",
    linkText: "Call Now",
    linkURL: "tel:+1" + card.BUS_PHONE1
  }

  const feature8: Feature = {
    id: '8',
    thumb: imgFeature8,
    title: "BRAKE INSPECTION & REPAIR",
    description: "",
    price: "$18",
    linkText: "Call Now",
    linkURL: "tel:+1" + card.BUS_PHONE1
  }


  const featureList: Feature[] = [];
  featureList.push(feature1);
  featureList.push(feature2);
  featureList.push(feature3);
  featureList.push(feature4);
  featureList.push(feature5);
  featureList.push(feature6);
  featureList.push(feature7);
  featureList.push(feature8);

  return { featureList, FEATURES_TITLE_DESCRIPTION }
};
import { IContent } from "@/types/contentRendererTypes";
import { blockHeaderCreator, blockRendererCreator, bulletListCreator, headingWithUnderlineCreator, imageHolderCreator, mainTitleCreator, paragraphCreator, primaryTitleCreator, secondaryTitleCreator } from "@/utils/contentRendererObjectCreators";

export const content: IContent = [
  mainTitleCreator({
    title: "Nepal Air Trip Brand Guidelines",
    // ctaButton1Content: "VIEW SLIDE DECK",
    // ctaButton1Link: "https://www.figma.com/proto/iCc6Lep4WmFG4XZffpShAg/ADRIANA-%7C-TIMEOUT-%7C-UX-PROTOTHON?page-id=8%3A2&type=design&node-id=8-3&viewport=535%2C-771%2C0.21&t=uR26hmmI5T4BWENS-1&scaling=contain",
  }),

  secondaryTitleCreator({
    content: "PROJECT SHOWCASE"
  }),

  // paragraphCreator({
  //   content: "Write overview..."
  // }),

  imageHolderCreator({
    imagePath: "NepalAirTripBrand/01 - Nepal AIr Trip Cover.png"
  }),


  imageHolderCreator({
    imagePath: "NepalAirTripBrand/02 - PREVIEW.png"
  }),

  imageHolderCreator({
    imagePath: "NepalAirTripBrand/03 - THE BRAND.png"
  }),
  imageHolderCreator({
    imagePath: "NepalAirTripBrand/04 - MISSION & VISION.png"
  }),
  imageHolderCreator({
    imagePath: "NepalAirTripBrand/05 - TONE OF VOICE.png"
  }),
  imageHolderCreator({
    imagePath: "NepalAirTripBrand/06 - MOCKUP.png"
  }),
  imageHolderCreator({
    imagePath: "NepalAirTripBrand/07 - COLOR SCHEME.png"
  }),
  imageHolderCreator({
    imagePath: "NepalAirTripBrand/08 - TYPOGRAPHY.png"
  }),
  imageHolderCreator({
    imagePath: "NepalAirTripBrand/09 - LOGOTYPE.png"
  }),
  imageHolderCreator({
    imagePath: "NepalAirTripBrand/10 - LOGO COMBINATIONS.png"
  }),
  imageHolderCreator({
    imagePath: "NepalAirTripBrand/11 - MOCKUPS.png"
  }),
  imageHolderCreator({
    imagePath: "NepalAirTripBrand/12 - TYPOGRAPHY.png"
  }),
  imageHolderCreator({
    imagePath: "NepalAirTripBrand/13 - TYPOGRAPHY.png"
  }),
  imageHolderCreator({
    imagePath: "NepalAirTripBrand/14 - TYPOGRAPHY.png"
  }),
  imageHolderCreator({
    imagePath: "NepalAirTripBrand/15 - TYPOGRAPHY SCALE FORMULATION.png"
  }),   
  imageHolderCreator({
    imagePath: "NepalAirTripBrand/16 - TYPOGRAPHY.png"
  }),   
  imageHolderCreator({
    imagePath: "NepalAirTripBrand/17 - TYPOGRAPHY.png"
  }),  
   imageHolderCreator({
    imagePath: "NepalAirTripBrand/18 - Nepal AIr Trip Epilogue.png"
  }),   

  
]
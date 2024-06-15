import { IContent } from "@/types/contentRendererTypes";
import {
  blockHeaderCreator,
  blockRendererCreator,
  bulletListCreator,
  headingWithUnderlineCreator,
  imageHolderCreator,
  mainTitleCreator,
  paragraphCreator,
  primaryTitleCreator,
  secondaryTitleCreator,
} from "@/utils/contentRendererObjectCreators";

export const content: IContent = [
  mainTitleCreator({
    title: "CharityBall",
    // ctaButton1Content: "Design SHOWCASE",
    // ctaButton1Link: "https://www.behance.net/gallery/167202369/CharityBall-Branding",
    // ctaButton2Content: "SEE THIS PROJECT LIVE",
    // ctaButton2Link: "https://boxy.com"
  }),

  secondaryTitleCreator({
    content: "DESIGN SHOWCASE",
  }),

  imageHolderCreator({
    imagePath: "CharityBall/15.png",
    noMargin: false,
  }),

  imageHolderCreator({
    imagePath: "CharityBall/14.png",
    noMargin: true,
  }),

  imageHolderCreator({
    imagePath: "CharityBall/13.png",
    noMargin: true,
  }),

  imageHolderCreator({
    imagePath: "CharityBall/12.png",
    noMargin: true,
  }),
  imageHolderCreator({
    imagePath: "CharityBall/11.png",
    noMargin: true,
  }),
  imageHolderCreator({
    imagePath: "CharityBall/10.png",
    noMargin: true,
  }),
  imageHolderCreator({
    imagePath: "CharityBall/09.png",
    noMargin: true,
  }),
  imageHolderCreator({
    imagePath: "CharityBall/08.png",
    noMargin: true,
  }),
  imageHolderCreator({
    imagePath: "CharityBall/07.png",
    noMargin: true,
  }),
  imageHolderCreator({
    imagePath: "CharityBall/06.png",
    noMargin: true,
  }),
  imageHolderCreator({
    imagePath: "CharityBall/05.png",
    noMargin: true,
  }),
  imageHolderCreator({
    imagePath: "CharityBall/04.png",
    noMargin: true,
  }),
  imageHolderCreator({
    imagePath: "CharityBall/03.png",
    noMargin: true,
  }),
  imageHolderCreator({
    imagePath: "CharityBall/02.png",
    noMargin: true,
  }),
  imageHolderCreator({
    imagePath: "CharityBall/01.png",
    noMargin: true,
  }),
];

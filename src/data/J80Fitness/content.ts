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
    title: "J80 Fitness E-Commerce",
    // ctaButton1Content: "Design SHOWCASE",
    // ctaButton1Link: "https://www.behance.net/gallery/167202369/CharityBall-Branding",
    // ctaButton2Content: "SEE THIS PROJECT LIVE",
    // ctaButton2Link: "https://boxy.com"
  }),

  secondaryTitleCreator({
    content: "DESIGN SHOWCASE",
  }),

  imageHolderCreator({
    imagePath: "J80Fitness/1.png",
    noMargin: false,
  }),
  imageHolderCreator({
    imagePath: "J80Fitness/2.png",
    noMargin: false,
  }),
  imageHolderCreator({
    imagePath: "J80Fitness/3.png",
    noMargin: false,
  }),
  imageHolderCreator({
    imagePath: "J80Fitness/4.png",
    noMargin: false,
  }),
  imageHolderCreator({
    imagePath: "J80Fitness/5.png",
    noMargin: false,
  }),
  imageHolderCreator({
    imagePath: "J80Fitness/6.png",
    noMargin: false,
  }),
  imageHolderCreator({
    imagePath: "J80Fitness/7.png",
    noMargin: false,
  }),
  imageHolderCreator({
    imagePath: "J80Fitness/8.png",
    noMargin: false,
  }),
  imageHolderCreator({
    imagePath: "J80Fitness/9.png",
    noMargin: false,
  }),
  imageHolderCreator({
    imagePath: "J80Fitness/10.png",
    noMargin: false,
  }),
  imageHolderCreator({
    imagePath: "J80Fitness/11.png",
    noMargin: false,
  }),
  imageHolderCreator({
    imagePath: "J80Fitness/12.png",
    noMargin: false,
  }),
  imageHolderCreator({
    imagePath: "J80Fitness/13.png",
    noMargin: false,
  }),
  imageHolderCreator({
    imagePath: "J80Fitness/14.png",
    noMargin: false,
  }),
  imageHolderCreator({
    imagePath: "J80Fitness/15.png",
    noMargin: false,
  }),
  imageHolderCreator({
    imagePath: "J80Fitness/16.png",
    noMargin: false,
  }),
  imageHolderCreator({
    imagePath: "J80Fitness/17.png",
    noMargin: false,
  }),
  imageHolderCreator({
    imagePath: "J80Fitness/18.png",
    noMargin: false,
  }),
  imageHolderCreator({
    imagePath: "J80Fitness/19.png",
    noMargin: false,
  }),
  imageHolderCreator({
    imagePath: "J80Fitness/20.png",
    noMargin: false,
  }),
  imageHolderCreator({
    imagePath: "J80Fitness/21.png",
    noMargin: false,
  }),
  imageHolderCreator({
    imagePath: "J80Fitness/22.png",
    noMargin: false,
  }),
  imageHolderCreator({
    imagePath: "J80Fitness/23.png",
    noMargin: false,
  }),
];

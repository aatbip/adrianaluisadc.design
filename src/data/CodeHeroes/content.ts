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
    title: "Codeheroes",
    ctaButton1Content: "View Prototype",
    ctaButton1Link:
      "https://www.figma.com/proto/oChmQIOqvrint2CNHskggC/Portfolio-%26-Resume-2024?page-id=1%3A15&node-id=234-76419&viewport=-4053%2C1266%2C0.19&t=FQgKlLKurrwyVSdq-1&scaling=min-zoom",
    // ctaButton2Content: "SEE THIS PROJECT LIVE",
    // ctaButton2Link: "https://boxy.com"
  }),

  secondaryTitleCreator({
    content: "DESIGN SHOWCASE",
  }),

  imageHolderCreator({
    imagePath: "CodeHeroes/1.png",
    noMargin: false,
  }),
  imageHolderCreator({
    imagePath: "CodeHeroes/2.png",
    noMargin: false,
  }),
  imageHolderCreator({
    imagePath: "CodeHeroes/3.png",
    noMargin: false,
  }),
  imageHolderCreator({
    imagePath: "CodeHeroes/4.png",
    noMargin: false,
  }),
  imageHolderCreator({
    imagePath: "CodeHeroes/5.png",
    noMargin: false,
  }),
  imageHolderCreator({
    imagePath: "CodeHeroes/6.png",
    noMargin: false,
  }),
  imageHolderCreator({
    imagePath: "CodeHeroes/7.png",
    noMargin: false,
  }),
];

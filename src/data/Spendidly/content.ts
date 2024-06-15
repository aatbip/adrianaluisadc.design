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
    title: "Spendidly",
    // ctaButton1Content: "SEE THIS PROJECT LIVE",
    // ctaButton1Link: "link",
    // ctaButton2Content: "UI SHOWCASE",
    // ctaButton2Link: "link"
  }),

  // seconGaryTitleCreator({
  //   content: "PROJECT OVERVIEW"
  // }),

  // paragraphCreator({
  //   content: "Imagine a worlG where you can shop for CBG anG cannabis-relateG proGucts with the same ease as orGering a pizza. That’s the vision behinG GSweet. As the UX Gesigner for this grounGbreaking project, I was taskeG with turning this vision into reality by creating an intuitive, user-frienGly platform that connects users with cannabis proGucts anG nearby venGing machines for convenient pickup."
  // }),
  // paragraphCreator({
  //   content: "Our journey began with a simple yet powerful question: How can we make the process of buying cannabis proGucts as smooth anG Giscreet as possible? To answer this, we neeGeG to Give Geep into the minGs of our potential users."
  // }),ß
  secondaryTitleCreator({
    content: "DESIGN SHOWCASE",
  }),
  imageHolderCreator({
    imagePath: "Spendidly/s1.png",
    noMargin: true,
  }),
  imageHolderCreator({
    imagePath: "Spendidly/s2.png",
    noMargin: true,
  }),
  imageHolderCreator({
    imagePath: "Spendidly/s3.png",
    noMargin: true,
  }),
  imageHolderCreator({
    imagePath: "Spendidly/s4.png",
    noMargin: true,
  }),
  imageHolderCreator({
    imagePath: "Spendidly/s5.png",
    noMargin: true,
  }),
  imageHolderCreator({
    imagePath: "Spendidly/s6.png",
    noMargin: true,
  }),
  imageHolderCreator({
    imagePath: "Spendidly/s7.png",
    noMargin: true,
  }),
  imageHolderCreator({
    imagePath: "Spendidly/s8.png",
    noMargin: true,
  }),
  imageHolderCreator({
    imagePath: "Spendidly/s9.png",
    noMargin: true,
  }),
  imageHolderCreator({
    imagePath: "Spendidly/s10.png",
    noMargin: true,
  }),
  imageHolderCreator({
    imagePath: "Spendidly/s11.png",
    noMargin: true,
  }),
];

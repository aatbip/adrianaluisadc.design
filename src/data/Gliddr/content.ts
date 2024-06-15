import { BulletList } from "@/components/ContentRenderers/BulletList";
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
    title: "Gliddr - ChatGPT Prompt Extension",
    // ctaButton1Content: "View Prototype",
    // ctaButton1Link: "https://www.figma.com/proto/oChmQIOqvrint2CNHskggC/Portfolio-%26-Resume-2024?page-id=424%3A43605&node-id=424-54317&viewport=239%2C1564%2C0.34&t=K74RtOTSsRyIzVzR-1&scaling=min-zoom&starting-point-node-id=424%3A54317",
    // ctaButton2Content: "SEE THIS PROJECT LIVE",
    // ctaButton2Link: "https://Gliddr.com"
  }),

  // secondaryTitleCreator({
  //   content: "PROJECT OVERVIEW"
  // }),

  // paragraphCreator({
  //   content: "Gliddr is.."

  // }),

  secondaryTitleCreator({
    content: "DESIGN SHOWCASE",
  }),
  imageHolderCreator({
    imagePath: "Gliddr/Slice 1.png",
  }),
  imageHolderCreator({
    imagePath: "Gliddr/Slice 2.png",
  }),
  imageHolderCreator({
    imagePath: "Gliddr/Slice 3.png",
  }),
  imageHolderCreator({
    imagePath: "Gliddr/Slice 4.png",
  }),
  imageHolderCreator({
    imagePath: "Gliddr/Slice 5.png",
  }),
  imageHolderCreator({
    imagePath: "Gliddr/Slice 6.png",
  }),
  imageHolderCreator({
    imagePath: "Gliddr/Slice 7.png",
  }),
  imageHolderCreator({
    imagePath: "Gliddr/Slice 8.png",
  }),
  imageHolderCreator({
    imagePath: "Gliddr/Slice 9.png",
  }),
  imageHolderCreator({
    imagePath: "Gliddr/Slice 10.png",
  }),
  imageHolderCreator({
    imagePath: "Gliddr/Slice 11.png",
  }),
];

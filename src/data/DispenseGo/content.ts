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
    title: "Dispense Go: Revolutionizing Cannabis Ecommerce and Pickup",
    // ctaButton1Content: "SEE THIS PROJECT LIVE",
    // ctaButton1Link: "link",
    // ctaButton2Content: "UI SHOWCASE",
    // ctaButton2Link: "link"
  }),

  secondaryTitleCreator({
    content: "PROJECT OVERVIEW",
  }),

  paragraphCreator({
    content:
      "Imagine a world where you can shop for CBD and cannabis-related products with the same ease as ordering a pizza. That’s the vision behind DispenseGo. As the UX Designer for this groundbreaking project, I was tasked with turning this vision into reality by creating an intuitive, user-friendly platform that connects users with cannabis products and nearby vending machines for convenient pickup.",
  }),
  paragraphCreator({
    content:
      "Our journey began with a simple yet powerful question: How can we make the process of buying cannabis products as smooth and discreet as possible? To answer this, we needed to dive deep into the minds of our potential users.",
  }),
  secondaryTitleCreator({
    content: "DESIGN SHOWCASE",
  }),
  imageHolderCreator({
    imagePath: "DispenseGo/d1.png",
    noMargin: true,
  }),

  imageHolderCreator({
    imagePath: "DispenseGo/d2.png",
    noMargin: true,
  }),

  imageHolderCreator({
    imagePath: "DispenseGo/d3.png",
    noMargin: true,
  }),
  imageHolderCreator({
    imagePath: "DispenseGo/d4.png",
    noMargin: true,
  }),
  imageHolderCreator({
    imagePath: "DispenseGo/d5.png",
    noMargin: true,
  }),
  imageHolderCreator({
    imagePath: "DispenseGo/d6.png",
    noMargin: true,
  }),
  imageHolderCreator({
    imagePath: "DispenseGo/d7.png",
    noMargin: true,
  }),
  imageHolderCreator({
    imagePath: "DispenseGo/d8.png",
    noMargin: true,
  }),
  imageHolderCreator({
    imagePath: "DispenseGo/d9.png",
    noMargin: true,
  }),
  imageHolderCreator({
    imagePath: "DispenseGo/d10.png",
    noMargin: true,
  }),
  imageHolderCreator({
    imagePath: "DispenseGo/d11.png",
    noMargin: true,
  }),
  imageHolderCreator({
    imagePath: "DispenseGo/d12.png",
    noMargin: true,
  }),
  imageHolderCreator({
    imagePath: "DispenseGo/d13.png",
    noMargin: true,
  }),

  imageHolderCreator({
    imagePath: "DispenseGo/d14.png",
    noMargin: true,
  }),

  imageHolderCreator({
    imagePath: "DispenseGo/d15.png",
    noMargin: true,
  }),

  imageHolderCreator({
    imagePath: "DispenseGo/d16.png",
    noMargin: true,
  }),
];

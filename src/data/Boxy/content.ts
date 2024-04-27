import { IContent } from "@/types/contentRendererTypes";
import { blockHeaderCreator, blockRendererCreator, bulletListCreator, headingWithUnderlineCreator, imageHolderCreator, mainTitleCreator, paragraphCreator, primaryTitleCreator, secondaryTitleCreator } from "@/utils/contentRendererObjectCreators";

export const content: IContent = [
  mainTitleCreator({
    title: "Boxy: Fighter's Platform",
    ctaButton1Content: "UI SHOWCASE",
    ctaButton1Link: "https://www.behance.net/gallery/195112499/Boxy-A-Platfom-for-Boxers",
    ctaButton2Content: "SEE THIS PROJECT LIVE",
    ctaButton2Link: "https://boxy.com"
  }),

  imageHolderCreator({
    imagePath: "Boxy/img-1.png",
  }),

  secondaryTitleCreator({
    content: "PROJECT OVERVIEW"
  }),

  paragraphCreator({
    content: "Boxy is..."
  }),

  secondaryTitleCreator({
    content: "MY ROLE"
  }),

  bulletListCreator({
    bulletListItems: [
      "Team of 2 Designers",
      "Competitive Analysis, Wireframing, Prototyping, and UI design",
    ]
  }),

]


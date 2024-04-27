import { IContent } from "@/types/contentRendererTypes";
import { blockHeaderCreator, blockRendererCreator, bulletListCreator, headingWithUnderlineCreator, imageHolderCreator, mainTitleCreator, paragraphCreator, primaryTitleCreator, secondaryTitleCreator } from "@/utils/contentRendererObjectCreators";

export const content: IContent = [
  mainTitleCreator({
    title: "Dispense Go",
    ctaButton1Content: "SEE THIS PROJECT LIVE",
    ctaButton1Link: "link",
    ctaButton2Content: "UI SHOWCASE",
    ctaButton2Link: "link"
  }),

  secondaryTitleCreator({
    content: "PROJECT OVERVIEW"
  }),

  paragraphCreator({
    content: "Dispence Go is awesome!"
  }),

]


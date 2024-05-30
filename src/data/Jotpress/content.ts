import { BulletList } from "@/components/ContentRenderers/BulletList";
import { IContent } from "@/types/contentRendererTypes";
import { blockHeaderCreator, blockRendererCreator, bulletListCreator, headingWithUnderlineCreator, imageHolderCreator, mainTitleCreator, paragraphCreator, primaryTitleCreator, secondaryTitleCreator } from "@/utils/contentRendererObjectCreators";

export const content: IContent = [
  mainTitleCreator({
    title: "Jotpress Brand Book",
    // ctaButton1Content: "UI SHOWCASE",
    // ctaButton1Link: "https://www.behance.net/gallery/195112499/Jotpress-A-Platfom-for-Boxers",
    // ctaButton2Content: "SEE THIS PROJECT LIVE",
    // ctaButton2Link: "https://Jotpress.com"
  }),

 
  secondaryTitleCreator({
    content: "DESIGN SHOWCASE"
  }),

   
  primaryTitleCreator({
    content: "Variant Moon 🌙"
  }),
 
  imageHolderCreator({
    imagePath: "Jotpress/Slice 1.png",
  }),
  imageHolderCreator({
    imagePath: "Jotpress/Slice 2.png",
  }),
  imageHolderCreator({
    imagePath: "Jotpress/Slice 3.png",
  }),
  imageHolderCreator({
    imagePath: "Jotpress/Slice 4.png",
  }),
  imageHolderCreator({
    imagePath: "Jotpress/Slice 5.png",
  }),
  imageHolderCreator({
    imagePath: "Jotpress/Slice 6.png",
  }),
  imageHolderCreator({
    imagePath: "Jotpress/Slice 7.png",
  }),
  imageHolderCreator({
    imagePath: "Jotpress/Slice 8.png",
  }),

  primaryTitleCreator({
    content: "Variant Sun 🌤️"
  }),

  imageHolderCreator({
    imagePath: "Jotpress/Slice 9.png",
  }),
  imageHolderCreator({
    imagePath: "Jotpress/Slice 10.png",
  }),
  imageHolderCreator({
    imagePath: "Jotpress/Slice 11.png",
  }),
  imageHolderCreator({
    imagePath: "Jotpress/Slice 12.png",
  }),
  imageHolderCreator({
    imagePath: "Jotpress/Slice 13.png",
  }),
  imageHolderCreator({
    imagePath: "Jotpress/Slice 14.png",
  }),

]


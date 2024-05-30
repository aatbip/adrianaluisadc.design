import { BulletList } from "@/components/ContentRenderers/BulletList";
import { IContent } from "@/types/contentRendererTypes";
import { blockHeaderCreator, blockRendererCreator, bulletListCreator, headingWithUnderlineCreator, imageHolderCreator, mainTitleCreator, paragraphCreator, primaryTitleCreator, secondaryTitleCreator } from "@/utils/contentRendererObjectCreators";

export const content: IContent = [
  mainTitleCreator({
    title: "Intripid: Stress-free Travel Planning",
    // ctaButton1Content: "UI SHOWCASE",
    // ctaButton1Link: "https://www.behance.net/gallery/195112499/Intripid-A-Platfom-for-Boxers",
    // ctaButton2Content: "SEE THIS PROJECT LIVE",
    // ctaButton2Link: "https://Intripid.com"
  }),

 
  secondaryTitleCreator({
    content: "DESIGN SHOWCASE"
  }),
 
  imageHolderCreator({
    imagePath: "Intripid/Slice 1.png",
  }),
  imageHolderCreator({
    imagePath: "Intripid/Slice 2.png",
  }),
  imageHolderCreator({
    imagePath: "Intripid/Slice 3.png",
  }),
  imageHolderCreator({
    imagePath: "Intripid/Slice 4.png",
  }),
  imageHolderCreator({
    imagePath: "Intripid/Slice 5.png",
  }),
  imageHolderCreator({
    imagePath: "Intripid/Slice 6.png",
  }),
  imageHolderCreator({
    imagePath: "Intripid/Slice 7.png",
  }),
  imageHolderCreator({
    imagePath: "Intripid/Slice 8.png",
  }),
  imageHolderCreator({
    imagePath: "Intripid/Slice 9.png",
  }),
  imageHolderCreator({
    imagePath: "Intripid/Slice 10.png",
  }),
  imageHolderCreator({
    imagePath: "Intripid/Slice 11.png",
  }),
  imageHolderCreator({
    imagePath: "Intripid/Slice 12.png",
  }),
  imageHolderCreator({
    imagePath: "Intripid/Slice 13.png",
  }),
  imageHolderCreator({
    imagePath: "Intripid/Slice 14.png",
  }),
  imageHolderCreator({
    imagePath: "Intripid/Slice 15.png",
  }),
  imageHolderCreator({
    imagePath: "Intripid/Slice 16.png",
  }),
  imageHolderCreator({
    imagePath: "Intripid/Slice 17.png",
  }),
  imageHolderCreator({
    imagePath: "Intripid/Slice 18.png",
  }),
  imageHolderCreator({
    imagePath: "Intripid/Slice 19.png",
  }),
]


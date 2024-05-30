import { BulletList } from "@/components/ContentRenderers/BulletList";
import { IContent } from "@/types/contentRendererTypes";
import { blockHeaderCreator, blockRendererCreator, bulletListCreator, headingWithUnderlineCreator, imageHolderCreator, mainTitleCreator, paragraphCreator, primaryTitleCreator, secondaryTitleCreator } from "@/utils/contentRendererObjectCreators";

export const content: IContent = [
  mainTitleCreator({
    title: "Boxy: Fighter's Platform",
    // ctaButton1Content: "UI SHOWCASE",
    // ctaButton1Link: "https://www.behance.net/gallery/195112499/Boxy-A-Platfom-for-Boxers",
    // ctaButton2Content: "SEE THIS PROJECT LIVE",
    // ctaButton2Link: "https://boxy.com"
  }),

  
  secondaryTitleCreator({
    content: "PROJECT OVERVIEW"
  }),

  paragraphCreator({
    content: "Boxy is an innovative web application designed to connect users with professional fighters for coaching, enable fighters to offer their services, and provide businesses with advanced AI tools to predict social media engagement and access a comprehensive fighter database. The goal is to create a seamless, user-friendly experience for all stakeholders in the combat sports industry."
  
  }),

  imageHolderCreator({
    imagePath: "Boxy/img-1.png",
  }),

  secondaryTitleCreator({
    content: "DESIGN SHOWCASE"
  }),
  imageHolderCreator({
    imagePath: "Boxy/Slice 1.png",
  }),
  imageHolderCreator({
    imagePath: "Boxy/Slice 2.png",
  }),
  imageHolderCreator({
    imagePath: "Boxy/Slice 3.png",
  }),
  imageHolderCreator({
    imagePath: "Boxy/Slice 4.png",
  }),
  imageHolderCreator({
    imagePath: "Boxy/Slice 5.png",
  }),
  imageHolderCreator({
    imagePath: "Boxy/Slice 6.png",
  }),
  imageHolderCreator({
    imagePath: "Boxy/Slice 7.png",
  }),
  imageHolderCreator({
    imagePath: "Boxy/Slice 8.png",
  }),
  imageHolderCreator({
    imagePath: "Boxy/Slice 9.png",
  }),
  imageHolderCreator({
    imagePath: "Boxy/Slice 10.png",
  }),
  imageHolderCreator({
    imagePath: "Boxy/Slice 11.png",
  }),
  imageHolderCreator({
    imagePath: "Boxy/Slice 12.png",
  }),
  imageHolderCreator({
    imagePath: "Boxy/Slice 13.png",
  }),
  imageHolderCreator({
    imagePath: "Boxy/Slice 14.png",
  }),
  imageHolderCreator({
    imagePath: "Boxy/Slice 15.png",
  }),
  imageHolderCreator({
    imagePath: "Boxy/Slice 16.png",
  }),
  imageHolderCreator({
    imagePath: "Boxy/Slice 17.png",
  }),
  imageHolderCreator({
    imagePath: "Boxy/Slice 18.png",
  }),
  imageHolderCreator({
    imagePath: "Boxy/Slice 19.png",
  }),
  imageHolderCreator({
    imagePath: "Boxy/Slice 20.png",
  }),
]


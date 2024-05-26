import { BulletList } from "@/components/ContentRenderers/BulletList";
import { IContent } from "@/types/contentRendererTypes";
import { blockHeaderCreator, blockRendererCreator, bulletListCreator, headingWithUnderlineCreator, imageHolderCreator, mainTitleCreator, paragraphCreator, primaryTitleCreator, secondaryTitleCreator } from "@/utils/contentRendererObjectCreators";

export const content: IContent = [
  mainTitleCreator({
    title: "Boxy: Fighter's Platform",
    ctaButton1Content: "UI SHOWCASE",
    ctaButton1Link: "https://www.behance.net/gallery/195112499/Boxy-A-Platfom-for-Boxers",
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
    content: "My Role"
  }),
  paragraphCreator({
    content: "As one of the UI Designer for Boxy, I was in charge of the leading the profile dashboard. This crucial feature allows users to:"
  }),

  bulletListCreator({
    bulletListItems: [
      "Edit their bio",
      "Add highlight videos",
      "Link social media accounts",
      "Share personal stories",
      "Validate account verification",
      "Add and manage fight records",
    ]
  }),
  // secondaryTitleCreator({
  //   content: "DESIGN SHOWCASE"
  // }),

  // imageHolderCreator({
  //   imagePath: "CharityBall/15.png",
  //   noMargin: false
  // }),

  // imageHolderCreator({
  //   imagePath: "CharityBall/14.png",
  //   noMargin: true
  // }),

  // imageHolderCreator({
  //   imagePath: "CharityBall/13.png",
  //   noMargin: true
  // }),

  // imageHolderCreator({
  //   imagePath: "CharityBall/12.png",
  //   noMargin: true
  // }),
  // imageHolderCreator({
  //   imagePath: "CharityBall/11.png",
  //   noMargin: true
  // }),
  // imageHolderCreator({
  //   imagePath: "CharityBall/10.png",
  //   noMargin: true
  // }),
  // imageHolderCreator({
  //   imagePath: "CharityBall/09.png",
  //   noMargin: true
  // }),
  // imageHolderCreator({
  //   imagePath: "CharityBall/08.png",
  //   noMargin: true
  // }),
  // imageHolderCreator({
  //   imagePath: "CharityBall/07.png",
  //   noMargin: true
  // }),
  // imageHolderCreator({
  //   imagePath: "CharityBall/06.png",
  //   noMargin: true
  // }),
  // imageHolderCreator({
  //   imagePath: "CharityBall/05.png",
  //   noMargin: true
  // }),
  // imageHolderCreator({
  //   imagePath: "CharityBall/04.png",
  //   noMargin: true
  // }),
  // imageHolderCreator({
  //   imagePath: "CharityBall/03.png",
  //   noMargin: true
  // }),
  // imageHolderCreator({
  //   imagePath: "CharityBall/02.png",
  //   noMargin: true
  // }),
  // imageHolderCreator({
  //   imagePath: "CharityBall/01.png",
  //   noMargin: true
  // }),

]


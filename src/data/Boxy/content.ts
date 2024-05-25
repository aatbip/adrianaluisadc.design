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

  secondaryTitleCreator({
    content: "PROJECT OVERVIEW"
  }),

  imageHolderCreator({
    imagePath: "Boxy/img-1.png",
  }),


  paragraphCreator({
    content: "Boxy is an innovative web application designed to connect users with professional fighters for coaching, enable fighters to offer their services, and provide businesses with advanced AI tools to predict social media engagement and access a comprehensive fighter database. The goal is to create a seamless, user-friendly experience for all stakeholders in the combat sports industry."
  }),

  secondaryTitleCreator({
    content: "Problem Statement"
  }),
  paragraphCreator({
    content: "In the world of combat sports, connecting fighters, coaches, and businesses effectively can be challenging. Fighters need a platform to offer their services, users need reliable ways to book legitimate fighters, and businesses require tools to predict social media engagement and access detailed fighter information. Boxy addresses these needs by providing an integrated solution."
  }),

  // secondaryTitleCreator({
  //   content: "Key Features"
  // }),

  // blockRendererCreator({
  //   blockHeading: "1. Fighters' Profiles",
  //   leftNode: [
  //     // blockHeaderCreator({
  //     //   content: "Observation"
  //     // }),
  //     bulletListCreator({
  //       bulletListItems: [
  //         "Find fighters across database of fighters",
  //         "Multimedia galleries showcasing fights, training highlights, and achievements",
  //         "Verified fighters are marked with badges according to their fighter score",
  //       ]
  //     })
  //   ],
  //   rightNode: [
  //     blockHeaderCreator({
  //       content: "2. Advanced AI Tools for Businesses"
  //     }),
  //     bulletListCreator({
  //       bulletListItems: [
  //         "AI-driven insights to forecast social media engagement and optimize content strategies",
  //         "Predictive analytics to forecast social media engagement for fighter posts",
  //         "Calculate fighter's score and comparative analysis to other fighters",
      
  //       ]
  //     })
  //   ]
  // }),

  // blockRendererCreator({
  //   blockHeading: "2. Advanced AI Tools for Businesses",
  //   leftNode: [
  //     // blockHeaderCreator({
  //     //   content: "Observation"
  //     // }),
  //     bulletListCreator({
  //       bulletListItems: [
  //        "AI-driven insights to forecast social media engagement and optimize content strategies",
  //         "Predictive analytics to forecast social media engagement for fighter posts",
  //         "Calculate fighter's score and comparative analysis to other fighters",
  //       ]
  //     })
  //   ],
  //   rightNode: [
  //     blockHeaderCreator({
  //       content: "2. Advanced AI Tools for Businesses"
  //     }),
  //     bulletListCreator({
  //       bulletListItems: [
  //         "AI-driven insights to forecast social media engagement and optimize content strategies",
  //         "Predictive analytics to forecast social media engagement for fighter posts",
  //         "Calculate fighter's score and comparative analysis to other fighters",
      
  //       ]
  //     })
  //   ]
  // }),


]


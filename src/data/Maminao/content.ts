import { IContent } from "@/types/contentRendererTypes";
import { blockHeaderCreator, blockRendererCreator, bulletListCreator, headingWithUnderlineCreator, imageHolderCreator, mainTitleCreator, paragraphCreator, primaryTitleCreator, secondaryTitleCreator } from "@/utils/contentRendererObjectCreators";

export const content: IContent = [
  mainTitleCreator({
  title: "Maminao",
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
    content: "DESIGN SHOWCASE"
  }),
  imageHolderCreator({
    imagePath: "GSweet/G1.png",
    noMargin: true
  }),

  imageHolderCreator({
    imagePath: "GSweet/G2.png",
    noMargin: true
  }),

  imageHolderCreator({
    imagePath: "GSweet/G3.png",
    noMargin: true
  }),
  imageHolderCreator({
    imagePath: "GSweet/G4.png",
    noMargin: true
  }),
  imageHolderCreator({
    imagePath: "GSweet/G5.png",
    noMargin: true
  }),
  imageHolderCreator({
    imagePath: "GSweet/G6.png",
    noMargin: true
  }),
  imageHolderCreator({
    imagePath: "GSweet/G7.png",
    noMargin: true
  }),
  imageHolderCreator({
    imagePath: "GSweet/G8.png",
    noMargin: true
  }),
  imageHolderCreator({
    imagePath: "GSweet/G9.png",
    noMargin: true
  }),
  imageHolderCreator({
    imagePath: "GSweet/G10.png",
    noMargin: true
  }),
  imageHolderCreator({
    imagePath: "GSweet/G11.png",
    noMargin: true
  }),
  imageHolderCreator({
    imagePath: "GSweet/G12.png",
    noMargin: true
  }),
  imageHolderCreator({
    imagePath: "GSweet/G13.png",
    noMargin: true
  }),

  imageHolderCreator({
    imagePath: "GSweet/G14.png",
    noMargin: true
  }),

  imageHolderCreator({
      imagePath: "GSweet/G15.png",
      noMargin: true
    }),

    imageHolderCreator({
      imagePath: "GSweet/G16.png",
      noMargin: true
    }),


    imageHolderCreator({
      imagePath: "GSweet/G17.png",
      noMargin: true
    }),

    imageHolderCreator({
      imagePath: "GSweet/G18.png",
      noMargin: true
    }),
    imageHolderCreator({
      imagePath: "GSweet/G19.png",
      noMargin: true
    }),
    imageHolderCreator({
      imagePath: "GSweet/G20.png",
      noMargin: true
    }),

    imageHolderCreator({
      imagePath: "GSweet/G21.png",
      noMargin: true
    }),
]


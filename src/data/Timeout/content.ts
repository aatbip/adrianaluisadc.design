import { IContent } from "@/types/contentRendererTypes";
import { blockHeaderCreator, blockRendererCreator, bulletListCreator, headingWithUnderlineCreator, iframeCreator, imageHolderCreator, mainTitleCreator, paragraphCreator, primaryTitleCreator, secondaryTitleCreator } from "@/utils/contentRendererObjectCreators";

export const content: IContent = [

  
  mainTitleCreator({
    title: "Timeout - Time Travel Mobile App",
    // ctaButton1Content: "VIEW SLIDE DECK",
    // ctaButton1Link: "https://www.figma.com/proto/iCc6Lep4WmFG4XZffpShAg/ADRIANA-%7C-TIMEOUT-%7C-UX-PROTOTHON?page-id=8%3A2&type=design&node-id=8-3&viewport=535%2C-771%2C0.21&t=uR26hmmI5T4BWENS-1&scaling=contain",
  }),


  secondaryTitleCreator({
    content: "PROJECT OVERVIEW"
  }),

  paragraphCreator({
    content: "Timeout is a mobile application designed for time travelers who wants to travel to the past and future."
  }),


  secondaryTitleCreator({
    content: "Competition"
  }),

  paragraphCreator({
    content: "This project was my entry for the UX Protothon 2024 Space & Time Travel Track, hosted by Dubstech at the University of Washington in collaboration with Design Buddies."
  }),


  secondaryTitleCreator({
    content: "Achievement"
  }),

  paragraphCreator({
    content: "Timeout was selected as the 2nd place winner out of over 67 entries from over 600+ participants, judged by industry experts from Adobe, Oracle, Career Coach, and Universal Audio. Remarkably, it was the only winning entry designed by a solo participant."
  }),

  secondaryTitleCreator({
    content: "Slide Deck"
  }),

  iframeCreator({
    link: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FiCc6Lep4WmFG4XZffpShAg%2FADRIANA-%257C-TIMEOUT-%257C-UX-PROTOTHON%3Fpage-id%3D8%253A2%26node-id%3D8-3%26viewport%3D51%252C263%252C0.02%26t%3D00162cHPFmNSDTs7-1%26scaling%3Dscale-down-width"
  }),
]

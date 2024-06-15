import { HeaderWithUnderline } from "@/components/ContentRenderers/HeaderWithUnderline";
import { IContent } from "@/types/contentRendererTypes";
import {
  blockHeaderCreator,
  blockRendererCreator,
  bulletListCreator,
  headingWithUnderlineCreator,
  iframeCreator,
  imageHolderCreator,
  mainTitleCreator,
  paragraphCreator,
  primaryTitleCreator,
  secondaryTitleCreator,
} from "@/utils/contentRendererObjectCreators";

export const content: IContent = [
  mainTitleCreator({
    title: "Timeout - Time Travel Mobile App",
    // ctaButton1Content: "VIEW CERTIFICATE",
    // ctaButton1Link: "https://www.figma.com/proto/iCc6Lep4WmFG4XZffpShAg/ADRIANA-%7C-TIMEOUT-%7C-UX-PROTOTHON?page-id=8%3A2&type=design&node-id=8-3&viewport=535%2C-771%2C0.21&t=uR26hmmI5T4BWENS-1&scaling=contain",
  }),
  secondaryTitleCreator({
    content: "PROJECT OVERVIEW",
  }),

  paragraphCreator({
    content:
      "Timeout is a mobile application designed for time travelers who wants to travel to the past and future. This project was my entry for the UX Protothon 2024 Space & Time Travel Track, hosted by Dubstech at the University of Washington in collaboration with Design Buddies.",
  }),

  // secondaryTitleCreator({
  //   content: "Slide Deck"
  // }),

  iframeCreator({
    link: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FiCc6Lep4WmFG4XZffpShAg%2FADRIANA-%257C-TIMEOUT-%257C-UX-PROTOTHON%3Fpage-id%3D8%253A2%26node-id%3D8-3%26viewport%3D51%252C263%252C0.02%26t%3D00162cHPFmNSDTs7-1%26scaling%3Dscale-down-width",
  }),

  // secondaryTitleCreator({
  //   content: "Achievement 🎉"
  // }),

  secondaryTitleCreator({
    content: "Achievement 🎉",
  }),

  paragraphCreator({
    content:
      "Timeout was selected as the 2nd Place Winner from over 600+ participants worldwide, judged by industry experts from Adobe, Oracle, Career Coach, and Universal Audio. Remarkably, it was the only winning entry designed by a solo participant.",
  }),

  headingWithUnderlineCreator({
    content: "JUDGES FEEDBACKS ON TIMEOUT",
  }),

  secondaryTitleCreator({
    content: "User Journey",
  }),

  paragraphCreator({
    content:
      "The user journey within the time travel app for architecture students is carefully crafted to provide a comprehensive and engaging learning experience. From the moment students open the app, they are guided through a curated selection of historical architectural landmarks and periods, allowing them to explore different styles, techniques, and influences from around the world.",
  }),

  paragraphCreator({
    content:
      "The journey is structured in a way that encourages active participation and critical thinking, with interactive elements and in-depth historical context provided at each destination. Overall, the user journey effectively immerses students in the rich tapestry of architectural history and encourages them to develop a deeper appreciation for the built environment.",
  }),

  secondaryTitleCreator({
    content: "UI Design",
  }),

  paragraphCreator({
    content:
      "The UI design of the app is sleek, modern, and user-friendly, providing architecture students with intuitive navigation and access to a wealth of educational content. The app's interface is designed to showcase the beauty and complexity of architectural landmarks, with high-quality images, detailed diagrams, and interactive 3D models that allow students to explore each structure from every angle. The use of clean typography, cohesive color schemes, and minimalist design elements enhances the overall usability and aesthetic appeal of the app, making it easy for students to focus on learning and discovery.",
  }),

  secondaryTitleCreator({
    content: "Solving Problem",
  }),

  paragraphCreator({
    content:
      "The time travel app effectively addresses the problem of making historical learning relevant and engaging for architecture students. By providing access to a curated selection of architectural landmarks and periods, the app allows students to study the evolution of architectural styles and techniques in a dynamic and interactive way. ",
  }),
  paragraphCreator({
    content:
      "Through a combination of multimedia content, historical context, and interactive features, the app helps students develop a deeper understanding of architectural history and its significance in shaping the built environment. Additionally, the app encourages students to apply their knowledge to real-world projects and design challenges, fostering creativity and critical thinking skills.",
  }),

  secondaryTitleCreator({
    content: "Presentation",
  }),

  paragraphCreator({
    content:
      "The presentation of the time travel app is professional, polished, and compelling, effectively showcasing the app's features and functionality to architecture students and educators. The use of multimedia elements such as videos, animations, and interactive demos helps bring the app to life and allows viewers to see firsthand how it can enhance their learning experience. Additionally, the presentation effectively communicates the app's value proposition and highlights its potential to revolutionize the way architecture students learn about historical landmarks and periods.",
  }),

  secondaryTitleCreator({
    content: "CONCLUSION",
  }),
  paragraphCreator({
    content:
      "Overall, the time travel app for architecture students is a well-designed and innovative educational tool that effectively combines technology with historical learning to create a unique and immersive experience. With its user-friendly interface, comprehensive content, problem-solving approach, and compelling presentation, the app has the potential to inspire a new generation of architects and design enthusiasts to explore the rich history of the built environment and its impact on society.",
  }),
];

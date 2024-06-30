import { IContent } from "@/types/contentRendererTypes";
import { blockHeaderCreator, blockRendererCreator, bulletListCreator, headingWithUnderlineCreator, imageHolderCreator, mainTitleCreator, paragraphCreator, primaryTitleCreator, secondaryTitleCreator } from "@/utils/contentRendererObjectCreators";

export const content: IContent = [
  mainTitleCreator({
    title: "InsoAI Case Study",
    ctaButton1Content: "VIEW PROTOTYPE",
    ctaButton1Link: "https://www.figma.com/proto/wG6SEadmUL6CF5bLcSvATE/DESIGN-HANDOFF-(Copy)-(Copy)?page-id=8%3A72138&node-id=8-76386&viewport=680%2C776%2C0.12&t=33VXokkuh5GRMqCE-1&scaling=min-zoom&starting-point-node-id=8%3A76386&show-proto-sidebar=1",
    // ctaButton2Content: "UI SHOWCASE",
    // ctaButton2Link: "link"
  }),

  secondaryTitleCreator({
    content: "PROJECT OVERVIEW"
  }),

  paragraphCreator({
    content: "Nepal, with its majestic landscapes and eight of the world's ten highest mountains, including the iconic Mount Everest, stands as a captivating tourist destination in South Asia. Annually attracting over a million tourists, it has become a favored spot for adventurers and nature enthusiasts alike."
  }),

  paragraphCreator({
    content: "Nepal Air Trip is dedicated to simplifying the travel experience for tourists. As a subsidiary of Nepal Air Business Travels & Tours Pvt. Ltd., a trusted name in Nepalese travel for a decade, they possess a deep understanding of the country's diverse travel landscape. With an eye toward innovation, their business model now integrates advanced technology through the Nepal Air Trip, a web application that provides personalized travel solutions, catering to a wide range of travel accommodation needs across Nepal."
  }),

  secondaryTitleCreator({
    content: "MY ROLE"
  }),

  bulletListCreator({
    bulletListItems: [
      "Oversaw and led a design team of two that helped me maintain the design language and system utilizing Atomic Design System.",
      "Competitive Analysis, User Research, Wireframing, Prototyping, and UI design",
      "In charge of the product's identity and branding, which served as a foundation for the brand's aims and values.",
      "Facilitated the cross-functional team's Design Workshop to anchor the team’s prospect."
    ]
  }),

  primaryTitleCreator({
    content: "The Design Process"
  }),

  imageHolderCreator({
    imagePath: "CaseStudyNepalAirTrip/design-process.png",
    // imageCaption: "THE DESIGN PROCESS. This is a caption holder. I write my caption here about the image."
  }),

  primaryTitleCreator({
    content: "Discovery"
  }),

  paragraphCreator({
    content: "I invited both our CEO, who is also in charge of the engineering team, and Nepal Air Trip’s founders for a stakeholders’ meeting, and utilized the Business Model Canvas to help us visualise all the building blocks to understand the business that are relevant to the limitations and opportunities the design team could bring to the product."
  }),

  imageHolderCreator({
    imagePath: "CaseStudyNepalAirTrip/discovery.png"
  }),

  paragraphCreator({
    content: "The Business Model Canvas (BMC) identified seven key activities that necessitate thoughtful design consideration. Given the scope and urgency of addressing the challenges associated with these key activities, we found out that there is a pressing need to strategically prioritize and tackle them within the allotted timeframe."
  }),

  secondaryTitleCreator({
    content: "RESEARCH & ANALYSIS"
  }),

  primaryTitleCreator({
    content: "Understanding the Users"
  }),

  paragraphCreator({
    content: "I conducted a qualitative survey to have an initial insight of the perceptions of the potential users about their traveling experience. Using the stratified random sampling methodology from 16 participants of ages from 18-64 years old from countries of Philippines (37.5%), India (25%) and Nepal (37.5%). the following are the results of the survey:"
  }),

  blockRendererCreator({
    blockHeading: "Observation",
    leftNode: [
      blockHeaderCreator({
        content: "Observation"
      }),
      bulletListCreator({
        bulletListItems: [
          "Often travels only once a year and once every 6 months to the very most",
          "Plan out their trips within a month or as short as a week before the travel date",
          "Mostly travel with friends, by family, and spouse",
          "Wants the democracy to cater their own trip or travel packages as they wish",
          "Looks for best accommodations and transportations",
          "Prefers to travel by car, followed by flight, bus, and motorcycle"
        ]
      })
    ],
    rightNode: [
      blockHeaderCreator({
        content: "Pain Points"
      }),
      bulletListCreator({
        bulletListItems: [
          "Lack of time for travel planning",
          "No ideas on where and how to seek for travel destinations that matches their budget, time and locations",
          "No contacts for transportation services in local areas",
          "Poor accommodations while traveling",
          "Lack of support in time of possible distress and emergencies"
        ]
      })
    ]
  }),

  secondaryTitleCreator({
    content: "IDEATE SOLUTIONS"
  }),

  primaryTitleCreator({
    content: "Design Workshop"
  }),

  paragraphCreator({
    content: "I facilited Two Days Design Workshop, inviting stakeholders and the design team to join. We conducted various activities with the goal of finding problems fast and solving the challenge statements in mind. I chose this method to easily ideate and have a decision of the product outcome within a short amount of time."
  }),

  imageHolderCreator({
    imagePath: "CaseStudyNepalAirTrip/design-workshop.png"
  }),


  blockRendererCreator({
    blockHeading: "Our Targets",
    leftNode: [
      paragraphCreator({
        content: "The team collaborated in a google meet to define the challenge through expert interviews. I laid out the past research data and from there we were able to cast our vote to define our top three for the how might we’s. A mapping out activity also helped us to know our target audience and understand the bigger picture of our product concept. This activity filled the gap of the interactions between the end-users and the product."
      })
    ],
    rightNode: [
      blockHeaderCreator({
        content: "How Might We’s",

      }),
      paragraphCreator({
        content: "1 How might we offer major services without hiding other services?"
      }),
      paragraphCreator({
        content: "2 How might we let users create their own tours packages?"
      }),
      paragraphCreator({
        content: "3 How might we get hotel, tour guiding, and vehicles data without depending on API Providers?"
      })
    ]
  }),

  headingWithUnderlineCreator({
    content: "Solutions Sketches"
  }),

  paragraphCreator({
    content: "We are given a couple of hours each to create a mid-fidelity wireframes of our solutions with the given HMWs. This is then posted in our art museum board anonymously to have a non-bias environment during the feedback and voting session."
  }),

  paragraphCreator({
    content: "We each gave critique on every solution on the board through adding post-it stickies. Every one of us was given the chance to cast our voting and share why we liked a specific feature on a solution sketch or find a solution problematic by giving a minute of presentation"
  }),

  imageHolderCreator({
    imagePath: "CaseStudyNepalAirTrip/solution-sketch.png"
  }),

  headingWithUnderlineCreator({
    content: "Decision Making"
  }),

  paragraphCreator({
    content: "The decider or the person with highest stake on the product, where on this case is our founder, casted the final decision and voted on the final solution concept, and two features that should be in our product."
  }),

  secondaryTitleCreator({
    content: "SOLUTIONS"
  }),

  blockHeaderCreator({
    content: "1. Clean Interface & Infinite Scrolling UI’s"
  }),

  paragraphCreator({
    content: "The concept decided was to have a simple and clean interface that could easily be navigated by users by providing minimal fields. In this case, it was discussed to have a sticky sidebar for users to go to different sections or filtering function while being able to scroll infinitely of the different products offered and also the easy filterization procedure on the searching process."
  }),

  imageHolderCreator({
    imagePath: "CaseStudyNepalAirTrip/solutions-1.png"
  }),

  blockHeaderCreator({
    content: "2. Tour Customization Feature"
  }),

  paragraphCreator({
    content: "This was finalized to address the problem with the possibility of having relatively unequal higher conversion of some services compared to others or making other services unnoticed because of the variety of services offered. This also solves the problems with: Have a product functionality that would give them assistance to plan out users trips smoothly and effectively Make the users have the access to cater their trips according to their time without owing to the time constraints of scheduled tours"
  }),

  imageHolderCreator({
    imagePath: "CaseStudyNepalAirTrip/solutions-2.png"
  }),

  blockHeaderCreator({
    content: "3. Sticky Services Navigation Feature"
  }),

  paragraphCreator({
    content: "The Sticky Services Navigation Feature made the problem of easily making the end-users know the services offered by Nepal Air Trip at one swipe and scan. This helps to also have a navigation of different services faster and easier for users."
  }),

  imageHolderCreator({
    imagePath: "CaseStudyNepalAirTrip/solutions-3.png"
  }),

  primaryTitleCreator({
    content: "Design Impact"
  }),

  paragraphCreator({
    content: "I invited both our CEO, who is also in charge of the engineering team, and Nepal Air Trip’s founders for a stakeholders’ meeting, and utilized the Business Model Canvas to help us visualise all the building blocks to understand the business that are relevant to the limitations and opportunities the design team could bring to the product."
  }),

  imageHolderCreator({
    imagePath: "CaseStudyNepalAirTrip/design-impact.png"
  }),

  primaryTitleCreator({
    content: "High-Fidelity"
  }),

  imageHolderCreator({
    imagePath: "CaseStudyNepalAirTrip/01.png"
  }),
  imageHolderCreator({
    imagePath: "CaseStudyNepalAirTrip/02.png"
  }),
  imageHolderCreator({
    imagePath: "CaseStudyNepalAirTrip/03.png"
  }),
  imageHolderCreator({
    imagePath: "CaseStudyNepalAirTrip/04.png"
  }),
  imageHolderCreator({
    imagePath: "CaseStudyNepalAirTrip/05.png"
  }),
  imageHolderCreator({
    imagePath: "CaseStudyNepalAirTrip/06.png"
  }),
  imageHolderCreator({
    imagePath: "CaseStudyNepalAirTrip/07.png"
  }),
  imageHolderCreator({
    imagePath: "CaseStudyNepalAirTrip/08.png"
  }),
]


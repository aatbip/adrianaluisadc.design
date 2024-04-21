import { BlockRenderer } from "@/components/ContentRenderers/Block";
import { BlockHeader } from "@/components/ContentRenderers/BlockHeader";
import { BulletList } from "@/components/ContentRenderers/BulletList";
import { HeaderWithUnderline } from "@/components/ContentRenderers/HeaderWithUnderline";
import { ImageHolder } from "@/components/ContentRenderers/ImageHolder";
import { MainTitle } from "@/components/ContentRenderers/MainTitle";
import { Paragraph } from "@/components/ContentRenderers/Paragraph";
import { PrimaryTitle } from "@/components/ContentRenderers/PrimaryTitle";
import { SecondaryTitle } from "@/components/ContentRenderers/SecondaryTitle";
import { DetailsPageTypes } from "@/types/interfaces";
import { Box } from "@mui/material";
import { notFound } from "next/navigation";

export default function DetailsPage(
  { params }: { params: { type: DetailsPageTypes } }
) {
  if (params.type === DetailsPageTypes.WORK) {
    return (
      <Box pb="20px">
        <MainTitle />
        <SecondaryTitle content="PROJECT OVERVIEW" />
        <Paragraph content="Nepal, with its majestic landscapes and eight of the world's ten highest mountains, including the iconic Mount Everest, stands as a captivating tourist destination in South Asia. Annually attracting over a million tourists, it has become a favored spot for adventurers and nature enthusiasts alike." />
        <Paragraph content="Nepal Air Trip is dedicated to simplifying the travel experience for tourists. As a subsidiary of Nepal Air Business Travels & Tours Pvt. Ltd., a trusted name in Nepalese travel for a decade, they possess a deep understanding of the country's diverse travel landscape. With an eye toward innovation, their business model now integrates advanced technology through the Nepal Air Trip, a web application that provides personalized travel solutions, catering to a wide range of travel accommodation needs across Nepal." />
        <SecondaryTitle content="MY ROLE" />
        <BulletList bulletListItems={[
          "Oversaw and led a design team of two that helped me maintain the design language and system utilizing Atomic Design System.",
          "Competitive Analysis, User Research, Wireframing, Prototyping, and UI design",
          "In charge of the product's identity and branding, which served as a foundation for the brand's aims and values.",
          "Facilitated the cross-functional team's Design Workshop to anchor the team’s prospect."
        ]} />
        <PrimaryTitle content="The Design Process" />
        <ImageHolder imagePath="NepalAirTrip/design-process.png" imageCaption="THE DESIGN PROCESS. This is a caption holder. I write my caption here about the image." />
        <PrimaryTitle content="Discovery" />
        <Paragraph content="I invited both our CEO, who is also in charge of the engineering team, and Nepal Air Trip’s founders for a stakeholders’ meeting, and utilized the Business Model Canvas to help us visualise all the building blocks to understand the business that are relevant to the limitations and opportunities the design team could bring to the product." />
        <ImageHolder imagePath="NepalAirTrip/discovery.png" />
        <Paragraph content="The Business Model Canvas (BMC) identified seven key activities that necessitate thoughtful design consideration. Given the scope and urgency of addressing the challenges associated with these key activities, we found out that there is a pressing need to strategically prioritize and tackle them within the allotted timeframe." />
        <SecondaryTitle content="RESEARCH & ANALYSIS" />
        <PrimaryTitle content="Understanding the Users" />
        <Paragraph content="I conducted a qualitative survey to have an initial insight of the perceptions of the potential users about their traveling experience. Using the stratified random sampling methodology from 16 participants of ages from 18-64 years old from countries of Philippines (37.5%), India (25%) and Nepal (37.5%). the following are the results of the survey:" />
        <BlockRenderer
          blockHeading="Tourists behavior on traveling"
          leftNode={
            <Box>
              <BlockHeader content="Observation" />
              <BulletList bulletListItems={[
                "Often travels only once a year and once every 6 months to the very most",
                "Plan out their trips within a month or as short as a week before the travel date",
                "Mostly travel with friends, by family, and spouse",
                "Wants the democracy to cater their own trip or travel packages as they wish",
                "Looks for best accommodations and transportations",
                "Prefers to travel by car, followed by flight, bus, and motorcycle"
              ]}
              />
            </Box>
          }
          rightNode={
            <Box>
              <BlockHeader content="Pain Points" />
              <BulletList bulletListItems={[
                "Lack of time for travel planning",
                "No ideas on where and how to seek for travel destinations that matches their budget, time and locations",
                "No contacts for transportation services in local areas",
                "Poor accommodations while traveling",
                "Lack of support in time of possible distress and emergencies"
              ]}
              />
            </Box>
          }
        />
        <SecondaryTitle content="IDEATE SOLUTIONS" />
        <PrimaryTitle content="Design Workshop" />
        <Paragraph content="I facilited Two Days Design Workshop, inviting stakeholders and the design team to join. We conducted various activities with the goal of finding problems fast and solving the challenge statements in mind. I chose this method to easily ideate and have a decision of the product outcome within a short amount of time." />
        <ImageHolder imagePath="NepalAirTrip/design-workshop.png" />
        <BlockRenderer
          blockHeading="Our Targets"
          leftNode={
            <Box>
              <Paragraph content="The team collaborated in a google meet to define the challenge through expert interviews. I laid out the past research data and from there we were able to cast our vote to define our top three for the how might we’s. A mapping out activity also helped us to know our target audience and understand the bigger picture of our product concept. This activity filled the gap of the interactions between the end-users and the product." />
            </Box>
          }
          rightNode={
            <Box>
              <BlockHeader content="How Might We’s" />
              <Paragraph content="1 How might we offer major services without hiding other services?" />
              <Paragraph content="2 How might we let users create their own tours packages?" />
              <Paragraph content="3 How might we get hotel, tour guiding, and vehicles data without depending on API Providers?" />
            </Box>
          }
        />

        <HeaderWithUnderline content="Solutions Sketches" />
        <Paragraph content="We are given a couple of hours each to create a mid-fidelity wireframes of our solutions with the given HMWs. This is then posted in our art museum board anonymously to have a non-bias environment during the feedback and voting session." />
        <Paragraph content="We each gave critique on every solution on the board through adding post-it stickies. Every one of us was given the chance to cast our voting and share why we liked a specific feature on a solution sketch or find a solution problematic by giving a minute of presentation" />
        <ImageHolder imagePath="NepalAirTrip/solution-sketch.png" />
        <HeaderWithUnderline content="Decision Making" />
        <Paragraph content="The decider or the person with highest stake on the product, where on this case is our founder, casted the final decision and voted on the final solution concept, and two features that should be in our product." />
        <SecondaryTitle content="SOLUTIONS" />
        <BlockHeader content="1. Clean Interface & Infinite Scrolling UI’s" />
        <Paragraph content="The concept decided was to have a simple and clean interface that could easily be navigated by users by providing minimal fields. In this case, it was discussed to have a sticky sidebar for users to go to different sections or filtering function while being able to scroll infinitely of the different products offered and also the easy filterization procedure on the searching process." />
        <ImageHolder imagePath="NepalAirTrip/solutions-1.png" />
        <BlockHeader content="2. Tour Customization Feature" />
        <Paragraph content="This was finalized to address the problem with the possibility of having relatively unequal higher conversion of some services compared to others or making other services unnoticed because of the variety of services offered. This also solves the problems with:
        Have a product functionality that would give them assistance to plan out users trips smoothly and effectively
        Make the users have the access to cater their trips according to their time without owing to the time constraints of scheduled tours" />
        <ImageHolder imagePath="NepalAirTrip/solutions-2.png" />
        <BlockHeader content="3. Sticky Services Navigation Feature" />
        <Paragraph content="The Sticky Services Navigation Feature made the problem of easily making the end-users know the services offered by Nepal Air Trip at one swipe and scan. This helps to also have a navigation of different services faster and easier for users." />
        <ImageHolder imagePath="NepalAirTrip/solutions-3.png" />
        <PrimaryTitle content="Design Impact" />
        <Paragraph content="I invited both our CEO, who is also in charge of the engineering team, and Nepal Air Trip’s founders for a stakeholders’ meeting, and utilized the Business Model Canvas to help us visualise all the building blocks to understand the business that are relevant to the limitations and opportunities the design team could bring to the product." />
        <ImageHolder imagePath="NepalAirTrip/design-impact.png" />
        <PrimaryTitle content="High-Fidelity" />
      </Box>
    )
  }

  else if (params.type === DetailsPageTypes.UI_STUDIES) {
    return (
      <h1>UI Studies</h1>
    )
  }

  else return notFound()
}

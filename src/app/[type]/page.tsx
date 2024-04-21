import { BulletList } from "@/components/ContentRenderers/BulletList";
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
      <Box>
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

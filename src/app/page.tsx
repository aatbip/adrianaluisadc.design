import { CardsListSection } from "./ui/CardsListSection";
import { SecondaryHeader } from "@/components/Layouts/SecondaryHeader";
import { allWorks } from "@/data/allWorks";
import { uiExplorations } from "@/data/uiExplorations";
import { DetailsPageTypes } from "@/types/interfaces";
import { caseStudies } from "@/data/caseStudies";
import { StyledDivider } from "@/components/Styled/StyledDivider";

export default function Page() {
  return (
    <>
      <SecondaryHeader />
      <CardsListSection id={DetailsPageTypes.CASE_STUDIES} cardData={caseStudies} cardTitle={'Case Studies'} type={DetailsPageTypes.CASE_STUDIES} />
      <StyledDivider />
      <CardsListSection id={DetailsPageTypes.ALL_WORKS} cardData={allWorks} cardTitle={'Projects'} type={DetailsPageTypes.ALL_WORKS} />
      <StyledDivider />
      <CardsListSection id={DetailsPageTypes.UI_EXPLORATIONS} cardData={uiExplorations} cardTitle={'UI Explorations'} type={DetailsPageTypes.UI_EXPLORATIONS} />
      <StyledDivider />
      <div style={{padding: "20px 0px 20px 0px", display: "flex",justifyContent: "space-between"}}>
      <p style={{
        
        color: "#7D7D7D",
      }}> Adriana Dela Cruz © All Rights Reserved 2024 </p>
      <p style={{
        
        color: "#7D7D7D",
      }}> adrianaluisadelacruz@gmail.com </p>
      </div>
    </>
  );
}

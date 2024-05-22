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
      <CardsListSection cardData={caseStudies} cardTitle={'Case Studies'} type={DetailsPageTypes.CASE_STUDIES} />
      <StyledDivider/>
      <CardsListSection cardData={allWorks} cardTitle={'All Works'} type={DetailsPageTypes.ALL_WORKS} />
      <StyledDivider/>
      <CardsListSection cardData={uiExplorations} cardTitle={'UI Explorations'} type={DetailsPageTypes.UI_EXPLORATIONS} />
      <StyledDivider/>
    </>
  );
}

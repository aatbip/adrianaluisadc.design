import { CardsListSection } from "./ui/CardsListSection";
import { SecondaryHeader } from "@/components/Layouts/SecondaryHeader";
import { allWorks } from "@/data/allWorks";
import { uiStudies } from "@/data/uiStudies";
import { DetailsPageTypes } from "@/types/interfaces";
import { caseStudies } from "@/data/caseStudies";
import { StyledDivider } from "@/components/Styled/StyledDivider";

export default function Page() {
  return (
    <>
      <SecondaryHeader />
      <CardsListSection cardData={caseStudies} cardTitle={'Case Studies'} type={DetailsPageTypes.CASE_STUDIES} />
      <StyledDivider/>
      <CardsListSection cardData={allWorks} cardTitle={'All Works'} type={DetailsPageTypes.WORK} />
      <StyledDivider/>
      <CardsListSection cardData={uiStudies} cardTitle={'UI Explorations'} type={DetailsPageTypes.UI_STUDIES} />
      <StyledDivider/>
    </>
  );
}

import { CardsListSection } from "./ui/CardsListSection";
import { SecondaryHeader } from "@/components/Layouts/SecondaryHeader";
import { works } from "@/data/works";
import { uiStudies } from "@/data/uiStudies";
import { DetailsPageTypes } from "@/types/interfaces";
import { caseStudies } from "@/data/caseStudies";


export default function Page() {
  return (
    <>
      <SecondaryHeader />
      <CardsListSection cardData={caseStudies} cardTitle={'Case Studies'} type={DetailsPageTypes.CASE_STUDIES} />
      <CardsListSection cardData={works} cardTitle={'Works'} type={DetailsPageTypes.WORK} />
      <CardsListSection cardData={uiStudies} cardTitle={'UI Studies'} type={DetailsPageTypes.UI_STUDIES} />
    </>
  );
}

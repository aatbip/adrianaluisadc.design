import { Box } from "@mui/material";
import { CardsListSection } from "./ui/CardsListSection";
import { SecondaryHeader } from "@/components/Layouts/SecondaryHeader";
import { works } from "@/data/works";
import { uiStudies } from "@/data/uiStudies";
import { DetailsPageTypes } from "@/types/interfaces";


export default function Home() {
  return (
    <Box>
      <SecondaryHeader />
      <CardsListSection cardData={works} cardTitle={'Works'} type={DetailsPageTypes.WORK} />
      <CardsListSection cardData={uiStudies} cardTitle={'UI Studies'} type={DetailsPageTypes.UI_STUDIES} />
    </Box>
  );
}

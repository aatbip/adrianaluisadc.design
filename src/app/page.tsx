import { Box } from "@mui/material";
import { CardsListSection } from "./ui/CardsListSection";
import { SecondaryHeader } from "@/components/Layouts/SecondaryHeader";
import { works } from "@/data/works";
import { uiStudies } from "@/data/uiStudies";


export default function Home() {
  return (
    <Box>
      <SecondaryHeader />
      <CardsListSection cardData={works} cardTitle={'Works'} />
      <CardsListSection cardData={uiStudies} cardTitle={'UI Studies'} />
    </Box>
  );
}

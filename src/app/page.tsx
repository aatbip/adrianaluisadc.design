import { Box } from "@mui/material";
import { WorkSection } from "./ui/WorkSection";
import { SecondaryHeader } from "@/components/Layouts/SecondaryHeader";


export default function Home() {
  return (
    <>
      <Box>
        <SecondaryHeader />
        <WorkSection />
      </Box>
    </>
  );
}

import { RendererMatcher } from "@/components/ContentRenderers/RendererMatcher";
import { content } from "@/data/NepalAirTrip/content";
import { DetailsPageTypes } from "@/types/interfaces";
import { Box } from "@mui/material";
import { notFound } from "next/navigation";
// import fs from "fs"
// import path from "path";

// function fetchContent(fileName: string) {
//   const filePath = path.join(process.cwd(), `src/data/${fileName}/content.tsx`);
//   const fileContent = fs.readFileSync(filePath, "utf-8");
//   return fileContent;
// }

export default async function DetailsPage(
  { params }: { params: { type: DetailsPageTypes, pathName: string; } }
) {

  import(`./../../../data/${params.pathName}/content.tsx`).then(img => console.log('img', img))


  if (params.type === DetailsPageTypes.WORK) {
    return (
      <Box pb="20px">
        <RendererMatcher content={content} />
      </Box>
    )
  }

  else if (params.type === DetailsPageTypes.UI_STUDIES) {
    return (
      <Box pb="20px">
        <RendererMatcher content={content} />
      </Box>
    )
  }

  else return notFound()
}

import { RendererMatcher } from "@/components/ContentRenderers/RendererMatcher";
import { DetailsPageTypes } from "@/types/interfaces";
import { Box } from "@mui/material";
import { notFound } from "next/navigation";

async function getFile(pathName: string) {
  const file = await import(`./../../../data/${pathName}/content`);

  const content = file.content;

  return content;
}

export default async function DetailsPage(
  { params }: { params: { type: DetailsPageTypes, pathName: string; } }
) {

  const content = await getFile(params.pathName)

  if (params.type === DetailsPageTypes.ALL_WORKS) {
    return (
      <Box pb="20px" minHeight="80vh">
        <RendererMatcher content={content} />
      </Box>
    )
  }

  else if (params.type === DetailsPageTypes.UI_EXPLORATIONS) {
    return (
      <Box pb="20px" minHeight="80vh">
        <RendererMatcher content={content} />
      </Box>
    )
  }

  else if (params.type === DetailsPageTypes.CASE_STUDIES) {
    return (
      <Box pb="20px" minHeight="80vh">
        <RendererMatcher content={content} />
      </Box>
    )
  }

  else return notFound()
}

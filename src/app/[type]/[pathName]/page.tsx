import { RendererMatcher } from "@/components/ContentRenderers/RendererMatcher";
import { DetailsPageTypes } from "@/types/interfaces";
import { Box } from "@mui/material";
import { notFound } from "next/navigation";

export default async function DetailsPage(
  { params }: { params: { type: DetailsPageTypes, pathName: string; } }
) {

  async function handler() {
    const file = await import(`./../../../data/${params.pathName}/content`);

    const content = file.content;

    return content;
  }

  const content = await handler();

  if (params.type === DetailsPageTypes.WORK) {
    return (
      <Box pb="20px" minHeight="80vh">
        <RendererMatcher content={content} />
      </Box>
    )
  }

  else if (params.type === DetailsPageTypes.UI_STUDIES) {
    return (
      <Box pb="20px" minHeight="80vh">
        <RendererMatcher content={content} />
      </Box>
    )
  }

  else return notFound()
}

export const revalidate = 0
export const dynamic = 'force-dynamic'

import { RendererMatcher } from "@/components/ContentRenderers/RendererMatcher";
import { DetailsPageMargin } from "@/hoc/DetailsPageMargin";
import { DetailsPageTypes } from "@/types/interfaces";
import { notFound } from "next/navigation";
import { DetailsPageNameHeader } from "./ui/DetailsPageNameHeader";
import { Box } from "@mui/material";


async function getFile(pathName: string) {
  try {
    const file = await import(`./../../data/${pathName}/content`);
    return file.content;
  } catch (error) {
    console.error("Error loading content file:", error);
    return null;
  }
}


export default async function DetailsPage(
  { searchParams }: { searchParams: { type: DetailsPageTypes, pathName: string; } }
) {
  const content = await getFile(searchParams.pathName);

  if (!content) {
    return notFound()
  }

  if (searchParams.type === DetailsPageTypes.ALL_WORKS) {
    return (
      <DetailsPageMargin>
        <DetailsPageNameHeader name="All Works" />
        <RendererMatcher content={content} />
      </DetailsPageMargin>
    )
  }

  if (searchParams.type === DetailsPageTypes.UI_EXPLORATIONS) {
    return (
      <DetailsPageMargin>
        <DetailsPageNameHeader name="UI Explorations" />
        <RendererMatcher content={content} />
      </DetailsPageMargin>
    )
  }

  if (searchParams.type === DetailsPageTypes.CASE_STUDIES) {
    return (
      <DetailsPageMargin>
        <DetailsPageNameHeader name="Case Studies" />
        <RendererMatcher content={content} />
      </DetailsPageMargin>
    )
  }

}

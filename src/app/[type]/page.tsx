import { DetailsPageTypes } from "@/types/interfaces";
import { notFound } from "next/navigation";

export default function DetailsPage(
  { params }: { params: { type: DetailsPageTypes } }
) {
  if (params.type === DetailsPageTypes.WORK) {
    return (
      <h1>Work</h1>
    )
  }

  else if (params.type === DetailsPageTypes.UI_STUDIES) {
    return (
      <h1>UI Studies</h1>
    )
  }

  else return notFound()
}

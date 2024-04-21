import { DetailsPageTypes } from "@/types/interfaces";
import { notFound } from 'next/navigation'
import { DetailsPageNameHeader } from "./ui/DetailsPageNameHeader";
import { DetailsPageMargin } from "@/hoc/DetailsPageMargin";

export default function Layout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: { type: DetailsPageTypes; }
}>) {
  if (params.type === DetailsPageTypes.WORK) {
    return (
      <DetailsPageMargin>
        <DetailsPageNameHeader name="Works" />
        {children}
      </DetailsPageMargin>
    )
  }

  else if (params.type === DetailsPageTypes.UI_STUDIES) {
    return (
      <DetailsPageMargin>
        <DetailsPageNameHeader name="UI Studies" />
        {children}
      </DetailsPageMargin>
    )
  }

  else return notFound()
}

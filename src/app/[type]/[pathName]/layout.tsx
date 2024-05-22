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
  if (params.type === DetailsPageTypes.ALL_WORKS) {
    return (
      <DetailsPageMargin>
        <DetailsPageNameHeader name="All Works" />
        {children}
      </DetailsPageMargin>
    )
  }

  else if (params.type === DetailsPageTypes.UI_EXPLORATIONS) {
    return (
      <DetailsPageMargin>
        <DetailsPageNameHeader name="UI Explorations" />
        {children}
      </DetailsPageMargin>
    )
  }

  else if (params.type === DetailsPageTypes.CASE_STUDIES) {
    return (
      <DetailsPageMargin>
        <DetailsPageNameHeader name="Case Studies" />
        {children}
      </DetailsPageMargin>
    )
  }

  else return notFound()
}

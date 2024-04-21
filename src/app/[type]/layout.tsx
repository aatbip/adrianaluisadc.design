import { DetailsPageTypes } from "@/types/interfaces";
import { notFound } from 'next/navigation'
import { DetailsPageNameHeader } from "./ui/DetailsPageNameHeader";

export default function Layout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: { type: DetailsPageTypes; }
}>) {
  if (params.type === DetailsPageTypes.WORK) {
    return (
      <>
        <DetailsPageNameHeader name="Works" />
        {children}
      </>
    )
  }

  else if (params.type === DetailsPageTypes.UI_STUDIES) {
    return (
      <>
        <DetailsPageNameHeader name="UI Studies" />
        {children}
      </>
    )
  }

  else return notFound()
}

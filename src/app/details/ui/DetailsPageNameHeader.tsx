'use client'

import { ColoredArrowBack } from "@/components/Styled/ColoredArrow"
import { TypographyWithPrimaryTextColor } from "@/components/Styled/TypographyWithPrimaryTextColor"
import { Stack, Box } from "@mui/material"
import Link from "next/link"

export const DetailsPageNameHeader = ({ name }: { name: string }) => {
  return (
    <Link href="/">
      <Stack direction="row" alignItems="center" columnGap={2.5} m="10px 0px" className="link">
        <Box mt="5px"><ColoredArrowBack fontSize="small" /></Box>
        <TypographyWithPrimaryTextColor variant="capsSm">{name}</TypographyWithPrimaryTextColor>
      </Stack>
    </Link>
  )
}

import { TypographyVariation2 } from "@/components/Styled/TypographyVariation2";
import { Box } from "@mui/material"

export const PrimaryTitle = ({ content }: { content: string; }) => {
  return (
    <Box m="64px 0px 40px 0px">
      <TypographyVariation2 variant="heading4">{content}</TypographyVariation2>
    </Box>
  )
}

import { TypographyWithSecondaryTextColor } from "@/components/Styled/TypographyWithSecondaryTextColor"
import { Box } from "@mui/material"

export const SecondaryTitle = ({ content }: { content: string }) => {
  return (
    <Box m="40px 0px">
      <TypographyWithSecondaryTextColor variant="capsMd">{content}</TypographyWithSecondaryTextColor>
    </Box>
  )
}

import { BasicCard } from "@/components/Cards/BasicCard";
import { TypographyWithPrimaryTextColor } from "@/components/Styled/TypographyWithPrimaryTextColor"
import { IBasicCardProps } from "@/types/interfaces";
import { Box } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2';

export const CardsListSection = ({ cardData, cardTitle }: { cardData: IBasicCardProps[], cardTitle: string; }) => {
  return (
    <Box p="54px 0px">
      <TypographyWithPrimaryTextColor variant="capsXlg">{cardTitle}</TypographyWithPrimaryTextColor>
      <Grid container rowSpacing={10} columnSpacing={5} mt="40px">
        {
          cardData.map(data => {
            return (
              <Grid xs={12} md={6} lg={4}>
                <BasicCard caption={data.caption} title={data.title} imagePath={data.imagePath} />
              </Grid>
            )
          })
        }
      </Grid>
    </Box>
  )
}

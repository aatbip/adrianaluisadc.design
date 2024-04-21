import { BasicCard } from "@/components/Cards/BasicCard";
import { TypographyWithPrimaryTextColor } from "@/components/Styled/TypographyWithPrimaryTextColor"
import { DetailsPageTypes, IBasicCardProps } from "@/types/interfaces";
import { Box } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2';
import Link from "next/link";

export const CardsListSection = ({ cardData, cardTitle, type }: { cardData: IBasicCardProps[], cardTitle: string; type: DetailsPageTypes }) => {

  return (
    <Box p="54px 0px">
      <TypographyWithPrimaryTextColor variant="capsXlg">{cardTitle}</TypographyWithPrimaryTextColor>
      <Grid container rowSpacing={10} columnSpacing={5} mt="40px">
        {
          cardData.map(data => {
            return (
              <Link href={`/${type === DetailsPageTypes.WORK ? 'work' : 'ui-studies'}/${data.pathName}`}>
                <Grid xs={12} md={6} lg={4}>
                  <BasicCard caption={data.caption} title={data.title} imagePath={data.imagePath} />
                </Grid>
              </Link>
            )
          })
        }
      </Grid>
    </Box>
  )
}

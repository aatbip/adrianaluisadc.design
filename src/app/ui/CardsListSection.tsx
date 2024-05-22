'use client'

import { BasicCard } from "@/components/Cards/BasicCard";
import { TypographyWithPrimaryTextColor } from "@/components/Styled/TypographyWithPrimaryTextColor"
import { DetailsPageTypes, IBasicCardProps } from "@/types/interfaces";
import { Box } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2';
import Link from "next/link";

export const CardsListSection = ({ cardData, cardTitle, type }: { cardData: IBasicCardProps[], cardTitle: string; type: DetailsPageTypes }) => {

  return (
    <Box p="54px 0px">
      <TypographyWithPrimaryTextColor variant="capsXlg" sx={{
        letterSpacing:"4px"
      }}>{cardTitle}</TypographyWithPrimaryTextColor>
      <Grid container rowSpacing={10} columnSpacing={5} mt="40px" >
        {
          cardData.map((data, key) => {
            return (
              <Grid key={key} xs={12} md={6} lg={4}>
                <Link href={`/${type === DetailsPageTypes.ALL_WORKS ? 'all-works' : type === DetailsPageTypes.CASE_STUDIES ? 'case-studies' : 'ui-explorations'}/${data.pathName}`}>
                  <BasicCard caption={data.caption} title={data.title} imagePath={data.imagePath} />
                </Link>
              </Grid>
            )
          })
        }
      </Grid>
    </Box>
  )
}

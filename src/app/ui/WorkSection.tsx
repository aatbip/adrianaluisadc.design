import { BasicCard } from "@/components/Cards/BasicCard";
import { TypographyWithPrimaryTextColor } from "@/components/Styled/TypographyWithPrimaryTextColor"
import { Box } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2';

export const WorkSection = () => {
  return (
    <Box p="54px 0px">
      <TypographyWithPrimaryTextColor variant="capsXlg">Works</TypographyWithPrimaryTextColor>
      <Grid container rowSpacing={10} columnSpacing={5} mt="40px">
        <Grid xs={12} md={6} lg={4}>
          <BasicCard />
        </Grid>
        <Grid xs={12} md={6} lg={4}>
          <BasicCard />
        </Grid>
        <Grid xs={12} md={6} lg={4}>
          <BasicCard />
        </Grid>
        <Grid xs={12} md={6} lg={4}>
          <BasicCard />
        </Grid>
      </Grid>
    </Box>
  )
}

"use client";

import { BasicCard } from "@/components/Cards/BasicCard";
import { TypographyWithPrimaryTextColor } from "@/components/Styled/TypographyWithPrimaryTextColor";
import { DetailsPageTypes, IBasicCardProps } from "@/types/interfaces";
import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useRouter } from "next/navigation";

export const CardsListSection = ({
  cardData,
  cardTitle,
  type,
  id,
}: {
  id: string;
  cardData: IBasicCardProps[];
  cardTitle: string;
  type: DetailsPageTypes;
}) => {
  const router = useRouter();

  const handleCardClick = (data: IBasicCardProps) => {
    router.push(`/details?type=${type}&pathName=${data.pathName}`);
  };

  return (
    <Box p="54px 0px" id={id}>
      <TypographyWithPrimaryTextColor
        variant="capsXlg"
        sx={{
          letterSpacing: "4px",
        }}
      >
        {cardTitle}
      </TypographyWithPrimaryTextColor>
      <Grid container rowSpacing={10} columnSpacing={5} mt="40px">
        {cardData.map((data, key) => {
          return (
            <Grid key={key} xs={12} md={6} lg={4}>
              <Box onClick={() => handleCardClick(data)}>
                <BasicCard
                  caption={data.caption}
                  title={data.title}
                  imagePath={data.imagePath}
                />
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

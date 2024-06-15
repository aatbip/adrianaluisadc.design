"use client";

import { TypographyVariation2 } from "@/components/Styled/TypographyVariation2";
import { Box } from "@mui/material";

export const Paragraph = ({ content }: { content: string }) => {
  return (
    <Box mb="35px">
      <TypographyVariation2 variant="Body Reg">{content}</TypographyVariation2>
    </Box>
  );
};

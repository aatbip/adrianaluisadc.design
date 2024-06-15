"use client";

import { TypographyVariation2 } from "@/components/Styled/TypographyVariation2";
import { Box } from "@mui/material";

export const HeaderWithUnderline = ({ content }: { content: string }) => {
  return (
    <Box
      mb={5}
      sx={{
        borderBottom: (theme) => `1px solid ${theme.color.outline}`,
      }}
    >
      <Box pb="24px">
        <TypographyVariation2 variant="heading6">
          {content}
        </TypographyVariation2>
      </Box>
    </Box>
  );
};

"use client";

import { Box } from "@mui/material";
import { ReactNode } from "react";

export const DetailsPageMargin = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      sx={{
        padding: {
          xs: "0px 0px",
          md: "0px 80px 20px 80px",
          lg: "0px 200px 20px 200px",
        },
        minHeight: "80vh",
      }}
    >
      {children}
    </Box>
  );
};

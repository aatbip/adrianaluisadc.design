"use client";

import { Box } from "@mui/material";
import { ReactNode } from "react";

export const AppMargin = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      sx={{
        padding: { xs: "0px 20px", md: "0px 40px" },
      }}
    >
      {children}
    </Box>
  );
};

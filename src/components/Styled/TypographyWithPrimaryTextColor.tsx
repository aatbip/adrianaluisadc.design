"use client";

import { Typography, styled } from "@mui/material";

export const TypographyWithPrimaryTextColor = styled(Typography)(
  ({ theme }) => ({
    color: theme.color.text.primary,
  }),
);

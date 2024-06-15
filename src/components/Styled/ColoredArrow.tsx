"use client";

import { ArrowBack } from "@mui/icons-material";
import { styled } from "@mui/material";

export const ColoredArrowBack = styled(ArrowBack)(({ theme }) => ({
  color: theme.color.text.primary,
}));

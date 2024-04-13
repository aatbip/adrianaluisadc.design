import { Box, Stack } from "@mui/material";
import { TypographyWithSecondaryTextColor } from "../Styled/TypographyWithSecondaryTextColor";
import { ArrowUpRightHoveredIcon, ArrowUpRightHoveredLightThemeIcon, ArrowUpRightIcon } from "@/icons";
import { useState } from "react";
import { AnimateUnderline } from "../Styled/AnimateUnderline";
import { useAppState } from "@/hooks/useAppState";
import { ThemeMode } from "@/types/interfaces";

interface Prop {
  content: string;
  handleClick: () => void;
}

export const CTAButton = ({ content, handleClick }: Prop) => {
  const [isHovered, setIsHovered] = useState(false);
  const themeMode = useAppState()?.themeMode

  return (
    <AnimateUnderline>
      <Stack
        direction="row"
        columnGap="11px"
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="link"
      >
        <TypographyWithSecondaryTextColor
          sx={{
            color: (theme) =>
              isHovered ? theme.color.text.primary : theme.color.text.secondary,
          }}
        >
          {content}
        </TypographyWithSecondaryTextColor>
        {!isHovered && <Box><ArrowUpRightIcon /></Box>}
        {isHovered && themeMode === ThemeMode.DARK && <Box><ArrowUpRightHoveredIcon /></Box>}
        {isHovered && themeMode === ThemeMode.LIGHT && <Box><ArrowUpRightHoveredLightThemeIcon /></Box>}
      </Stack>
    </AnimateUnderline>
  );
};


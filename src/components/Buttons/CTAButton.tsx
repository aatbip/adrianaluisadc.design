import { Box, Stack } from "@mui/material";
import { TypographyWithSecondaryTextColor } from "../Styled/TypographyWithSecondaryTextColor";
import { ArrowUpRightHoveredIcon, ArrowUpRightIcon } from "@/icons";
import { useState } from "react";
import { AnimateUnderline } from "../Styled/AnimateUnderline";

interface Prop {
  content: string;
  handleClick: () => void;
}

export const CTAButton = ({ content, handleClick }: Prop) => {
  const [isHovered, setIsHovered] = useState(false);

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
        {isHovered && <Box><ArrowUpRightHoveredIcon /></Box>}
      </Stack>
    </AnimateUnderline>
  );
};


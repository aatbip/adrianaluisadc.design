import { Box, Stack } from "@mui/material";
import { TypographyWithSecondaryTextColor } from "../Styled/TypographyWithSecondaryTextColor";
import { ArrowUpRightHoveredIcon, ArrowUpRightIcon } from "@/icons";
import { useState } from "react";

interface Prop {
  content: string;
  handleClick: () => void;
}

export const CTAButton = ({ content, handleClick }: Prop) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Stack
      direction="row"
      columnGap="11px"
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{
        display: "inline-flex",
        position: "relative",
        color: "#0087ca",
        "&::after": {
          content: '""',
          position: "absolute",
          width: "100%",
          transform: "scaleX(0)",
          height: "2px",
          bottom: 0,
          left: 0,
          backgroundColor: "#FAFAFA",
          transformOrigin: "center",
          transition: "transform 0.25s ease-out",
        },
        ":hover::after": {
          transform: "scaleX(1)",
          transformOrigin: "center",
        },
      }}
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
  );
};


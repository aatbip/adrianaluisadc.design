import { styled, Box } from "@mui/material"

export const AnimateUnderline = styled(Box)({
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
})

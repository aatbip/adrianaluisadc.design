"use client";

import { Box, Stack, styled } from "@mui/material";
import { TypographyWithSecondaryTextColor } from "../Styled/TypographyWithSecondaryTextColor";
import { MoonBrightIcon, NavigationIcon, SunBrightIcon } from "@/icons";
import { useAppState } from "@/hooks/useAppState";
import { DetailsPageTypes, ThemeMode } from "@/types/interfaces";
import { AnimateUnderline } from "../Styled/AnimateUnderline";
import Link from "next/link";
import { handleScrollToElement } from "@/utils/handleScrollToElement";

export const Header = () => {
  const appState = useAppState();

  const DynamicDisplayTypography = styled(TypographyWithSecondaryTextColor)({
    display: appState?.isVisibleSecondaryHeaderCTAButton ? "none" : "block",
  });

  return (
    <Stack
      direction="row"
      p="24px 0px"
      justifyContent="space-between"
      sx={{
        borderBottom: (theme) => `1px solid ${theme.color.outline}`,
        position: "sticky",
        width: "100%",
        top: 0,
        left: 0,
        zIndex: 999,
        background: (theme) => theme.color.background.primary,
        mb: "34px",
      }}
      alignItems="center"
    >
      <Link href="/">
        <TypographyWithSecondaryTextColor variant="capsSm">
          Adriana Luisa Dela Cruz{" "}
          <span style={{ margin: "0px 12px" }}>&#x2022;</span>UX Designer
        </TypographyWithSecondaryTextColor>
      </Link>

      <Stack direction="row" columnGap={10}>
        <AnimateUnderline
          className="link"
          sx={{
            "@media (max-width:768px)": {
              display: "none",
            },
          }}
          onClick={() => handleScrollToElement(DetailsPageTypes.CASE_STUDIES)}
        >
          <DynamicDisplayTypography variant="capsSm">
            Case Studies
          </DynamicDisplayTypography>
        </AnimateUnderline>

        <AnimateUnderline
          className="link"
          sx={{
            "@media (max-width:600px)": {
              display: "none",
            },
          }}
          onClick={() => handleScrollToElement(DetailsPageTypes.ALL_WORKS)}
        >
          <DynamicDisplayTypography variant="capsSm">
            Projects
          </DynamicDisplayTypography>
        </AnimateUnderline>

        <AnimateUnderline
          className="link"
          sx={{
            "@media (max-width:600px)": {
              display: "none",
            },
          }}
          onClick={() =>
            handleScrollToElement(DetailsPageTypes.UI_EXPLORATIONS)
          }
        >
          <DynamicDisplayTypography variant="capsSm">
            UI Explorations
          </DynamicDisplayTypography>
        </AnimateUnderline>

        <AnimateUnderline
          className="link"
          sx={{
            "@media (max-width:600px)": {
              display: "none",
            },
          }}
        >
          <DynamicDisplayTypography variant="capsSm">
            Resume
          </DynamicDisplayTypography>
        </AnimateUnderline>
        <Link href={"https://linkedin.com/in/adrianaluisadc"} target="__blank">
          <AnimateUnderline
            className="link"
            sx={{
              "@media (max-width:768px)": {
                display: "none",
              },
            }}
          >
            <TypographyWithSecondaryTextColor variant="capsSm">
              LinkedIn
            </TypographyWithSecondaryTextColor>
          </AnimateUnderline>
        </Link>
        <Link href={"https://www.behance.net/adrianaluisadc"} target="__blank">
          <AnimateUnderline
            className="link"
            sx={{
              "@media (max-width:768px)": {
                display: "none",
              },
            }}
          >
            <TypographyWithSecondaryTextColor variant="capsSm">
              Behance
            </TypographyWithSecondaryTextColor>
          </AnimateUnderline>
        </Link>
        <Box
          className="link"
          onClick={() =>
            appState?.setAppState((prev) => ({
              ...prev,
              themeMode:
                appState?.themeMode === ThemeMode.DARK
                  ? ThemeMode.LIGHT
                  : ThemeMode.DARK,
            }))
          }
          sx={{
            "@media (max-width:768px)": {
              display: "none",
            },
          }}
        >
          {appState?.themeMode === ThemeMode.DARK ? (
            <SunBrightIcon />
          ) : (
            <MoonBrightIcon />
          )}
        </Box>

        <Box
          sx={{
            display: "none",
            "@media (max-width:768px)": {
              display: "block",
            },
          }}
        >
          <NavigationIcon />
        </Box>
      </Stack>
    </Stack>
  );
};

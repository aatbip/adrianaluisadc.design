"use client";

import React, { useState, useEffect } from "react";
import { TypographyVariation2 } from "@/components/Styled/TypographyVariation2";
import { Box, Stack } from "@mui/material";
import Image from "next/image";

export const ImageHolder = ({
  imagePath,
  imageCaption,
  noMargin,
}: {
  imagePath: string;
  imageCaption?: string;
  noMargin?: boolean;
}) => {
  const [img, setImg] = useState<string | null>(null);

  useEffect(() => {
    import(`./../../../data/${imagePath}`).then((img) =>
      setImg(img.default.src),
    );
  }, [imagePath]);

  return (
    <Box mb={(noMargin && "40px") || "0px"}>
      <Stack direction="column" rowGap={4}>
        {img && (
          <Image
            src={img}
            style={{
              width: "100%",
              height: "auto",
            }}
            alt="adc-images"
            width={800}
            height={800}
            loading="lazy"
            quality={100}
          />
        )}
        {imageCaption && (
          <TypographyVariation2 variant="Subtitle Text">
            {imageCaption}
          </TypographyVariation2>
        )}
      </Stack>
    </Box>
  );
};

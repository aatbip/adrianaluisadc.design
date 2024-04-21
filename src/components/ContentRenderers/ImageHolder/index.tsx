'use client'

import React, { useState, useEffect } from 'react';
import { TypographyVariation2 } from "@/components/Styled/TypographyVariation2"
import { Stack } from "@mui/material"

export const ImageHolder = ({ imagePath, imageCaption }: { imagePath: string; imageCaption?: string; }) => {

  const [img, setImg] = useState<string | null>(null);

  useEffect(() => {
    import(`./../../../data/${imagePath}`).then(img => setImg(img.default.src))
  }, [imagePath])

  return (
    <Stack direction="column" rowGap={4}>
      {img && (
        <img
          src={img}
          style={{
            width: '100%',
            height: 'auto'
          }}
          alt="image"
        />
      )}
      {imageCaption && (
        <TypographyVariation2 variant="Subtitle Text">{imageCaption}</TypographyVariation2>
      )}
    </Stack>
  );
};


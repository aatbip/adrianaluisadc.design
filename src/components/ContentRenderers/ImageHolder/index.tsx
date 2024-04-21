'use client'

import React, { useState, useEffect } from 'react';
import { TypographyVariation2 } from "@/components/Styled/TypographyVariation2"
import { Box, Stack } from "@mui/material"
import Image from 'next/image';

export const ImageHolder = ({ imagePath, imageCaption }: { imagePath: string; imageCaption?: string; }) => {

  const [img, setImg] = useState<string | null>(null);

  useEffect(() => {
    import(`./../../../data/${imagePath}`).then(img => setImg(img.default.src))
  }, [imagePath])

  return (
    <Box mb="40px">
      <Stack direction="column" rowGap={4}>
        {img && (
          <Image
            src={img}
            style={{
              width: '100%',
              height: 'auto'
            }}
            alt="adc-images"
            width={1000}
            height={1000}
          />
        )}
        {imageCaption && (
          <TypographyVariation2 variant="Subtitle Text">{imageCaption}</TypographyVariation2>
        )}
      </Stack>
    </Box>
  );
};


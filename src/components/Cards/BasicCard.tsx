'use client'

import { Box, Stack } from '@mui/material'
import Image from 'next/image'
import { TypographyWithSecondaryTextColor } from '../Styled/TypographyWithSecondaryTextColor'
import { TypographyWithPrimaryTextColor } from '../Styled/TypographyWithPrimaryTextColor'
import { useEffect, useState } from 'react'

export const BasicCard = ({ caption, title, imagePath }: { caption: string; title: string; imagePath: string; }) => {

  const [hovered, setHovered] = useState(false)
  const [img, setImg] = useState<string | null>(null);

  useEffect(() => {
    import(`./../../data/${imagePath}`).then(img => setImg(img.default.src))
  }, [imagePath])

  return (
    <Box className="link" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      sx={{
        position: 'relative',
        // overflow: 'hidden'
      }}
    >
      {
        img &&
        <Box sx={{
          transition: 'transform 0.2s',
          transform: hovered ? 'scale(1.05)' : ''
        }}>
          <img
            src={img}
            style={{
              width: '100%',
              height: '100%',
              objectFit: "cover",
              borderRadius: "24px"
            }}
            alt="work"
          />
        </Box>
      }
      <Stack direction="column" mt="1px">
        <TypographyWithSecondaryTextColor variant="capsSm">{caption}</TypographyWithSecondaryTextColor>
        <TypographyWithPrimaryTextColor variant="heading6">{title}</TypographyWithPrimaryTextColor>
      </Stack>
    </Box>
  )
}

'use client'

import { Box, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import img from '@/data/DispenceGo/main.png'
import { TypographyWithSecondaryTextColor } from '../Styled/TypographyWithSecondaryTextColor'
import { TypographyWithPrimaryTextColor } from '../Styled/TypographyWithPrimaryTextColor'
import { useState } from 'react'

export const BasicCard = () => {

  const [hovered, setHovered] = useState(false)

  return (
    <Box className="link" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      sx={{
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Box sx={{
        transition: 'transform 0.2s',
        transform: hovered ? 'scale(1.05)' : ''
      }}>
        <Image
          src={img}
          width={0}
          height={0}
          objectFit="cover"
          style={{
            width: '100%',
            height: '100%',
          }}
          alt="work"
        />
      </Box>
      <Stack direction="column">
        <TypographyWithSecondaryTextColor variant="capsSm">2023 / UI Design</TypographyWithSecondaryTextColor>
        <TypographyWithPrimaryTextColor variant="heading6">DispenseGo Web Platform</TypographyWithPrimaryTextColor>
      </Stack>
    </Box>
  )
}

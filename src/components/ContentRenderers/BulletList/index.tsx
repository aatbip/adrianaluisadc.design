'use client'

import { TypographyVariation2 } from "@/components/Styled/TypographyVariation2"
import { Box } from "@mui/material"

export const BulletList = ({ bulletListItems }: { bulletListItems: string[] }) => {
  return (
    <Box ml="20px">
      <ul>
        {
          bulletListItems.map((el, key) => {
            return (
              <TypographyVariation2 key={key} variant="Body Reg">
                <li style={{ marginTop: '20px' }}>{el}</li>
              </TypographyVariation2>
            )
          })
        }
      </ul>
    </Box>
  )
}

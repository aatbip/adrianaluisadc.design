'use client'

import { TypographyVariation2 } from "@/components/Styled/TypographyVariation2"
import { IBlockRenderer, Renderer } from "@/types/contentRendererTypes";
import { Box, Stack } from "@mui/material"
import { BlockHeader } from "../BlockHeader";
import { BulletList } from "../BulletList";
import { Paragraph } from "../Paragraph";

export const BlockRenderer = (prop: IBlockRenderer) => {
  return (
    <Box mt="64px">
      <Box sx={{
        borderBottom: (theme) => `1px solid ${theme.color.outline}`,
        pb: '24px',
        mb: '24px',
      }}>
        <TypographyVariation2 variant="heading5">{prop.blockHeading}</TypographyVariation2>
      </Box>
      <Stack direction="row" columnGap={10}>
        <Box flexBasis="50%">
          {
            prop.leftNode.map((leftEl, key) => {
              if (leftEl.type === Renderer.BLOCK_HEADER) {
                return <BlockHeader key={key} content={leftEl.content} />
              }
              if (leftEl.type === Renderer.BULLET_LIST) {
                return <BulletList key={key} bulletListItems={leftEl.bulletListItems} />
              }

              if (leftEl.type === Renderer.PARAGRAPH) {
                return <Paragraph key={key} content={leftEl.content} />
              }
            })
          }
        </Box>
        <Box flexBasis="50%">
          {
            prop.rightNode.map((rightEl, key) => {
              if (rightEl.type === Renderer.BLOCK_HEADER) {
                return <BlockHeader key={key} content={rightEl.content} />
              }
              if (rightEl.type === Renderer.BULLET_LIST) {
                return <BulletList key={key} bulletListItems={rightEl.bulletListItems} />
              }

              if (rightEl.type === Renderer.PARAGRAPH) {
                return <Box key={key}><Paragraph content={rightEl.content} /></Box>
              }
            })
          }
        </Box>
      </Stack>
    </Box>
  )
}

import { BlockRenderer } from "@/components/ContentRenderers/Block";
import { BlockHeader } from "@/components/ContentRenderers/BlockHeader";
import { BulletList } from "@/components/ContentRenderers/BulletList";
import { HeaderWithUnderline } from "@/components/ContentRenderers/HeaderWithUnderline";
import { ImageHolder } from "@/components/ContentRenderers/ImageHolder";
import { MainTitle } from "@/components/ContentRenderers/MainTitle";
import { Paragraph } from "@/components/ContentRenderers/Paragraph";
import { PrimaryTitle } from "@/components/ContentRenderers/PrimaryTitle";
import { SecondaryTitle } from "@/components/ContentRenderers/SecondaryTitle";
import { IContent, Renderer } from "@/types/contentRendererTypes";
import { Box } from "@mui/material";

export const RendererMatcher = ({ content }: { content: IContent }) => {
  return (

    content.map(el => {

      if (el.type === Renderer.MAIN_TITLE) {
        return <MainTitle {...el} />

      }

      if (el.type === Renderer.SECONDARY_TITLE) {
        return <SecondaryTitle content={el.content} />

      }

      if (el.type === Renderer.PRIMARY_TITLE) {
        return <PrimaryTitle content={el.content} />

      }

      if (el.type === Renderer.PARAGRAPH) {
        return <Paragraph content={el.content} />

      }

      if (el.type === Renderer.BULLET_LIST) {
        return <BulletList bulletListItems={el.bulletListItems} />

      }

      if (el.type === Renderer.IMAGE_HOLDER) {
        return <ImageHolder imagePath={el.imagePath} imageCaption={el.imageCaption} />
      }

      if (el.type === Renderer.BLOCK_RENDERER) {
        return <BlockRenderer
          blockHeading={el.blockHeading}
          leftNode={
            <Box>
              {
                el.leftNode.map(leftEl => {
                  if (leftEl.type === Renderer.BLOCK_HEADER) {
                    return <BlockHeader content={leftEl.content} />
                  }
                  if (leftEl.type === Renderer.BULLET_LIST) {
                    return <BulletList bulletListItems={leftEl.bulletListItems} />
                  }

                  if (leftEl.type === Renderer.PARAGRAPH) {
                    return <Paragraph content={leftEl.content} />
                  }
                })
              }
            </Box>
          }
          rightNode={
            <Box>
              {
                el.rightNode.map(rightEl => {
                  if (rightEl.type === Renderer.BLOCK_HEADER) {
                    return <BlockHeader content={rightEl.content} />
                  }
                  if (rightEl.type === Renderer.BULLET_LIST) {
                    return <BulletList bulletListItems={rightEl.bulletListItems} />
                  }

                  if (rightEl.type === Renderer.PARAGRAPH) {
                    return <Box><Paragraph content={rightEl.content} /></Box>
                  }
                })
              }
            </Box>
          }
        />
      }


      if (el.type === Renderer.HEADING_WITH_UNDERLINE) {
        return <HeaderWithUnderline content={el.content} />
      }

      if (el.type === Renderer.BLOCK_HEADER) {
        return <BlockHeader content={el.content} />
      }

    })

  )
}

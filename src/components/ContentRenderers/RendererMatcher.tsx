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

    content.map((el, key) => {

      if (el.type === Renderer.MAIN_TITLE) {
        return <MainTitle key={key} {...el} />

      }

      if (el.type === Renderer.SECONDARY_TITLE) {
        return <SecondaryTitle key={key} content={el.content} />

      }

      if (el.type === Renderer.PRIMARY_TITLE) {
        return <PrimaryTitle key={key} content={el.content} />

      }

      if (el.type === Renderer.PARAGRAPH) {
        return <Paragraph key={key} content={el.content} />

      }

      if (el.type === Renderer.BULLET_LIST) {
        return <BulletList key={key} bulletListItems={el.bulletListItems} />

      }

      if (el.type === Renderer.IMAGE_HOLDER) {
        return <ImageHolder key={key} imagePath={el.imagePath} imageCaption={el.imageCaption} />
      }

      if (el.type === Renderer.BLOCK_RENDERER) {
        return <BlockRenderer key={key}
          blockHeading={el.blockHeading}
          leftNode={
            <Box key={key}>
              {
                el.leftNode.map((leftEl, key) => {
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
          }
          rightNode={
            <Box key={key}>
              {
                el.rightNode.map((rightEl, key) => {
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
          }
        />
      }


      if (el.type === Renderer.HEADING_WITH_UNDERLINE) {
        return <HeaderWithUnderline key={key} content={el.content} />
      }

      if (el.type === Renderer.BLOCK_HEADER) {
        return <BlockHeader key={key} content={el.content} />
      }

    })

  )
}

import {
  IBlockHeader,
  IBlockRenderer,
  IBulletList,
  IHeadingWithUnderline,
  IIframeComponent,
  IImageHolder,
  IMainTitle,
  IParagraph,
  IPrimaryTitle,
  ISecondaryTitle,
  Renderer,
} from "@/types/contentRendererTypes";

export function iframeCreator({
  link,
}: Omit<IIframeComponent, "type">): IIframeComponent {
  return {
    type: Renderer.IFRAME_COMPONENT,
    link,
  };
}
export function mainTitleCreator({
  title,
  ctaButton1Link,
  ctaButton2Link,
  ctaButton1Content,
  ctaButton2Content,
}: Omit<IMainTitle, "type">): IMainTitle {
  return {
    type: Renderer.MAIN_TITLE,
    title,
    ctaButton1Content,
    ctaButton2Content,
    ctaButton1Link,
    ctaButton2Link,
  };
}

export function secondaryTitleCreator({
  content,
}: Omit<ISecondaryTitle, "type">): ISecondaryTitle {
  return {
    type: Renderer.SECONDARY_TITLE,
    content,
  };
}

export function primaryTitleCreator({
  content,
}: Omit<IPrimaryTitle, "type">): IPrimaryTitle {
  return {
    type: Renderer.PRIMARY_TITLE,
    content,
  };
}

export function paragraphCreator({
  content,
}: Omit<IParagraph, "type">): IParagraph {
  return {
    type: Renderer.PARAGRAPH,
    content,
  };
}

export function bulletListCreator({
  bulletListItems,
}: Omit<IBulletList, "type">): IBulletList {
  return {
    type: Renderer.BULLET_LIST,
    bulletListItems,
  };
}

export function imageHolderCreator({
  imagePath,
  imageCaption,
  noMargin,
}: Omit<IImageHolder, "type">): IImageHolder {
  return {
    type: Renderer.IMAGE_HOLDER,
    imagePath,
    imageCaption,
    noMargin,
  };
}

export function blockRendererCreator({
  blockHeading,
  leftNode,
  rightNode,
}: Omit<IBlockRenderer, "type">): IBlockRenderer {
  return {
    type: Renderer.BLOCK_RENDERER,
    blockHeading,
    leftNode,
    rightNode,
  };
}

export function headingWithUnderlineCreator({
  content,
}: Omit<IHeadingWithUnderline, "type">): IHeadingWithUnderline {
  return {
    type: Renderer.HEADING_WITH_UNDERLINE,
    content,
  };
}

export function blockHeaderCreator({
  content,
}: Omit<IBlockHeader, "type">): IBlockHeader {
  return {
    type: Renderer.BLOCK_HEADER,
    content,
  };
}

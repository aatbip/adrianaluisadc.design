export enum Renderer {
  MAIN_TITLE,
  SECONDARY_TITLE,
  PRIMARY_TITLE,
  PARAGRAPH,
  BULLET_LIST,
  IMAGE_HOLDER,
  BLOCK_RENDERER,
  HEADING_WITH_UNDERLINE,
  BLOCK_HEADER,
  IFRAME_COMPONENT,
}

export interface IMainTitle {
  type: Renderer.MAIN_TITLE;
  title: string;
  ctaButton1Content?: string;
  ctaButton1Link?: string;
  ctaButton2Content?: string;
  ctaButton2Link?: string;
}

export interface ISecondaryTitle {
  type: Renderer.SECONDARY_TITLE;
  content: string;
}

export interface IPrimaryTitle {
  type: Renderer.PRIMARY_TITLE;
  content: string;
}

export interface IParagraph {
  type: Renderer.PARAGRAPH;
  content: string;
}

export interface IBulletList {
  type: Renderer.BULLET_LIST;
  bulletListItems: string[];
}

export interface IImageHolder {
  type: Renderer.IMAGE_HOLDER;
  imagePath: string;
  imageCaption?: string;
  noMargin?: boolean;
}

export interface IBlockRenderer {
  type: Renderer.BLOCK_RENDERER;
  blockHeading: string;
  leftNode: (IBlockHeader | IBulletList | IParagraph)[];
  rightNode: (IBlockHeader | IBulletList | IParagraph)[];
}

export interface IHeadingWithUnderline {
  type: Renderer.HEADING_WITH_UNDERLINE;
  content: string;
}

export interface IBlockHeader {
  type: Renderer.BLOCK_HEADER;
  content: string;
}

export interface IIframeComponent {
  type: Renderer.IFRAME_COMPONENT;
  link: string;
}

export type IContent = (
  | IParagraph
  | IBulletList
  | IBlockHeader
  | IImageHolder
  | IMainTitle
  | ISecondaryTitle
  | IPrimaryTitle
  | IHeadingWithUnderline
  | IImageHolder
  | IBlockRenderer
  | IIframeComponent
)[];

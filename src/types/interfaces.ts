export enum ThemeMode {
  DARK = 'dark',
  LIGHT = 'light'
}

export enum DetailsPageTypes {
  WORK = 'work',
  UI_STUDIES = 'ui-studies',
  CASE_STUDIES = 'case-studies'
}

export interface IBasicCardProps {
  caption: string;
  title: string;
  imagePath: string;
  pathName: string;
}



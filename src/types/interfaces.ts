export enum ThemeMode {
  DARK = 'dark',
  LIGHT = 'light'
}

export enum DetailsPageTypes {
  ALL_WORKS = 'all-works',
  UI_EXPLORATIONS = 'ui-explorations',
  CASE_STUDIES = 'case-studies'
}

export interface IBasicCardProps {
  caption: string;
  title: string;
  imagePath: string;
  pathName: string;
}



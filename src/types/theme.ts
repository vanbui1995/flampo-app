import type { ThemeConfig } from 'antd';

export enum THEME_MODE {
  DARK = 'dark',
  LIGHT = 'light',
}

const generalConfig: ThemeConfig = {
  token: {
    colorPrimary: '#E0B710',
    fontSize: 15,
  },
};

export const themeConfig: Record<THEME_MODE, ThemeConfig> = {
  [THEME_MODE.LIGHT]: {
    ...generalConfig,
    token: {},
  },
  [THEME_MODE.DARK]: {
    ...generalConfig,
    token: {
      colorPrimary: 'red',
    },
  },
};

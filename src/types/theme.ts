import type { ThemeConfig } from 'antd';

export enum THEME_MODE {
  DARK = 'dark',
  LIGHT = 'light',
}

const generalConfig: ThemeConfig = {
  token: {
    colorPrimary: '#E0B710',
    fontSize: 14,
    colorError: '#6D0000',
    colorSuccess: '#006D50',
  },
  components: {
    Button: {
      lineWidth: 0,
      borderRadiusLG: 20,
      borderRadius: 10,
      borderRadiusSM: 5,
      controlHeightSM: 35,
      controlHeight: 48,
      controlHeightLG: 56,
      colorBgContainerDisabled: '#F8D210',
      fontSizeLG: 18,
      fontSize: 16,
      fontSizeSM: 14,
    },
    Input: {
      controlHeight: 46,
      borderRadius: 10,
      borderRadiusLG: 20,
      borderRadiusSM: 5,
    },
    Divider: {
      colorSplit: '#CACACA',
    },
    Card: {
      borderRadius: 10,
    },
    Tag: {
      borderRadius: 10,
      controlHeight: 48,
      lineWidth: 0,
      fontSize: 20,
      fontWeightStrong: 600,
      boxShadow: '0px 2px 12px 0px rgba(24, 0, 74, 0.10)',
    },
  },
};

export const themeConfig: Record<THEME_MODE, ThemeConfig> = {
  [THEME_MODE.LIGHT]: {
    ...generalConfig,
    token: {
      ...generalConfig.token,
      colorPrimary: '#E0B710',
      colorBgBase: '#F2F7FF',
    },
    components: {
      ...generalConfig.components,
      Typography: {
        ...generalConfig.components.Typography,
        colorText: '#253858',
        colorTextDisabled: '#848484',
      },
      Input: {
        ...generalConfig.components.Input,
        colorBgContainer: '#F0F0F0',
      },
      Layout: {
        ...generalConfig.components?.Layout,
        headerBg: '#F2F7FF',
        siderBg: '#F2F7FF',
      },
      
    },
  },
  [THEME_MODE.DARK]: {
    ...generalConfig,
    token: {
      ...generalConfig.token,
      colorTextBase: '#FFF',
      colorBgBase: '#253858',
    },
    components: {
      ...generalConfig.components,
      Typography: {
        ...generalConfig.components.Typography,
        colorText: '#fff',
      },
      Input: {
        ...generalConfig.components.Input,
        colorBgContainer: '#F0F0F0',
      },
      Layout: {
        ...generalConfig.components?.Layout,
        headerBg: '#253858',
        siderBg: '#253858',
      },
    },
  },
};

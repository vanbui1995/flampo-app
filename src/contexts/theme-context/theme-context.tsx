import { ConfigProvider } from 'antd';
import { createContext, FC, ReactNode, useCallback, useState } from 'react';
import { themeConfig } from '@/types';
import { StyleProvider } from '@ant-design/cssinjs';

interface IDisplayDataValue {
  toggleTheme: () => void;
}

export const ThemeContext = createContext<IDisplayDataValue>({ toggleTheme: () => {} });

const ThemeProvider: FC<{ children: ReactNode }> = (props) => {
  const [state, setState] = useState<'dark' | 'light'>('dark');

  const toggleTheme = useCallback(() => {
    setState((s) => (s === 'dark' ? 'light' : 'dark'));
  }, []);
  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      <StyleProvider hashPriority="high">
        <ConfigProvider theme={themeConfig[state]}>{props.children}</ConfigProvider>
      </StyleProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

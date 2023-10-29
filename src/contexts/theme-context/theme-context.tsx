import { ConfigProvider } from 'antd';
import { createContext, FC, ReactNode, useCallback, useContext, useState } from 'react';
import { themeConfig } from '@/types';

interface IDisplayDataValue {
  toggleTheme: () => void;
}

const ThemeContext = createContext<IDisplayDataValue>({ toggleTheme: () => {} });

const ThemeProvider: FC<{ children: ReactNode }> = (props) => {
  const [state, setState] = useState<'dark' | 'light'>('dark');

  const toggleTheme = useCallback(() => {
    setState((s) => (s === 'dark' ? 'light' : 'dark'));
  }, []);
  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      <ConfigProvider theme={themeConfig[state]}>{props.children}</ConfigProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

export const useTheme = () => {
  return useContext(ThemeContext);
};

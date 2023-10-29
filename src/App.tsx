import { useState } from 'react';
import reactLogo from '../public/assets/react.svg';
import viteLogo from '/vite.svg';
import { useTranslation } from 'react-i18next';
import { Button } from 'antd';
import { useTheme } from '@/contexts';

function App() {
  const { t } = useTranslation();

  const { toggleTheme } = useTheme();
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className={''}>{t('titles.app')}</h1>
      <div className="font-bold ">
        <Button type={'primary'} className={'w-[200px]'} onClick={toggleTheme}>
          Theme
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="flex">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;

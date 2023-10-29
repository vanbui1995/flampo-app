import reactLogo from '../public/assets/react.svg';
import viteLogo from '/vite.svg';
import { useTranslation } from 'react-i18next';
import { Button, Input, Tag, Typography } from 'antd';
import { useTheme } from '@/contexts';

function App() {
  const { t } = useTranslation();

  const { toggleTheme } = useTheme();
  return (
    <>
      <div>
        <Input value={'adhfasdfjkahskdf'} />
        <Tag>Hello</Tag>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className={''}>{t('titles.app')}</h1>
      <div className="font-bold ">
        <Button type={'primary'} className={'w-[200px]'} onClick={toggleTheme}>
          Theme
        </Button>
        <Button disabled className={''} onClick={toggleTheme}>
          Theme
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <Typography className="flex">Click on the Vite and React logos to learn more</Typography>
    </>
  );
}

export default App;

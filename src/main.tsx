import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

import 'antd/dist/reset.css';
import './i18n';

import ThemeProvider from '@/contexts/theme-context/theme-context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthWrapperContext } from './contexts/auth-context/auth-context.tsx';
import { FullScreenLoading } from './components/common/loading/fullscreen-loading.tsx';

const queryClient = new QueryClient();

console.log({ queryClient });

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <AuthWrapperContext>
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </ThemeProvider>
  </AuthWrapperContext>,
);

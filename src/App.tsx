import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { Layout } from 'antd';
import { RequiredRoute } from '@/components/common';
import { LoginPage, RegisterPage, DashboardPage, MyTaskPage } from '@/pages';
import { ROUTE_PATH } from '@/constants';
import { Footer, Header, SideBar } from '@/components/layout';
import { Suspense } from 'react';
import { FullScreenLoading } from './components/common';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate to={ROUTE_PATH.LOGIN} />} />
          <Route path={ROUTE_PATH.LOGIN} element={<LoginPage />} />
          <Route path={ROUTE_PATH.REGISTER} element={<RegisterPage />} />
          <Route
            path={ROUTE_PATH.APP.ROOT}
            element={
              <RequiredRoute>
                <Layout className="flex h-full w-full">
                  <Header />
                  <Layout className="min-h-[calc(100vh-179px)]" hasSider>
                    <SideBar />
                    <Layout.Content>
                      <Suspense fallback={<FullScreenLoading />}>
                        <Outlet />
                      </Suspense>
                    </Layout.Content>
                  </Layout>
                  <Footer />
                </Layout>
              </RequiredRoute>
            }
          >
            <Route path={ROUTE_PATH.APP.ROOT} element={<DashboardPage />} />
            <Route path={ROUTE_PATH.APP.MY_TASKS} element={<MyTaskPage />} />
            <Route path={'*'} element={<div>Not Found</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

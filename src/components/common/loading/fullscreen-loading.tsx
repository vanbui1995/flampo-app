import { Spin } from 'antd';

export const FullScreenLoading = () => (
  <Spin className="max-h-max" spinning>
    <div className="w-[100vw] h-[100vh] bg-transparent"></div>
  </Spin>
);

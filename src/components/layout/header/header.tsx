import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Button, Layout, Menu, MenuProps } from 'antd';
import { useTheme } from '@/contexts';
import { ROUTE_PATH } from '@/constants';
import { useLocation, useNavigate } from 'react-router-dom';

const items: MenuProps['items'] = [
  {
    label: 'Home',
    key: ROUTE_PATH.APP.ROOT,
    icon: <MailOutlined />,
  },
  {
    label: 'Search',
    key: '#search',
    icon: <AppstoreOutlined />,
  },
  {
    label: 'Create',
    key: '#create',
    icon: <SettingOutlined />,
    children: [
      {
        label: 'Team',
        key: '#create:team',
      },
      {
        label: 'Event',
        key: '#create:event',
      },
    ],
  },
  {
    label: 'My Task',
    key: ROUTE_PATH.APP.MY_TASKS,
    icon: <MailOutlined />,
  },
  {
    label: 'Store',
    key: ROUTE_PATH.APP.BOARD,
    icon: <AppstoreOutlined />,
  },
];

export const Header = () => {
  const { toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation()
  return (
    <Layout.Header className="h-[110px] bg-white p-0">
      <Menu
        onSelect={({ key }) => {
          if (key[0] === '#') {
            switch (key) {
              default:
                break;
            }
            return;
          }
          navigate(key);
        }}
        selectedKeys={[location.pathname]}
        mode="horizontal"
        items={items}
      />
      <Button htmlType="button" size="small" onClick={toggleTheme}>
        Toggle theme
      </Button>
    </Layout.Header>
  );
};

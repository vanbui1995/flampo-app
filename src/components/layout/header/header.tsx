import { AppstoreOutlined, MailOutlined, UserSwitchOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu, MenuProps } from 'antd';
import { useTheme } from '@/contexts';
import { ROUTE_PATH } from '@/constants';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts';

const items: MenuProps['items'] = [
  {
    label: 'Home',
    key: ROUTE_PATH.APP.ROOT,
    icon: <MailOutlined />,
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
  {
    label: 'Search',
    key: '#search',
    icon: <AppstoreOutlined />,
  },
  {
    label: 'Switch theme',
    key: '#toggle-theme',
    icon: <AppstoreOutlined />,
  },
];

export const Header = () => {
  const { toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const { logout, user } = useAuth();
  return (
    <Layout.Header className="p-0">
      <Menu
        onSelect={({ key }) => {
          if (key[0] === '#') {
            switch (key) {
              case '#toggle-theme':
                toggleTheme();
                break;
              case '#logout':
                logout();
                break;
              default:
                break;
            }
            return;
          }
          // Default will redirect to the menu key path
          navigate(key);
        }}
        selectedKeys={[location.pathname]}
        mode="horizontal"
        items={[
          ...items,
          {
            label: `${user?.firstName} ${user?.lastName}`,
            key: '#create',
            icon: <UserSwitchOutlined />,
            children: [
              {
                label: 'My Profile',
                key: '#my-profile',
                icon: <UserOutlined />,
              },
              {
                icon: <LogoutOutlined />,
                label: 'Logout',
                key: '#logout',
              },
            ],
          },
        ]}
      />
    </Layout.Header>
  );
};

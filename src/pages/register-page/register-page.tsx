import { ROUTE_PATH } from '@/constants';
import { Button, Input } from 'antd';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const RegisterPage = () => {
  const { t } = useTranslation();
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          {t('account.registerNewAccount')}
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Username
            </label>
            <div className="mt-2">
              <Input />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
              <div className="text-sm">
                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <Input.Password />
            </div>
          </div>

          <div>
            <Button
              htmlType="submit"
              className="flex w-full justify-center rounded-md bg-iceberg px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign In
            </Button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm">
          Had an account? Please <Link className='font-semibold text-indigo-600 hover:text-indigo-500' to={ROUTE_PATH.LOGIN}>Login</Link>
        </p>
      </div>
    </div>
  );
};

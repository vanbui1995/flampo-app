
import { ROUTE_PATH, loginYupSchema } from '@/constants';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button, Form, notification } from 'antd';
import { useTranslation } from 'react-i18next';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ControlledInput } from '@/components/common/form/controlled-input';
import { INPUT_TYPES } from '@/types/input';
import { useLoginMutation } from '@/gql-type-and-hook';
import { handleBasicError } from '@/utils/func';
import { useAuth } from '@/contexts';



type FormValues = {
  email: string;
  password: string;
};

export const LoginPage = () => {
  const { handleSubmit, reset, control } = useForm({
    resolver: yupResolver<FormValues>(loginYupSchema),
  });
  const location = useLocation();
  const from: string = location.state?.from;
  const { user, setUser } = useAuth();
  const loginMutation = useLoginMutation({
    onError: handleBasicError,
    onSuccess: (res) => {
      reset();
      setUser(res.login);
      console.info(res);
      notification.success({ message: 'Login successfully' });
    },
  });
  const { t } = useTranslation();

  if (user) {
    return <Navigate to={from || ROUTE_PATH.APP.ROOT} />;
  }

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          {t('account.signInAccount')}
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <Form
          onFinish={handleSubmit((data) => {
            loginMutation.mutateAsync({ payload: data });
          })}
          layout="vertical"
          className="space-y-6"
        >
          <ControlledInput
            placeholder="Input password"
            name="email"
            control={control}
            type={INPUT_TYPES.INPUT}
            formItemProps={{ label: 'Email' }}
          />
          <ControlledInput
            name="password"
            control={control}
            type={INPUT_TYPES.PASSWORD}
            formItemProps={{ label: 'Password' }}
            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          />
          <Button loading={loginMutation.isLoading} htmlType="submit">
            Sign In
          </Button>
        </Form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Don't have an account? <Link to={ROUTE_PATH.REGISTER}>Register</Link>
        </p>
      </div>
    </div>
  );
};

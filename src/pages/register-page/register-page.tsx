import { ControlledInput } from '@/components/common/form/controlled-input';
import { ROUTE_PATH } from '@/constants';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Form } from 'antd';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { INPUT_TYPES } from '@/types/input';

const schema = yup.object().shape({
  email: yup.string().email().required('Required'),
  password: yup.string().min(6, 'Must be at least 6 characters').required('Required'),
});

type FormValues = {
  email: string;
  password: string;
};

export const RegisterPage = () => {
  const { t } = useTranslation();
  const { handleSubmit, control } = useForm({
    resolver: yupResolver<FormValues>(schema),
  });
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          {t('account.registerNewAccount')}
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <Form
          onFinish={handleSubmit((data) => {
            console.log(data);
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
          <Button htmlType="submit">Sign Up</Button>
        </Form>

        <p className="mt-10 text-center text-sm">
          Had an account? Please{' '}
          <Link className="font-semibold text-indigo-600 hover:text-indigo-500" to={ROUTE_PATH.LOGIN}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

import { Form as AntdForm } from 'antd';
import type React from 'react';
import type { Control, FieldPath, FieldValues } from 'react-hook-form';
import { useController } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

type AntdFormItemProps = React.ComponentProps<typeof AntdForm.Item>;

export type FormItemProps<TFieldValues extends FieldValues = FieldValues> = {
  children: React.ReactNode;
  control: Control<TFieldValues>;
  //   name: FieldPath<TFieldValues>;
} & Omit<AntdFormItemProps, 'normalize' | 'rules' | 'validateStatus'>;

// TODO: Support `onBlur` `ref`
// FIXME: `Touched` does not change in devtool
export const FormItem = <TFieldValues extends FieldValues = FieldValues>({
  children,
  control,
  name,
  help,
  ...props
}: FormItemProps<TFieldValues>) => {
  const firstName = name as FieldPath<TFieldValues>;
  const { field, fieldState } = useController({ name: firstName, control });
  const { t } = useTranslation();

  const handleNormalize: AntdFormItemProps['normalize'] = (value) => {
    field.onChange(value);
    return value;
  };
  const helpText = t(fieldState.error?.message || '');
  

  return (
    <AntdForm.Item
      {...props}
      name={name}
      initialValue={field.value}
      normalize={handleNormalize}
      validateStatus={fieldState.invalid ? 'error' : undefined}
      help={helpText ?? help}
    >
      {children}
    </AntdForm.Item>
  );
};

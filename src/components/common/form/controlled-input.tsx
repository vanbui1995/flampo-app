import { INPUT_TYPES, InputDetailProps } from '@/types/input';
import { FormItem } from '.';
import { Control, FieldValues } from 'react-hook-form';
import { FormItemProps, Input, Select } from 'antd';
import { FC } from 'react';

const InputMap: Record<INPUT_TYPES, unknown> = {
  [INPUT_TYPES.SELECT]: (props?: InputDetailProps<INPUT_TYPES.SELECT>) => {
    return <Select {...props} />;
  },
  [INPUT_TYPES.INPUT]: (props?: InputDetailProps<INPUT_TYPES.INPUT>) => {
    return <Input {...props} />;
  },
  [INPUT_TYPES.PASSWORD]: (props?: InputDetailProps<INPUT_TYPES.PASSWORD>) => {
    return <Input.Password {...props} />;
  },
} as const;

export const ControlledInput = <T extends INPUT_TYPES, K extends FieldValues>(
  props: {
    name: string;
    control: Control<K>;
    type: T;
    formItemProps?: FormItemProps;
  } & InputDetailProps<T>,
) => {
  const { control, formItemProps, type, name, ...rest  } = props;
  const InputComponent = InputMap[type] as FC<InputDetailProps<T>>;
  const emptyProps: InputDetailProps<T> = {};
  const finalInputProps = rest || emptyProps;
  return (
    <FormItem control={control} name={name} {...(formItemProps || {})}>
      <InputComponent {...finalInputProps} />
    </FormItem>
  );
};

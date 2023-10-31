import { InputProps, SelectProps } from 'antd';
import { PasswordProps } from 'antd/es/input';

export enum INPUT_TYPES {
  INPUT = 'INPUT',
  SELECT = 'SELECT',
  PASSWORD = 'PASSWORD',
}

export type InputPropsMap = {
  [INPUT_TYPES.INPUT]: InputProps;
  [INPUT_TYPES.SELECT]: SelectProps;
  [INPUT_TYPES.PASSWORD]: PasswordProps;
};

export type InputDetailProps<T extends INPUT_TYPES> = InputPropsMap[T];

export type InputPropsMapCopy<T extends INPUT_TYPES> = InputPropsMap[T];

import { InputProps, SelectProps } from 'antd';

export enum INPUT_TYPES {
  INPUT = 'INPUT',
  SELECT = 'SELECT',
}

export type InputPropsMap = {
  [INPUT_TYPES.INPUT]: InputProps;
  [INPUT_TYPES.SELECT]: SelectProps;
};

export type InputDetailProps<T extends INPUT_TYPES> = InputPropsMap[T];

export type InputPropsMapCopy<T extends INPUT_TYPES> = InputPropsMap[T]



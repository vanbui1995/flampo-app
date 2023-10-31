import { LOCAL_STORAGE_KEY } from '@/constants';
import { RegisterResponseDto } from '@/gql-type-and-hook';
import { IGraphQLErrorResponse } from '@/types';
import { notification } from 'antd';
import { t } from 'i18next';

export const objectKeys = <T extends object>(object: T): Array<keyof T> => {
  return Object.keys(object) as Array<keyof T>;
};

export const handleBasicError = (e: IGraphQLErrorResponse): void => {
  e.response.errors.forEach((item) => {
    const errorCode = item?.extensions?.appErrorCode;
    const plainText = item?.message;
    let finalText = '';
    if (errorCode || plainText) {
      finalText = errorCode ? t(`errors.${errorCode}`) : plainText;
    } else {
      finalText = t('errors.UNEXPECTED_ERRORS');
    }
    console.error(e);
    notification.error({
      message: finalText,
    });
  });
};

export const parseUserFromLocalStorage = (): RegisterResponseDto | null => {
  const jsonString = localStorage.getItem(LOCAL_STORAGE_KEY.AUTH);
  try {
    if (jsonString) {
      const user: RegisterResponseDto = JSON.parse(jsonString);
      return user;
    }
    return null;
  } catch (error) {
    console.warn(`Can't parse json, set null for default`);
    return null;
  }
};

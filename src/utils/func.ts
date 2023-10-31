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

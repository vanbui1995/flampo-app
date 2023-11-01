import { GraphQLClient, Variables } from 'graphql-request';
import { IGraphQLErrorResponse } from '@/types';
import { useAuth } from '@/contexts';
import { parseUserFromLocalStorage } from './func';

export const queryOption = { retry: 4, refetchOnWindowFocus: false };

export const client = new GraphQLClient(`${import.meta.env.VITE_APP_API}/graphql`, {
  headers: {
    'Content-Type': 'application/json',
  },
});

export const useFetchData = <TData, TVariables>(
  query: string,
  options?: RequestInit['headers'] & Record<string, string>,
): ((variables?: TVariables) => Promise<TData>) => {
  const headers: RequestInit['headers'] & Record<string, string> = options || {};
  const { user, logout } = useAuth();
  const idToken = user?.accessToken || parseUserFromLocalStorage()?.accessToken;
  if (idToken) {
    headers.authorization = `Bearer ${idToken}`;
  }
  return async (variables): Promise<TData> => {
    return client
      .request<TData>({
        document: query,
        variables: variables as Variables,
        requestHeaders: headers,
      })
      .catch((e) => {
        if (
          (e as unknown as IGraphQLErrorResponse)?.response?.errors.find(
            (error) => error.extensions.appErrorCode === 'TOKEN_EXPIRES',
          )
        ) {
          console.log(e);
          logout();
        }
        return Promise.reject(e);
      });
  };
};

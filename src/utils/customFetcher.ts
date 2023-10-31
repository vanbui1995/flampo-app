import { GraphQLClient, Variables } from 'graphql-request';
import { IGraphQLErrorResponse } from '@/types';

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
  // const { idToken, setAuth } = useAuthContext();

  const headers: RequestInit['headers'] & Record<string, string> = options || {};
  const idToken = '';
  if (idToken) {
    headers.authorization = `Bearer ${idToken}`;
  } else {
    const idTokenLocalStorgage = localStorage.getItem('idToken');

    if (idTokenLocalStorgage) {
      headers.authorization = `Bearer ${idTokenLocalStorgage}`;
    }
  }

  return async (variables): Promise<TData> => {
    return client
      .request<TData>({
        document: query,
        variables: variables as Variables,
        requestHeaders: headers,
      })
      .catch((e) => {
        if ((e as unknown as IGraphQLErrorResponse).response.errors[0].extensions.appErrorCode === 'TOKEN_EXPIRES') {
          console.log(e);
        }
        return Promise.reject(e);
      });
  };
};

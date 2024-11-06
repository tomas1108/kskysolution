import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  from
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import Cookies from 'js-cookie';
import auth from '~/utils/auth';

const httpLink = createHttpLink({
  uri: `${process.env.GRAPHQL_URL}/dev/graphql`
});

export enum AUTH {
  AUTHED = 'authed',
  NOT_AUTHED = 'not_authed'
}

type LocalUser = {
  authed: AUTH;
  id?: string;
  token?: string | null;
  email?: string | null;
  roles?: string[] | null;
};

const authLink = setContext((_, { headers }) => {
  const token = auth.getToken ?? process.env.ANONYMOUS_TOKEN;
  return {
    headers: {
      ...headers,
      Authorization: `Bearer ${token}`
    }
  };
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    console.error('🚀 ~ errorLink ~ graphQLErrors:', graphQLErrors);

  graphQLErrors?.forEach(({ message }) => {
    if (message === 'invalid-jwt' || message.includes('JWTExpired')) {
      Cookies.remove('token');
      location.replace('/login');
      return;
    }
  });

  if (networkError) console.error(`[Network error]: ${networkError}`);
});

const cache = new InMemoryCache({});

const client = new ApolloClient({
  link: from([errorLink, authLink.concat(httpLink)]),
  cache
});

export { client };

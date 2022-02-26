import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React from 'react';
import { Login } from './components';

const client = new ApolloClient({
  uri: 'https://tq-template-server-sample.herokuapp.com/graphql',
  cache: new InMemoryCache(),
});

export function App(): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <Login />
    </ApolloProvider>
  );
}

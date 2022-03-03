import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React from 'react';
import { GlobalStyled } from './atomic/globals';
import { MyRoutes } from './routes';

const client = new ApolloClient({
  uri: 'https://tq-template-server-sample.herokuapp.com/graphql',
  cache: new InMemoryCache(),
});

export function App(): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <GlobalStyled />
      <MyRoutes />
    </ApolloProvider>
  );
}

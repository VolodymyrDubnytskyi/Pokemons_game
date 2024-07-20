import React from 'react'
import ReactDOM from 'react-dom/client' 
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import './index.css'
import { RouterProvider, } from "react-router-dom";
import { router } from './router/MainRouter.tsx';

const client = new ApolloClient({
  uri: 'https://beta.pokeapi.co/graphql/v1beta',
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>,
)

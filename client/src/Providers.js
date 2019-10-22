import { h, Component } from 'preact';
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';
import { createHttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';

import { AuthProvider } from './context/auth';
import App from './components/app';

const httpLink = createHttpLink({
    uri: '/graphql'
});

const setAuthorizationLink = setContext(() => {
    const jwtToken = localStorage.getItem('jwtToken');
    return {
        headers: {
            Authorization: jwtToken ? `Bearer ${jwtToken}` : ''
        }
    }
})

const client = new ApolloClient({
    link: setAuthorizationLink.concat(httpLink),
    cache: new InMemoryCache()
});

export default (
    <ApolloProvider client={client}>
        <AuthProvider>
            <App />
        </AuthProvider>
    </ApolloProvider>
);
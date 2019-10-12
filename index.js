const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8000;

const typeDefs = gql`
    type Query {
        sayHi: String!
    }
`;

const resolvers = {
    Query: {
        sayHi: () => 'Hello Rupam!!!'
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.applyMiddleware({ app });

app.use(express.static('public'));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen({ port }, () => {
    console.log(`Server started on http://localhost:${port}`);
});

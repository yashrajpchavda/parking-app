const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const mongoose = require('mongoose');

const { resolvers, typeDefs } = require('./graphql');

const app = express();

const port = process.env.PORT || 8000;

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({ req })
});

server.applyMiddleware({ app });

app.use(express.static('public'));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

const connectionString =
    process.env.MONGODB_URI ||
    'mongodb://parking-app-user:test123@localhost:27017/parking-app?retryWrites=true';

mongoose
    .connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('MongoDB connected');
        return app.listen({ port });
    })
    .then(() => {
        console.log(`Server started on http://localhost:${port}`);
    });

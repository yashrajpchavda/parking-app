export default (config, env, helpers) => {
    if (!env.isProd) {
        config.devServer.proxy =[
            {
                path: '/graphql',
                target: 'http://localhost:8000/graphql',
                // ...any other stuff...
            }
        ];
    }
}
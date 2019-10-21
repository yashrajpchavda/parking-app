import { Component } from 'preact';
import { useContext } from 'preact/hooks';
import { Route } from 'preact-router';

import Redirect from './../lib/router/Redirect';
import { AuthContext } from './../context/auth';

function AuthRoute({ component: Comp, ...rest }) {
    const { user } = useContext(AuthContext);

    const ToRender = (props) => user ? <Redirect to="/" /> : <Comp {...props} />;

    return (
        <Route
            {...rest}
            component={ToRender}
        />
    );
};

export default AuthRoute;
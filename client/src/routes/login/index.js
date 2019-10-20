import { Component } from 'preact';
import { useState, useCallback } from 'preact/hooks';
import { useMutation } from '@apollo/react-hooks';
import { route } from 'preact-router';
import gql from 'graphql-tag';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import style from './style';

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(12),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const LOGIN_USER = gql`
    mutation Login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            id
            email
            token
        }
    }
`;

const Login = (props) => {
    const classes = useStyles();
    const [formValues, setFormValues] = useState({
        email: '',
        password: ''
    });

    const [loginUser, { data: loginUserData }] = useMutation(LOGIN_USER);

    const [errors, setErrors] = useState({});

    const handleOnFormFieldChange = (event) => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value
        });
    };

    const handleLoginSubmit = (event) => {
        event.preventDefault();

        console.log(props);

        loginUser({
            variables: {
                email: formValues.email,
                password: formValues.password
            }
        }).then(res => {
            console.log('res is', res);
            route('/');
        }).catch(err => {
            const currentErrors = err.graphQLErrors[0].extensions.exception.errors;
            setErrors({
                ...currentErrors
            });
        });

    };

    return (
        <div className={style['login-container']}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form className={classes.form} noValidate onSubmit={handleLoginSubmit}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            value={formValues.email}
                            onChange={handleOnFormFieldChange}
                            autoFocus
                            error={!!errors.email}
                        />
                        <Typography variant="body2">
                            {errors.email}
                        </Typography>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={handleOnFormFieldChange}
                            value={formValues.password}
                            error={!!errors.password}
                        />
                        <Typography variant="body2">
                            {errors.password}
                        </Typography>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign In
                        </Button>
                    </form>
                </div>
            </Container>
        </div>
    )
};

export default Login;
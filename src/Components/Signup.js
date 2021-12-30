import React, { useState } from 'react';
import { Avatar, Button, Container, Grid, Paper, Typography, Box } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import LoadingButton from '@mui/lab/LoadingButton';
import { Link, useHistory } from 'react-router-dom';

import Input from './Input';
import { signup } from '../Api/index'

import useStyles from './styles';

const initialState = { name: '', username: '', email: '', password: '', confirmPassword: '' };

const Auth = () => {

    const classes = useStyles();
    const history = useHistory();

    const [showPassword, setshowPassword] = useState(false);
    const [formData, setformData] = useState(initialState);
    const [processing, setprocessing] = useState(false);

    const handleShowPassword = () => setshowPassword((e) => !e);

    const handleSubmit = (e) => {
        e.preventDefault();
        setprocessing(true);
        signup(formData)
            .then(() => history.push('/'))
            .catch((error) => console.log(error));
    };

    const handleChange = (e) => {
        setformData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <Container component='main' maxWidth='xs' >
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant='h5'>Sign Up</Typography>
                <form className={classes.form} onSubmit={handleSubmit} >
                    <Grid container spacing={2}>
                        <Input name='name' label='Name' type='text' handleChange={handleChange} autoFocus />
                        <Input name='email' label='Email Address' type='email' handleChange={handleChange} />
                        <Input name='username' label='UserName' type='text' handleChange={handleChange} />
                        <Input name='password' label='Password' type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} handleChange={handleChange} />
                        <Input name='confirmpassword' label='Confirm Password' type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} handleChange={handleChange} />
                    </Grid>
                    <Box marginTop={3}>
                        <LoadingButton type='submit' color='primary' className={classes.submit} loading={processing} variant="contained" fullWidth>
                            Sign Up
                        </LoadingButton>
                    </Box>
                    <Grid container justifyContent='flex-end'>
                        <Grid item>
                            <Button color='secondary'>
                                <Link to='/login'>
                                    Already have an account? Login
                                </Link>
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
};

export default Auth;
import React, { useState, useEffect } from 'react';
import { Avatar, Button, Container, Grid, Paper, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { useHistory } from 'react-router-dom';

import Input from './Input';
import Gicon from './Gicon';
import {signup,login} from '../../Api/index'

import useStyles from './styles';

const initialState = { name: '', username: '',email: '', password: '', confirmPassword: '' };

const Auth = () => {

    const classes = useStyles();

    const [showPassword, setshowPassword] = useState(false);
    const [isSignup, setisSignup] = useState(false);
    const [formData, setformData] = useState(initialState);

    const handleShowPassword = () => setshowPassword((e) => !e);
    const switchMode = () => { setshowPassword(false); setisSignup((e) => !e); };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(formData);
        if (isSignup)
            await signup(formData);
        else
           await login(formData);

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
                <Typography variant='h5'>{isSignup ? 'Sign Up' : 'Login'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit} >
                    <Grid container spacing={2}>
                        {isSignup && (
                            <>
                                <Input name='name' label='Name' type='text'  handleChange={handleChange} autoFocus />
                                <Input name='email' label='Email Address' type='email' handleChange={handleChange} />
                            </>
                        )}

                        
                        <Input name='username' label='UserName' type='text'  handleChange={handleChange} />
                        <Input name='password' label='Password' type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} handleChange={handleChange} />

                        {isSignup && (
                            <>
                                <Input name='confirmpassword' label='Confirm Password' type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} handleChange={handleChange} />
                            </>
                        )}
                    </Grid>
                    <Button type='submit' color='primary' variant='contained' className={classes.submit} fullWidth>
                        {isSignup ? 'Sign up' : 'Login'}
                    </Button>
                    
                    <Grid container justifyContent='flex-end'>
                        <Grid item>
                            <Button color='secondary' onClick={switchMode}>
                                {!isSignup ? 'Don\'t have an account? Sign Up' : 'Already have an account? Login'}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
};

export default Auth;
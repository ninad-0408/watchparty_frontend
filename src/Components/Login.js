import React, { useState } from 'react';
import { Avatar, Button, Container, Grid, Paper, Typography, Box } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import LoadingButton from '@mui/lab/LoadingButton';
import { Link, useHistory } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import Input from './Input';
import { login } from '../Api/index'

import useStyles from './styles';

const initialState = { username: '', password: '' };

const Login = () => {

    const classes = useStyles();
    const history = useHistory();
    const [alert, setAlert] = useState(null);
    const [showPassword, setshowPassword] = useState(false);
    const [formData, setformData] = useState(initialState);
    const [processing, setprocessing] = useState(false);

    const handleShowPassword = () => setshowPassword((e) => !e);

    const handleSubmit = (e) => {
        e.preventDefault();
        setprocessing(true);
        login(formData)
            .then((data) => {
                console.log(data);
                if(data.err){
                    
                setAlert(data.err.message);
                    setformData(initialState);
                    setprocessing(false);
                }
                else
                {
                    
                    console.log(data.message);
                    history.push('/',
                    {
                        pathname: '/',
                        state:{message: data.message}
                    }
                    )
                }
                })
            .catch((error) => setAlert(error.message));
    };
    const [userlen, setuserlen] = useState(false);
    const [passlen, setpasslen] = useState(false);

    const handleChange = (e) => {
        if(e.target.value.length > 2 && e.target.value.length < 9){
            e.target.name==='username' ? setuserlen(false) : setpasslen(false);
            setformData({ ...formData, [e.target.name]: e.target.value });
        }
        else{
            e.target.name==='password' ? setpasslen(true) : setuserlen(true);
        }
    };

    return (
        <>
        {alert && <Alert variant="filled" severity='error'  onClose={() => setAlert(null)} > { alert } </Alert>}
        <Container component='main' maxWidth='xs' >
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant='h5'>Login</Typography>
                <form className={classes.form} onSubmit={handleSubmit} >
                    <Grid container spacing={2}>
                        <Input name='username' label='UserName' type='text' handleChange={handleChange} required error={userlen}/>
                        <Input name='password' label='Password' type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} handleChange={handleChange} required error={passlen}/>
                    </Grid>
                    <Box marginTop={3}>
                        <LoadingButton type='submit' color='primary' className={classes.submit} loading={processing} variant="contained" fullWidth disabled={userlen || passlen}>
                            Login
                        </LoadingButton>
                    </Box>

                    <Grid container justifyContent='flex-end'>
                        <Grid item>
                            <Button color='secondary'>
                                <Link to='/signup'>
                                    Don't have an account? Sign Up
                                </Link>
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
        </>
    )
};

export default Login;
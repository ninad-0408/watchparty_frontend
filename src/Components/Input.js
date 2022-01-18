import React from 'react';
import { Grid, IconButton, InputAdornment, TextField } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Input = ({ name, autoFocus, half, label, type, handleChange, handleShowPassword, required }) => {

    return (
        <Grid item xs={12} sm={half ? 6 : 12}>
            <TextField
                name={name}
                onChange={handleChange}
                autoFocus={autoFocus}
                label={label}
                type={type}
                variant='outlined'
                fullWidth
                required={required}
                InputProps={(name === 'confirmPassword' || name === 'password') && {
                    endAdornment: (
                        <InputAdornment position='end'>
                            <IconButton onClick={handleShowPassword}>
                                {type==='password' ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
        </Grid>
    )
};

export default Input;
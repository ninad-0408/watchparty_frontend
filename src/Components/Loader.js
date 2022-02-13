import { CircularProgress } from '@mui/material';
import React from 'react';

const Loader = ({ margin }) => {
    return (
        <div style={margin ? {'marginTop': '20rem'} : {}}>
            <CircularProgress />
        </div>
    )
};

export default Loader;

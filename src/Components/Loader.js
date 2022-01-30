import React from 'react';

const Loader = ({ margin }) => {
    return (
        <div class="d-flex justify-content-center col-12" style={margin ? {'marginTop': '20rem'} : {}}>
            <div class="spinner-grow text-primary" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
    )
};

export default Loader;

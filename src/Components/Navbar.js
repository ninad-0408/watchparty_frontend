import React from 'react';

function Navbar() {
    const user = undefined;
    return (
        <>
            <nav class="navbar noselect navbar-expand-lg bg-dark text-uppercase fixed-top" id="mainNav">
                <div class="container">
                    <a class="navbar-brand js-scroll-trigger" href="#page-top">Watch<strong
                        style={{ "color": "#9CC3D5" }}>Party</strong></a>
                    <button
                        class="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded"
                        type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fas fa-bars"></i>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarResponsive">

                        <ul class="navbar-nav ml-auto">

                            {user ?
                                <>
                                    <li class="nav-item mx-0 mx-lg-1">
                                    <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                                        href="#" style={{ "color": "white" }}>
                                        User: {user}
                                    </a>
                                    </li>
                                    <li class="nav-item mx-0 mx-lg-1">
                                    <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                                        href="/logout" style={{ "color": "white" }}>
                                        Logout
                                    </a>
                                    </li>
                                </>
                                :
                                <>
                                    <li class="nav-item mx-0 mx-lg-1"><a
                                        class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="/auth/google"
                                        style={{ "color": "white" }}>Login</a>
                                    </li>
                                    <li class="nav-item mx-0 mx-lg-1"><a
                                        class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="/auth/google"
                                        style={{ "color": "white" }}>Sign Up</a>
                                    </li>
                                </>
                            }

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar;
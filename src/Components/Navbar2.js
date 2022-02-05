import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import { useState } from "react";
import { Link } from "react-router-dom";
import CreateRoom from "./CreateRoom";
// import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import JoinRoom from "./JoinRoom";
import MyRoom from "./MyRoom";
import { Divider } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import Cookies from "js-cookie";

const style = {
    position: "absolute",
    top: "30%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    boxShadow: 24,
    p: 4,
};

const style1 = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 450,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
};

function Item(props) {
    const { sx, ...other } = props;
    return (
        <Box
            sx={{
                p: 1,
                m: 1,
                bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
                color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
                border: '1px solid',
                borderColor: (theme) =>
                    theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                borderRadius: 2,
                fontSize: '0.875rem',
                fontWeight: '700',
                ...sx,
            }}
            {...other}
        />
    );
}


// const pages = ['Login', 'Signup', 'Hi jay', 'Logout'];
const pages = [{ name: "Jay", link: "/#" }, { name: "Jay1", link: "/" }, { name: "Jay2", link: "/" }, { name: "Jay3", link: "/" }, { name: "Jay4", link: "/" }]
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const username = Cookies.get()?.username;

    



    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                <img
                        src="favicon.ico"
                        alt="Watch Party"
                        style={{ height: "20px", marginRight: "3px" }}
                    />
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        WATCH PARTY
                    </Typography>
                    
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        WATCH PARTY
                    </Typography>

                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            p: 1,
                            m: 1,
                            borderRadius: 1, flexGrow: 1, display: { xs: 'none', md: 'flex' }
                        }}
                    >
                        <UserComponent username={username}/>
                    </Box>

                    <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (<></>
                                // <MenuItem key={page.name} onClick={handleCloseNavMenu} sx={{ 'width': '100vw' }}>
                                //     <Typography /*textAlign="center" */ sx={{ 'width': '100%' }}>{page.name}</Typography>
                                // </MenuItem>
                            ))}

            <MenuItem onClick={handleCloseNavMenu} sx={{ 'width': '100vw', backgroundColor:"pink" }}>
                               
                        <UserComponent username={username} sx={{flexDirection: 'column'}}/>
            </MenuItem>

                        </Menu>
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    );
};

const UserComponent=({username})=>{

    const handleLogout = () => {
        Cookies.remove("_id");
        Cookies.remove("username");
        Cookies.remove("token");
    };

    const handleMenu = (e) => {
        if (!Boolean(anchorEl)) setanchorEl(e.currentTarget);
        else setanchorEl(null);
    };

    const [open1, setOpen1] = useState(false);
    const handleOpen1 = () => setOpen1(!open1);
    const [open2, setOpen2] = useState(false);
    const handleOpen2 = () => setOpen2(!open2);
    const [open3, setOpen3] = useState(false);
    const handleOpen3 = () => setOpen3(!open3);
    const [anchorEl, setanchorEl] = useState(null);
    const open4 = Boolean(anchorEl);

    return (
        <>
        {username ? (
                            <>

                                <Link
                                    onClick={handleOpen1}
                                    className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                                    style={{
                                        color: "white",
                                        "background-color": "transparent",
                                        border: "none",
                                    }}
                                    to="/"
                                >
                                    Create Room
                                </Link>
                                <Modal
                                    open={open1}
                                    onClose={handleOpen1}
                                    closeAfterTransition
                                >
                                    <Fade in={open1}>
                                        <Box sx={style}>
                                            <CreateRoom />
                                        </Box>
                                    </Fade>
                                </Modal>


                                <Link
                                    onClick={handleOpen2}
                                    className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                                    style={{ color: "white" }}
                                    to="/"
                                >
                                    Join Room
                                </Link>
                                <Modal
                                    open={open2}
                                    onClose={handleOpen2}
                                    closeAfterTransition
                                >
                                    <Fade in={open2}>
                                        <Box sx={style1}>
                                            <JoinRoom />
                                        </Box>
                                    </Fade>
                                </Modal>

                                <Link
                                    onClick={handleOpen3}
                                    className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                                    style={{ color: "white" }}
                                    to="/"
                                >
                                    My Rooms
                                </Link>
                                <Modal
                                    open={open3}
                                    onClose={handleOpen3}
                                    closeAfterTransition
                                >
                                    <Fade in={open3}>
                                        <Box sx={style1}>
                                            <MyRoom />
                                        </Box>
                                    </Fade>
                                </Modal>

                                <Tooltip title="Your Account" onClick={handleMenu}>
                                    <a
                                        className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                                        href="#"
                                        style={{ color: "white" }}
                                    >
                                        Hi
                                        <img
                                            alt="gif"
                                            src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"
                                            style={{ height: "20px" }}
                                        />{" "}
                                        {username}
                                    </a>
                                </Tooltip>
                                <Menu
                                    id="usermenu"
                                    anchorEl={anchorEl}
                                    open={open4}
                                    onClose={() => setanchorEl(null)}
                                    onClick={() => setanchorEl(null)}
                                    PaperProps={{
                                        sx: {
                                            bgcolor: "#14273a",
                                            color: "white",
                                        },
                                    }}
                                >
                                    <MenuItem>
                                        <Link
                                            className="text-uppercase"
                                            onClick={handleLogout}
                                            style={{
                                                color: "white",
                                                "font-family": "'Baloo Tammudu 2', cursive",
                                                textDecoration: "none",
                                                "font-size": "16px",
                                            }}
                                            to={{
                                                pathname: "/",
                                                state: {
                                                    message: "You are Loggedout successfully.",
                                                },
                                            }}
                                        >
                                            <LogoutIcon /> Logout
                                        </Link>
                                    </MenuItem>
                                    <MenuItem>
                                        <Link
                                            className="text-uppercase"
                                            style={{
                                                color: "white",
                                                "font-family": "'Baloo Tammudu 2', cursive",
                                                textDecoration: "none",
                                                "font-size": "16px",
                                            }}
                                            to={{
                                                pathname: "/user/changepassword",
                                                state: {
                                                    message: "You are Loggedout successfully.",
                                                },
                                            }}
                                        >
                                            <LogoutIcon /> Change Password
                                        </Link>
                                    </MenuItem>
                                </Menu>

                            </>
                        ) : (
                            <>

                                <Link
                                    className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                                    to="/login"
                                    style={{ color: "white" }}
                                >
                                    Login
                                </Link>

                                <Link
                                    className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                                    to="/signup"
                                    style={{ color: "white" }}
                                >
                                    Sign Up
                                </Link>
                            </>)}
        </>
    )
}

export default Navbar;
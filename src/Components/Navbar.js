import React, { useState } from "react";
import { Link } from "react-router-dom";
import CreateRoom from "./CreateRoom";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import JoinRoom from "./JoinRoom";
import MyRoom from "./MyRoom";
import { Divider, Menu, MenuItem, Tooltip } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import Cookies from "js-cookie";

function Navbar() {
  const username = Cookies.get()?.username;

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
  const [toggle, settoggle] = useState(null);

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

  return (
    <div>
      <nav
        className="navbar noselect navbar-expand-lg  text-uppercase fixed-top"
        id="mainNav"
        style={{ "background-color": "#14273a" }}
      >
        <div className="container">
          <img
            src="favicon.ico"
            style={{ height: "20px", marginRight: "3px" }}
          />
          <Link className="navbar-brand" to="/">
            Watch<strong style={{ color: "#9CC3D5" }}>Party</strong>
          </Link>
          <button
            className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >≡
          </button>

          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul
              class="navbar-nav ml-auto"
              style={{
                "font-family": "'Baloo Tammudu 2', cursive",
                "font-size": "20px",
              }}
            >
              {username ? (
                <>
                  <li className="nav-item mx-0 mx-lg-1">
                    <div>
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
                        CREATE ROOM
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
                    </div>
                  </li>
                  <li className="nav-item mx-0 mx-lg-1">
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
                  </li>
                  <li className="nav-item mx-0 mx-lg-1">
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
                  </li>
                  <li
                    onClick={handleMenu}
                    aria-controls={open4 ? "usermenu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open4 ? "true" : undefined}
                    className="nav-item mx-0 mx-lg-1"
                  >
                    <Tooltip title="Your Account">
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
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item mx-0 mx-lg-1">
                    <Link
                      className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                      to="/login"
                      style={{ color: "white" }}
                    >
                      Login
                    </Link>
                  </li>
                  <li className="nav-item mx-0 mx-lg-1">
                    <Link
                      className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                      to="/signup"
                      style={{ color: "white" }}
                    >
                      Sign Up
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import CreateRoom from "./CreateRoom";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import JoinRoom from "./JoinRoom";

function Navbar() {
  const user = JSON.parse(localStorage.getItem("profile"))?.user?.username;

  const handleLogout = () => {
    localStorage.removeItem("profile");
    window.location.reload();
  };

  const [open1, setOpen1] = useState(false);
  const handleOpen1 = () => setOpen1(!open1);
  const [open2, setOpen2] = useState(false);
  const handleOpen2 = () => setOpen2(!open2);

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
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <nav
        class="navbar noselect navbar-expand-lg bg-dark text-uppercase fixed-top"
        id="mainNav"
      >
        <div class="container">
          <Link class="navbar-brand js-scroll-trigger" to="/">
            Watch<strong style={{ color: "#9CC3D5" }}>Party</strong>
          </Link>
          <button
            class="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>

          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul
              class="navbar-nav ml-auto"
              style={{
                "font-family": "'Baloo Tammudu 2', cursive",
                "font-size": "20px",
              }}
            >
              {user ? (
                <>
                  <li class="nav-item mx-0 mx-lg-1">
                    <div>
                      <Link
                        onClick={handleOpen1}
                        class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                        style={{
                          color: "white",
                          "background-color": "transparent",
                          border: "none",
                        }}
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
                  <li class="nav-item mx-0 mx-lg-1">
                    <Link
                      onClick={handleOpen2}
                      class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                      style={{ color: "white" }}
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
                  <li class="nav-item mx-0 mx-lg-1">
                    <a
                      class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                      href="#"
                      style={{ color: "white" }}
                    >
                      User: {user}
                    </a>
                  </li>
                  <li class="nav-item mx-0 mx-lg-1">
                    <Link
                      class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                      onClick={handleLogout}
                      style={{ color: "white" }}
                    >
                      Logout
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li class="nav-item mx-0 mx-lg-1">
                    <Link
                      class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                      to="/login"
                      style={{ color: "white" }}
                    >
                      Login
                    </Link>
                  </li>
                  <li class="nav-item mx-0 mx-lg-1">
                    <Link
                      class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
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
    </>
  );
}
export default Navbar;

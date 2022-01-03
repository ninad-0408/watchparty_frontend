import React from "react";
import { Link } from "react-router-dom";
import CreateRoom from "./CreateRoom";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";


function Navbar() {
  const user = JSON.parse(localStorage.getItem("profile"))?.user?.username;

  const handleLogout = () => {
    localStorage.removeItem("profile");
    window.location.reload();
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
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
            <ul class="navbar-nav ml-auto" style={{"font-family": "'Baloo Tammudu 2', cursive", "font-size":"20px"}}>
              {user ? (
                <>
                  <li class="nav-item mx-0 mx-lg-1">
                    <div>
                      <Link
                        onClick={handleOpen}
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
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        open={open}
                        onClose={handleClose}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                          timeout: 500,
                        }}
                      >
                        <Fade in={open}>
                          <Box sx={style}>
                            <CreateRoom props={user}/>
                          </Box>
                        </Fade>
                      </Modal>
                    </div>
                  </li>
                  <li class="nav-item mx-0 mx-lg-1">
                    <Link
                      class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                      to="/signup"
                      style={{ color: "white" }}
                    >
                      Join Room
                    </Link>
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
                    <a
                      class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                      onClick={handleLogout}
                      style={{ color: "white" }}
                    >
                      Logout
                    </a>
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

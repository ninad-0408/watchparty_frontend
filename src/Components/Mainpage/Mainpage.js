import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ReactPlayer from "react-player/lazy";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import Chat from "./Chat";
import People from "./People";
import Setting from "./Setting";

const drawerWidth = "360";

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    height: "85vh",
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      paddingRight: `${parseInt(drawerWidth) + 10}px`,
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),
  })
);

const Mainpage = () => {
  const [loading, setLoading] = useState(false);
  const [url, seturl] = useState("https://www.youtube.com/watch?v=jNC7hJUMmHU");
  const [open, setopen] = useState(true);

  const handleClick = () => {
    setLoading(true);
  };

  const onchange = (e) => {
    seturl(e.target.value);
  };

  const toggleSidebar = () => {
    setopen(!open);
  };

  return (
    <>
      <Box style={{ minHeight: "100vh", minWidth: "100vw" }}>
        <Box spacing={1}>
          <Box style={{ display: "flex" }}>
            <TextField
              label="Video Url"
              sx={{
                width: "70vw",
                margin: "10px",
                backgroundColor: "rgba(20,20,35,0.4)",
              }}
            />
            <LoadingButton
              onClick={handleClick}
              loading={loading}
              loadingPosition="end"
              variant="contained"
              sx={{ width: "23vw", margin: "10px" }}
            >
              Play
            </LoadingButton>
            <Button>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={toggleSidebar}
              >
                <MenuIcon />
              </IconButton>
            </Button>
          </Box>
          <Box spacing={1}>
            <Main open={open}>
              <ReactPlayer url={url} height={"100%"} width={"100%"} />
            </Main>
            <Drawer
              sx={{
                width: `${drawerWidth}px`,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                  width: `${drawerWidth}px`,
                },
              }}
              variant="persistent"
              anchor="right"
              open={open}
            >
              <IconButton onClick={() => setopen(false)}>
                <ChevronRightIcon />
              </IconButton>
              <div
                style={{
                  width: "95%",
                  margin: "10px",
                  backgroundColor: "white",
                  padding: "4px",
                  fontFamily: "'Baloo Tammudu 2', cursive",
                  fontSize: "1.3em",
                }}
              >
                {"Jay Raikhere"}
              </div>
              <Divider />
              <Grid container spacing={1}>
                <Grid item xs={4}>
                  <Button variant="secondary">Chat</Button>
                </Grid>
                <Grid item xs={4}>
                  <Button variant="secondary">People</Button>
                </Grid>
                <Grid item xs={4}>
                  <Button variant="secondary">Settings</Button>
                </Grid>
              </Grid>
              <Divider />
              <Chat />
            </Drawer>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Mainpage;

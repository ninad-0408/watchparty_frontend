import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ReactPlayer from "react-player/lazy";
import Button from "@mui/material/Button";
import Chat from "./Chat";
import People from './People';
import Setting from './Setting';

const Mainpage = () => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
  };

  const onchange = (e) => {
    seturl(e.target.value);
  };

	const [url, seturl] = useState("");

  return (
    <>
      <Box style={{minHeight: "100vh", minWidth: "100vw"}}>
        <Box spacing={2}>
          <Box item style={{ display: "flex" }}>
            <TextField
              label="Video Url"
              sx={{
                width: "70vw",
                margin: "10px",
                backgroundColor: "rgb(167,149,96)",
              }}
            />
            <LoadingButton
              onClick={handleClick}
              loading={loading}
              loadingPosition="end"
              variant="contained"
              sx={{ width: "25vw", margin: "10px" }}
            >
              Send
            </LoadingButton>
          </Box>
          <Box item xs={12}>
            <ReactPlayer url={url} style={{ width: "100%", height: "100%" }} />
          </Box>
            <Grid item>
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
              <Grid container spacing={2}>
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
              <Chat />
            </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Mainpage;

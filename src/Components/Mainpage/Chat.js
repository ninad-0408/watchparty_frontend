import React from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

const Chat = () => {
  return (
    <div>
      <Grid container>
        <Grid item>
          <TextField
            label="Message"
            sx={{
              width: "20vw",
              backgroundColor: "rgb(167,149,96)",
              margin: "10px",
            }}
          ></TextField>
        </Grid>
      </Grid>
    </div>
  );
};

export default Chat;

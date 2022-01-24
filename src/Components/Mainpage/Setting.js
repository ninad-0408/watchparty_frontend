import React, { useState } from "react";
import Switch from "@mui/material/Switch";
import { LoadingButton } from "@mui/lab";
import { Grid, IconButton } from "@mui/material";
import { delRoom } from "../../Api";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const Setting = ({ room, currentuser, socket, handleCheckAdmin }) => {
  const [loading, setloading] = useState(false);
  const [loading1, setloading1] = useState(false);

  const handleChange = () => {
    if (currentuser.isHost) {
      setloading(true);
      socket.emit("close-room", room._id);
    }
    else
    handleCheckAdmin('Host');
  };

  const handleChange1 = () => {
    if (currentuser.isHost) {
      setloading1(true);
      socket.emit("close-room", room._id);
      delRoom(room._id);
    }
    else
    handleCheckAdmin('Host');
  };

  function ctc(data) {
    navigator.clipboard.writeText(data);
  }

  const handleChange2 = () => {
    if (currentuser.isHost) socket.emit("lock-room", room._id, !room.lock);
    else
    handleCheckAdmin('Host');
  };

  return (
    <Grid container margin={1} spacing={4}>
      <Grid item sx={6}>
        Lock Room
        <Switch checked={room.lock} onClick={handleChange2} />
      </Grid>
      <Grid item sx={6}>
      Copy Link
        <IconButton onClick={() => ctc(window.location.href)}>
          <ContentCopyIcon color='info' />
        </IconButton>
      </Grid>
      {currentuser.isHost ? (
        <>
          <Grid item sx={6} marginTop={2}>
            <LoadingButton
              loading={loading}
              color="warning"
              variant="contained"
              onClick={handleChange}
            >
              Close Room
            </LoadingButton>
          </Grid>
          <Grid item sx={6} marginTop={2}>
            <LoadingButton
              loading={loading1}
              color="error"
              variant="contained"
              onClick={handleChange1}
            >
              Delete Room
            </LoadingButton>
          </Grid>
        </>
      ) : (
        <> </>
      )}
    </Grid>
  );
};

export default Setting;

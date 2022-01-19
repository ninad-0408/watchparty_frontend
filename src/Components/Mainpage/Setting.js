import React, { useState } from "react";
import Switch from "@mui/material/Switch";
import { LoadingButton } from "@mui/lab";
import { Grid } from "@mui/material";
import { delRoom } from "../../Api";

const Setting = ({ room, currentuser, socket }) => {
  const [loading, setloading] = useState(false);
  const [loading1, setloading1] = useState(false);

  const handleChange = () => {
    if (currentuser.isHost) {
      setloading(true);
      socket.emit("close-room", room._id);
    }
  };

  const handleChange1 = () => {
    if (currentuser.isHost) {
      setloading1(true);
      socket.emit("close-room", room._id);
      delRoom(room._id);
    }
  };

  const handleChange2 = () => {
    if (currentuser.isHost) socket.emit("lock-room", room._id, !room.lock);
  };

  return (
    <Grid container margin={3} spacing={3}>
      <Grid item sx={6}>
        Lock Room
        <Switch checked={room.lock} onClick={handleChange2} />
      </Grid>
      {currentuser.isHost ? (
        <>
          <Grid item sx={6}>
            <LoadingButton
              loading={loading}
              color="warning"
              variant="contained"
              onClick={handleChange}
            >
              Close Room
            </LoadingButton>
          </Grid>
          <Grid item sx={12} marginTop={2} marginLeft={19}>
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

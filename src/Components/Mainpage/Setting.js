import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Switch from "@mui/material/Switch";

const Setting = ({ room, currentuser, socket }) => {

  const [loading, setloading] = useState(false);

  const handleChange = () => {
    if(currentuser.isHost)
    {
      setloading(true);
      socket.emit('lock-room', room._id, !room.lock);
    }
  }

  return (
    <div>
      <Stack
        spacing={0.5}
        sx={{ width: "95%", margin: "10px", height: "60vh", padding: "0px" }}
        style={{ overflowY: "scroll", "white-space": "nowrap" }}
      >
        <div
          sx={{
            width: "20vw",
            backgroundColor: "rgb(167,149,96)",
            margin: "10px",
          }}
        >
          Lock Room
          <Switch checked={room.lock} loading={loading} onClick={handleChange} />
        </div>
      </Stack>
    </div>
  );
}

export default Setting;

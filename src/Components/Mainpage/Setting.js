import React from "react";
import Stack from "@mui/material/Stack";
import Switch from "@mui/material/Switch";

function Setting() {
  const label = { inputProps: { "aria-label": "Switch demo" } };
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
          <Switch {...label} defaultChecked />
        </div>
        <div
          sx={{
            width: "20vw",
            backgroundColor: "rgb(167,149,96)",
            margin: "10px",
          }}
        >
          Make Room Permanent
          <Switch {...label} />
        </div>
      </Stack>
    </div>
  );
}

export default Setting;

import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import Grid from "@mui/material/Grid";
import { LoadingButton } from "@mui/lab";
import CameraIndoorIcon from "@mui/icons-material/CameraIndoor";

const People = ({ members, currentuser, socket }) => {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <div style={{ overflowY: "auto", whitespace: "nowrap" }}>
      {members.map((data) => {
        return (
          <Item>
            <Cards user={data} currentuser={currentuser} socket={socket} />
          </Item>
        );
      })}
    </div>
  );
};

const Cards = ({ user, currentuser, socket }) => {
  const [load, setload] = useState(false);

  const handleAdmin = () => {
    if (currentuser.isHost && !user.isHost) {
      setload(true);
      if (user.isAdmin) socket.emit("remove-admin", user);
      else socket.emit("add-admin", user);
    }
  };

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Grid container>
          <Grid item xs={7}>
            <Typography variant="h5" component="span">
              {user.username + "  "}
            </Typography>
          </Grid>
          <Grid item>
            <LoadingButton loading={load} onClick={handleAdmin}>
              <AdminPanelSettingsIcon
                color={user.isAdmin ? "primary" : "disabled"}
              />
            </LoadingButton>
          </Grid>

          {currentuser.isHost ? (
            <Grid item>
              <LoadingButton>
                <CancelPresentationIcon color='disabled' />
              </LoadingButton>
            </Grid>
          ) : user.isHost ? (
            <Grid item>
              <LoadingButton>
                <CameraIndoorIcon color="primary" />
              </LoadingButton>
            </Grid>
          ) : (
            <> </>
          )}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default People;

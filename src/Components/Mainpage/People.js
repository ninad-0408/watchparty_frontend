import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Grid from "@mui/material/Grid";

const People = ({members}) => {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));


  return (
    <div style={{ overflowY: "auto", whitespace: "nowrap" }}>
      {members.map((data) => {
        return <Item><Cards username={data.username} /></Item>;
      })}
    </div>
  );
};

const Cards = (props) => {
  const [alignment, setAlignment] = React.useState("web");
  const [selected, setSelected] = React.useState(false);

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
    setSelected(!selected);
  };
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Typography variant="h5" component="span">
              {props.username + "  "}
              {/* username, isAdmin, isHost */}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <ToggleButtonGroup
              color="primary"
              exclusive
              value={alignment}
              selected={selected}
              onChange={handleChange}
            >
              <ToggleButton value="abc">
                <AdminPanelSettingsIcon />
              </ToggleButton>
              <ToggleButton value="ios">
                <CancelPresentationIcon />
              </ToggleButton>
            </ToggleButtonGroup>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default People;

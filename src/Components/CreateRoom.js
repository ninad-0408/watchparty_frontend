import React, { useState } from "react";
import { Avatar, Container, Grid, Paper, Typography, Box } from "@mui/material";

import VideocamIcon from "@mui/icons-material/Videocam";
import AddIcon from "@mui/icons-material/Add";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import LoadingButton from "@mui/lab/LoadingButton";
import { useHistory } from "react-router-dom";

import Input from "./Input";
import { CreateNewRoom } from "../Api/index";

import useStyles from "./styles";

const CreateRoom = () => {
  const classes = useStyles();
  const history = useHistory();

  const [showPassword, setshowPassword] = useState(false);
  const [formData, setformData] = useState({});
  const [processing, setprocessing] = useState(false);

  const handleShowPassword = () => setshowPassword((e) => !e);

  const handleSubmit = async (e) => {
    setprocessing(true);
    e.preventDefault();
    await CreateNewRoom(formData)
      .then((data) => history.push(`/room/${data.room._id}`))
      .catch((error) => console.log(error));
  };

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  // const [fields, setFields] = useState([{ value: null }]);

  // function handleAdd() {
  //   const values = [...fields];
  //   values.push({ value: null });
  //   setFields(values);
  // }

  // function handleRemove(id) {
  //   const values = [...fields];
  //   values.splice(id, 1);
  //   setFields(values);
  // }

  return (
    <Container
      component="main"
      maxWidth="xs"
      style={{
        "max-height": "80vh",
        overflowX: "hidden",
        overflowY: "auto",
        whitespace: "nowrap",
      }}
    >
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <VideocamIcon />
        </Avatar>
        <Typography variant="h5">Create Room</Typography>
        <form
          className={classes.form}
          onSubmit={handleSubmit}
          style={{ "border-radius": "20px" }}
        >
          <Grid container spacing={2}>
            <Input
              name="name"
              label="RoomName"
              type="text"
              handleChange={handleChange}
              required
            />
            <Input
              name="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
              handleChange={handleChange}
            />
            {/* <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                bgcolor: "background.paper",
              }}
            >
              <AddIcon onClick={handleAdd} />
              <RemoveCircleOutlineIcon onClick={handleRemove} />
            </Box>
            {fields.map((field, id) => {
              return (
                <>
                  <Input
                    name="allowed"
                    label="Allowed Users"
                    type="text"
                    handleChange={handleChange}
                    key={field.id}
                  />
                </>
              );
            })} */}
          </Grid>
          <Box marginTop={2} color="primary">
            <LoadingButton type="submit" loading={processing} fullWidth>
              CREATE
            </LoadingButton>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default CreateRoom;

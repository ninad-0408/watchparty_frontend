import React, { useState } from "react";
import {
  Avatar,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
  Box,
// } from "@material-ui/core";
} from "@mui/material";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import AddIcon from '@mui/icons-material/Add';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import LoadingButton from "@mui/lab/LoadingButton";
import { Link, useHistory } from "react-router-dom";

import Input from "./Input";
import { login } from "../Api/index";

import useStyles from "./styles";

const initialState = { username: "", password: "" };

const CreateRoom = (props) => {
  const classes = useStyles();
  const history = useHistory();

  const [showPassword, setshowPassword] = useState(false);
  const [formData, setformData] = useState(initialState);
  const [processing, setprocessing] = useState(false);

  const handleShowPassword = () => setshowPassword((e) => !e);

  const handleSubmit = (e) => {
    e.preventDefault();
    setprocessing(true);
    login(formData)
      .then(() => history.push("/"))
      .catch((error) => console.log(error));
  };

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const [fields, setFields] = useState([{ value: null }]);
  function handleAdd() {
    const values = [...fields];
    values.push({ value: null });
    setFields(values);
  }

  function handleRemove(id) {
    const values = [...fields];
    values.splice(id, 1);
    setFields(values);
  }

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">Create Room</Typography>
        <form className={classes.form} onSubmit={handleSubmit} style={{"border-radius":"20px"}}>
          <Grid container spacing={2} >
            <Input
              name="Roomname"
              label="RoomName"
              type="text" value={props.user}
              handleChange={handleChange}
            />
            <Input
              name="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
              handleChange={handleChange}
            />
            <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          bgcolor: 'background.paper',
        }}
      >
            <AddIcon onClick={handleAdd} />
            <RemoveCircleOutlineIcon onClick={handleRemove} />
        </Box>
            {fields.map((field, id) => {
              return (
                // <div key={`${field}-${id}`}>
                <>
                  <Input
                    name="allowed"
                    label="Allowed Users"
                    type="text"
                    handleChange={handleChange}
                    key={field.id}
                  />
                </>
                //  </div>
              );
            })}
          </Grid>
          <Box marginTop={3}>
            <LoadingButton
              type="submit"
              color="primary"
              className={classes.submit}
              loading={processing}
              variant="contained"
              fullWidth
            >
              Create
            </LoadingButton>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default CreateRoom;

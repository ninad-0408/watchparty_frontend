import React, { useState, useRef, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

const Chat = () => {
  const Item = styled(Paper)(({ theme, you }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "left",
    color: theme.palette.text.secondary,
    ...(you && {
      textAlign: "right",
    }),
  }));
  const username = JSON.parse(localStorage.getItem("profile"))?.user?.username;

  const [value, setvalue] = useState("");

  const [message, setMessage] = useState([]);
  const stack = useRef(null);

  function handleChange(e) {
    if (e.charCode === 13) {
      setMessage((msg) => {
        return [...msg, { message: "Hi", username: "username" }];
      });
      const { name, value } = e.target;
      if (value !== "")
        setMessage((msg) => {
          return [...msg, { [name]: value, username: username }];
        });
      setvalue("");
    }
  }

  const handlep = (e) => {
    setvalue(e.target.value);
  };

  useEffect(() => {
    stack.current.scrollTo(0, stack.current.scrollHeight);
  }, [message]);

  return (
    <div style={{ height: "100%" }}>
      <Stack
        spacing={0.5}
        ref={stack}
        sx={{
          width: "95%",
          margin: "10px",
          height: "63vh",
          padding: "0px",
          overflowY: "auto",
          whitespace: "nowrap",
        }}
      >
        {message.length ? (
          message.map((msg) =>
            msg.username === username ? (
              <Item you>{msg.message}</Item>
            ) : (
              <Item>
                <span style={{ fontWeight: 1000 }}>{msg.username}</span>: &nbsp;
                {msg.message}
              </Item>
            )
          )
        ) : (
          <></>
        )}
      </Stack>
      <TextField
        name="message"
        label="Message"
        onChange={handlep}
        onKeyPress={handleChange}
        value={value}
        sx={{
          width: "90%",
          backgroundColor: "rgba(20,20,35,0.4)",
        }}
      ></TextField>
    </div>
  );
};

export default Chat;

import React, { useState, useRef, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { useParams } from "react-router-dom";
import Picker, { SKIN_TONE_NEUTRAL } from "emoji-picker-react";
import { Grid, IconButton, InputAdornment, TextField } from "@mui/material";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import SendIcon from '@mui/icons-material/Send';

const Chat = ({ message, setMessage, socket }) => {
  const { roomId } = useParams();

  const onEmojiClick = (event, emojiObject) => {
    // console.log(emojiObject.emoji);
    setvalue((prev) => {
      return prev + emojiObject.emoji;
    });
  };
  // console.log(roomId);
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

  const stack = useRef(null);

  function handleChange(e) {
    if (e.charCode === 13) {
      const { name, value } = e.target;
      if (value !== "") {
        socket.emit("message", { value, roomId });
        setMessage((msg) => {
          return [...msg, { [name]: value, username: username }];
        });
        setvalue("");
      }
    }
  }
  const [open, setOpen] = useState(false);
  function handleClick() {
    console.log(open);
    setOpen(!open);
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
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleClick}>
                <InsertEmoticonIcon sx={open?{color:"green"}:{color:"rgba(20,20,35,0.4)"}}></InsertEmoticonIcon>
              </IconButton>
              <IconButton onClick={handleChange}>
                <SendIcon></SendIcon>
              </IconButton>
            </InputAdornment>
          ),
        }}
      >
        {" "}
      </TextField>

      {open ? (
        <Picker
          onEmojiClick={onEmojiClick}
          skinTone={SKIN_TONE_NEUTRAL}
          disableSearchBar={true}
          pickerStyle={{ width: "100%" }}
        />
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Chat;

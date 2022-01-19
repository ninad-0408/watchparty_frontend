import React, { useEffect, useState, useRef } from "react";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";
import Box from "@mui/material/Box";
import ReactPlayer from "react-player/lazy";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { getRoom } from "../../Api/index.js";
import Chat from "./Chat";
import People from "./People";
import Setting from "./Setting";
import { useParams, useHistory } from "react-router-dom";
import { io } from "socket.io-client";
import { baseUrl } from "../../Constants/baseUrl";
import Alert from "@mui/material/Alert";
import { CircularProgress, Fade, Modal } from "@mui/material";
import RoomPassword from "../RoomPassword.js";

const Room = () => {
  const token = JSON.parse(localStorage.getItem("profile"))?.token;
  const socket = io(baseUrl, {
    extraHeaders: {
      Authorization: `Bearer ${token}`,
    },
  });
  
  useEffect(() => {
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <>{socket !== null ? <Mainpage socket={socket} /> : <CircularProgress />}</>
  );
};

const drawerWidth = "360";

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    height: "85vh",
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginRight: `${parseInt(drawerWidth) + 10}px`,
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  })
);

const Mainpage = ({ socket }) => {
  const { roomId } = useParams();
  const [url, seturl] = useState("");
  const [val, setval] = useState("");
  const [open, setopen] = useState(true);
  const [room, setRoom] = useState({});
  const [members, setmembers] = useState([]);
  const [message, setMessage] = useState([]);
  const [load, setload] = useState(false);
  const history = useHistory();

  const [playing, setplaying] = useState(false);
  const player = useRef(null);

  const user = JSON.parse(localStorage.getItem("profile"))?.user;
  const [currentuser, setcurrentuser] = useState(null);
  const [open2, setOpen2] = useState(false);
  const handleOpen = () => setOpen2(!open2);

  const style = {
    position: "absolute",
    top: "20%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    boxShadow: 24,
    p: 4,
  };

  const onchange = (e) => {
    if (currentuser.isAdmin) 
      {
        setval(e.target.value);
      }
  };

  const toggleSidebar = () => {
    setopen(!open);
  };

  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // const [streaming, setStreaming] = useState();
  // const myVideo = useRef();
  // const userVideo = useRef();
  const [alert, setAlert] = useState(null);
  const [alerterror, setError] = useState(null);

  useEffect(async () => {
    await getRoom(roomId).then((res) => {
      setRoom(res);
      if (res.open || user._id == res.host)
        socket.emit("new-member", roomId, "");
      else setOpen2(true);
    });
  }, []);

  useEffect(() => {
    socket.on("message", (mess) => {
      setMessage((prev) => [...prev, mess]);
    });

    socket.on("member-connected", (member) => {
      setcurrentuser(member.find((mem) => mem._id === user._id));
      setmembers(() => [...member]);
    });

    socket.on("error", ({ message }) => {
      setError(message);
      history.push("/");
    });

    socket.on("room-update", (data) => {
      setRoom(data);
    });

    socket.on("url", (incurl) => {
      seturl(incurl);
      setval(incurl);
      setload(false);
    });

    socket.on("alert", (msg) => {
      setAlert(msg);
    });

    socket.on("seek", (data) => {
      player.current.seekTo(data.seek, "seconds");
      if (data.pause) {
        setplaying(false);
      } else setplaying(true);
    });
    
    socket.on('seek-only', (data) => {
      player.current.seekTo(data.seek, "seconds");
    });

    socket.on("disconnect", () => {
      history.push("/");
    });

    // socket.on("stream", (stream) => {
    // 		myVideo.current.srcObject = stream;
    // 	});

    // socket.on("stream", (stream) => {
    //   myVideo.current.srcObject = stream;
    // });
  }, [socket]);

  useEffect(async() => {
    console.log(currentuser);
    if(currentuser?.isHost)
    {
      sendUrl();        
      setTimeout(() => {
        seek();
      }, 4000);
    }
  }, [members]);

  const sendUrl = () => {
    if (currentuser.isAdmin) {
      setload(true);
      socket.emit("url", { roomId, val });
    }
  };

  const seek = () => {
    if (currentuser.isAdmin) {
      var currentTime = player.current.getCurrentTime();
      socket.emit("seek-only", {
        roomId: roomId,
        seek: currentTime,
      });
    }
  };

  const pause = () => {
    if (currentuser.isAdmin) {
      var currentTime = player.current.getCurrentTime();
      socket.emit("seek", {
        roomId: roomId,
        seek: currentTime,
        pause: true,
      });
    }
  };

  const play = () => {
    if (currentuser.isAdmin) {
      var currentTime = player.current.getCurrentTime();
      socket.emit("seek", {
        roomId: roomId,
        seek: currentTime,
        pause: false,
      });
    }
  };

  // const [file, setfile] = useState(null);
  // const [media, setmedia] = useState(null);

  // const upload = (e) => {
  // 	seturl(URL.createObjectURL(e.target.files[0]));
  // 	player.current.play();
  // };

  // const mediastream = ()=>{navigator.mediaDevices.getDisplayMedia({audio:true,video:true}).then((currentStream) => {
  //   setStreaming(currentStream);
  //   myVideo.current.srcObject = currentStream;
  //   socket.emit("stream", {currentStream})
  // })}

  // const camstream = ()=>{navigator.mediaDevices.getUserMedia({audio:true,video:true}).then((currentStream) => {
  //   setStreaming(currentStream);
  //   myVideo.current.srcObject = currentStream;
  //   socket.emit("stream",currentStream)
  // })}

  return (
    <>
      {alert && (
        <Alert variant="filled" severity="info" onClose={() => setAlert(null)}>
          {alert}
        </Alert>
      )}
      {alerterror && (
        <Alert variant="filled" severity="error" onClose={() => setError(null)}>
          {alerterror}
        </Alert>
      )}
      <Modal open={open2} onClose={handleOpen} closeAfterTransition>
        <Fade in={open2}>
          <Box sx={style}>
            <RoomPassword
              roomId={roomId}
              socket={socket}
              handleOpen={handleOpen}
            />
          </Box>
        </Fade>
      </Modal>
      <Box style={{ minHeight: "100vh", minWidth: "100vw" }}>
        <Box spacing={1}>
          <Box style={{ display: "flex" }}>
            <Button variant="contained" color="primary" sx={{ margin: "10px" }}>
              {room.name}
            </Button>
            <TextField
              label="Video Url"
              sx={{
                width: "70vw",
                margin: "11px",
                backgroundColor: "rgba(20,20,35,0.4)",
              }}
              variant='outlined'
              onChange={onchange}
              value={val}
            />
            <LoadingButton
              onClick={sendUrl}
              loading={load}
              loadingPosition="end"
              variant="contained"
              sx={{ width: "23vw", margin: "10px" }}
            >
              Send
            </LoadingButton>
            <Button>
              <IconButton color="inherit" onClick={toggleSidebar}>
                <MenuIcon />
              </IconButton>
            </Button>
          </Box>
          <Box spacing={1}>
            <Main open={open}>
              <ReactPlayer
                url={url}
                height={"100%"}
                width={"100%"}
                playing={playing}
                controls={true}
                ref={player}
                onPause={pause}
                onPlay={play}
                onSeek={seek}
              />
            </Main>
            <Drawer
              sx={{
                width: `${drawerWidth}px`,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                  overflowX: "hidden",
                  width: `${drawerWidth}px`,
                },
              }}
              variant="persistent"
              anchor="right"
              open={open}
            >
              <IconButton onClick={() => setopen(false)}>
                <ChevronRightIcon />
              </IconButton>
              <div
                style={{
                  width: "95%",
                  margin: "10px",
                  backgroundColor: "white",
                  padding: "4px",
                  fontFamily: "'Baloo Tammudu 2', cursive",
                  fontSize: "1.3em",
                  fontWeight: 1000,
                }}
              >
                {user.username}
              </div>
              <Divider />
              <Tabs value={value} onChange={handleChange}>
                <Tab value="1" sx={{ width: "33%" }} label="CHAT" />
                <Tab value="2" sx={{ width: "33%" }} label="PEOPLE" />
                <Tab value="3" sx={{ width: "33%" }} label="SETTINGS" />
              </Tabs>
              {value === "1" ? (
                <Chat
                  message={message}
                  setMessage={setMessage}
                  socket={socket}
                />
              ) : value === "2" ? (
                <People
                  members={members}
                  currentuser={currentuser}
                  socket={socket}
                />
              ) : (
                <Setting
                  room={room}
                  currentuser={currentuser}
                  socket={socket}
                />
              )}
            </Drawer>
          </Box>
        </Box>
      </Box>
      {/* <Button onClick = {()=>mediastream()}>screen-share</Button>
			<Button onClick = {()=>camstream()}>Camera</Button>
			<input type="file" accept='video/*' id="myfile" onChange={upload} />
			<video playsInline muted ref={myVideo} autoPlay  />
			<video playsInline muted ref={userVideo} autoPlay /> */}
    </>
  );
};

export default Room;

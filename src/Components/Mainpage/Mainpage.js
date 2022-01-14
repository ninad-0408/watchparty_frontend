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

import Chat from "./Chat";
import People from "./People";
import Setting from "./Setting";
import { useParams } from "react-router-dom";

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
  const [loading, setLoading] = useState(false);
  const [url, seturl] = useState("");
  const [open, setopen] = useState(true);

  const [members, setmembers] = useState([]);
  const [message, setMessage] = useState([]);

  const [progress, setProgress] = useState();
	const [playing, setplaying] = useState(true);
	const player = useRef(null);

  const username = JSON.parse(localStorage.getItem("profile"))?.user?.username;

  const handleClick = () => {
    setLoading(true);
  };

  const onchange = (e) => {
    socket.emit("url", {roomId, url: e.target.value});
    seturl(e.target.value);
  };

  const toggleSidebar = () => {
    setopen(!open);
  };

  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [streaming, setStreaming] = useState();
	const myVideo = useRef();
	const userVideo = useRef();

  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected", socket);
      socket.emit("new-member", roomId);
    });

    socket.on("message", (mess) => {
      setMessage((prev) => [...prev, mess]);
    });

    socket.on("member-connected", (member) => {
      setmembers(() => [...member]);
    });

    socket.on("url", (url) => {
			seturl(url);
		});

		socket.on("seek", (data) => {
			if (data.pause) {
				setProgress(data.seek);
				player.current.seekTo(data.seek, "seconds");
				setplaying(false);
			} else setplaying(true);
		});

		socket.on("stream", (stream) => {
				myVideo.current.srcObject = stream;
			});

  }, [socket]);

  // const [progress, setProgress] = useState();
  // const player = useRef(null);

  const seek = () => {
		socket.emit("seek", {
      roomId: roomId,
			seek: progress,
			pause: false,
		});
		player.current.seekTo(progress, "seconds");
	};

  const pause = () => {
		var currentTime = player.current.getCurrentTime();
		socket.emit("seek", {
			roomId: roomId,
			seek: currentTime,
			pause: true,
		});
	};
	const play = () => {
		var currentTime = player.current.getCurrentTime();
		socket.emit("seek", {
			roomId: roomId,
			seek: progress,
			pause: false,
		});
	};


	const [file, setfile] = useState(null);
	const [media, setmedia] = useState(null);

	const upload = (e) => {
		seturl(URL.createObjectURL(e.target.files[0]));
		player.current.play();
	};

  const mediastream = ()=>{navigator.mediaDevices.getDisplayMedia({audio:true,video:true}).then((currentStream) => {
    setStreaming(currentStream);
    myVideo.current.srcObject = currentStream;
    socket.emit("stream", {currentStream})
  })}

const camstream = ()=>{navigator.mediaDevices.getUserMedia({audio:true,video:true}).then((currentStream) => {
    setStreaming(currentStream);
    myVideo.current.srcObject = currentStream;
    socket.emit("stream",currentStream)
  })}

  return (
    <>
      <Box style={{ minHeight: "100vh", minWidth: "100vw" }}>
        <Box spacing={1}>
          <Box style={{ display: "flex" }}>
            <TextField
              label="Video Url"
              sx={{
                width: "70vw",
                margin: "10px",
                backgroundColor: "rgba(20,20,35,0.4)",
              }}
              onChange={onchange}
              value={url}
            />
            <LoadingButton
              onClick={seek}
              loading={loading}
              loadingPosition="end"
              variant="contained"
              sx={{ width: "23vw", margin: "10px" }}
            >
              Play
            </LoadingButton>
            <Button>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={toggleSidebar}
              >
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
								volume={0.9}
								start={15}
								rel={0}
								ref={player}
								onPause={pause}
								onPlay={() => play()}
								onSeek={pause}
								onProgress={(e) => {
									// console.log(progress);
									setProgress(e.playedSeconds);
								}}
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
                }}
              >
                {username}
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
                <People members={members} />
              ) : (
                <Setting />
              )}
            </Drawer>
          </Box>
        </Box>
      </Box>
      <Button onClick = {()=>mediastream()}>screen-share</Button>
			<Button onClick = {()=>camstream()}>Camera</Button>
			<input type="file" accept='video/*' id="myfile" onChange={upload} />
			<video playsInline muted ref={myVideo} autoPlay  />
			<video playsInline muted ref={userVideo} autoPlay />

    </>
  );
};

export default Mainpage;

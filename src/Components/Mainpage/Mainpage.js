import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ReactPlayer from "react-player/lazy";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Chat from "./Chat.js";
import Setting from "./Setting.js";
import People from "./People.js";

const Mainpage = () => {
	const Div = styled("div")(({ theme }) => ({
		...theme.typography.button,
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(1),
	}));

	const [loading, setLoading] = useState(false);
	const handleClick = () => {
		setLoading(true);
	};
	const onchange = (e) => {
		seturl(e.target.value);
	};

	const [url, seturl] = useState("");

	return (
		<>
			<div style={{ display: "flex" }}>
				<TextField
					label="Search video or paste link"
					freeSolo
					sx={{
						width: "70vw",
						margin: "10px",
						backgroundColor: "rgb(167,149,96)",
					}}
					onChange={onchange}
				/>
				<LoadingButton
					onClick={handleClick}
					loading={loading}
					loadingPosition="end"
					variant="contained"
					sx={{ width: "25vw", margin: "10px" }}
				>
					Play
				</LoadingButton>
			</div>
			<Box sx={{ flexGrow: 1 }}>
				<Grid container spacing={2}>
					<Grid item xs={9} style={{ "min-width": "414px" }}>
						<div
							style={{
								height: "650px",
								"min-width": "70vw",
								backgroundColor: "white",
								margin: "10px",
							}}
						>
							<ReactPlayer url={url} width="100%" height="100%" />
						</div>
					</Grid>
					<Grid item>
						<Div style={{ width: "95%", margin: "10px" }}>{"Jay Raikhere"}</Div>
						<Grid container spacing={2}>
							<Grid item xs={4}>
								<Button variant="secondary">Chat</Button>
							</Grid>
							<Grid item xs={4}>
								<Button variant="secondary">People</Button>
							</Grid>
							<Grid item xs={4}>
								<Button variant="secondary">Settings</Button>
							</Grid>
						</Grid>
						<Chat />
						{/* <People /> */}
						{/* <Setting /> */}
					</Grid>
				</Grid>
			</Box>
		</>
	);
};

export default Mainpage;

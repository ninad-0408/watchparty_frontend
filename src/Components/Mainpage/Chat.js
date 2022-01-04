import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

const Chat = () => {
	const Item = styled(Paper)(({ theme }) => ({
		...theme.typography.body2,
		padding: theme.spacing(1),
		textAlign: "center",
		color: theme.palette.text.secondary,
	}));

	const [value, setvalue] = useState("");

	const [message, setMessage] = useState([
		{
			message: " ",
		},
	]);

	function handleChange(e) {
		if (e.charCode === 13) {
			const { name, value } = e.target;
			console.log(value);
			setMessage((msg) => {
				return [...msg, { [name]: value }];
			});
			setvalue("");
		}
	}

	const handlep = (e) => {
		setvalue(e.target.value);
	};
	return (
		<div>
			<Stack
				spacing={0.5}
				sx={{
					width: "95%",
					margin: "10px",
					height: "60vh",
					padding: "0px",
					overflowY: "scroll",
					whitespace: "nowrap"
				}}
			>
				<Item>user: Hello</Item>
				{message.length ? (
					message.map((msg) => <Item>{msg.message}</Item>)
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
							margin: "10px",
						}}
					></TextField>
		</div>
	);
};

export default Chat;

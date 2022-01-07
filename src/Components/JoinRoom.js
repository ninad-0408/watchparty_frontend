import React from 'react';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import {getRooms} from "../Api/index.js";
import {useEffect,useState} from 'react';

function JoinRoom() {
  const [arr,setArr] = useState([]);
   useEffect(() => {
     getRooms().then((res)=>{
      setArr(res);
      // console.log(arr);
     });
   })
   
    return (
        <Container component="main" maxWidth="xs">
        <Typography variant="h5" component="div" sx={{textAlign:'center'}}>
          Open rooms
        </Typography>
        <div style={{'max-height':'80vh',overflowX:'hidden',overflowY:'scroll',whitespace: "nowrap",}}>
        {arr.map((room)=>{
            return <Card sx={{ minWidth: 275 }}>
      <CardContent>
      <Grid container spacing={2}>
      <Grid item xs={8}>
        <Typography variant="h6" component="div">
          {room.name}
        </Typography>
        <Typography sx={{ mb: 0.3 }} color="text.secondary">
        {room.host.name}
        </Typography>
        </Grid>
        <Grid item xs={4} style={{'alignItems':'center'}}>
<Button variant="contained" sx={{marginTop:'15px'}}>Join</Button>
</Grid></Grid>
      </CardContent>
    </Card>
    })}
    </div>
        </Container>
    )
};

export default JoinRoom;
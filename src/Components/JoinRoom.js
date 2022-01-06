import React from 'react';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

function JoinRoom() {

    var arr=[{name:'Room name1', host:'Room Host1'},{name:'Room name2', host:'Room Host2'},{name:'Room name3', host:'Room Host3'},{name:'Room name', host:'Room Host'},{name:'Room name', host:'Room Host'},{name:'Room name', host:'Room Host'},{name:'Room name', host:'Room Host'},{name:'Room name', host:'Room Host'},{name:'Room name', host:'Room Host'},{name:'Room name', host:'Room Host'},{name:'Room name', host:'Room Host'},]

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
        {room.host}
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

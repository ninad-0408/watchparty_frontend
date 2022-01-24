import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import React from 'react';

import Slide from '@mui/material/Slide';
import { AirlineSeatFlatAngled } from '@material-ui/icons';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


export const Dialogs = ({open,setOpen,setflag,setflag1,msg}) => {
    
  const handleDisagree = () => {
    setOpen(false);
  };
  const handleAgree = () => {
    // setOpen(false);
    msg==="Close"?setflag(true):setflag1(true);
  };
  return <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleDisagree}
      >
        <DialogTitle>{msg} Room</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          Do You Really Want To The Room
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDisagree}>Disagree</Button>
          <Button onClick={handleAgree}>Agree</Button>
        </DialogActions>
      </Dialog>
  </div>;
};

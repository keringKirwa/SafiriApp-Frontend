import * as React from 'react';
import { Snackbar } from '@mui/material/Snackbar';
import { MuiAlert } from '@mui/material/Alert';

const Alert = function Alert(props) {
    
  return <MuiAlert elevation={6}  variant="filled" {...props} />;
};


export const SnackBar = () => {
    
    const [open, setOpen] = React.useState(false);
    
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

    return (
      
    
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" >
          This is a success message!
        </Alert>
      </Snackbar>
    
  );
}

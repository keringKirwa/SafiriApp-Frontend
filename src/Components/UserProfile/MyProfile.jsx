import React, { useState,useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

import './styles.css';


const style = {
  position: 'absolute' ,
  top: '18%',
  left: '17%',
 width: 350,
  height:'200px',
    p: 2,
  borderRadius:3,
};

export const MyProfile = ({ open, setOpen }) => {
    
  const [user, setUser] = useState({});
  const { email, name } = user;

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('profile')));
  }, []);
    
const handleClose = () => setOpen(false);
    
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className='modal'
      >
        <Box sx={style} className='box'>
          <Typography  variant="h6" component="h1" className='profile'>
            My Profile
          </Typography>

          <Typography id="modalDescription" sx={{ mt: 2 }}>
            <h2>Name:</h2> {name} 
          </Typography>

          <Typography id="modalDescription" sx={{ mt: 2 }}>
            <h2>Email:</h2>
             {email}
          </Typography>
                  <Button color='primary' variant='contained' component={Link} to="/home/settings"><div className="h3Button">Update Profile Details</div></Button>
        </Box>
      </Modal>
    </div>
  );
}
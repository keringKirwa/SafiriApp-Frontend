import React, { useEffect, useState } from 'react';
import { AppBar, Typography, Toolbar, Button } from '@mui/material';
import { IconButton } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { logout } from '../reducers/authSlice';

import { useDispatch } from 'react-redux';

import './NavBar.css';
import { MyDp } from '../Components/UserProfile/MyDp';

export const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prevIsOpen)=>!prevIsOpen);
  }

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('profile'))?.name
  );

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('profile'))?.name);
  }, [location]);

  const handleLogout = async () => {
    dispatch(logout());
    setUser(null);
    localStorage.clear();
    navigate('/home/login');
  };

  return (

    <AppBar style={{ marginBottom: '10px' }} className="appBar">
    
      {open && <MyDp open={open} setOPen={setOpen} /> }

      <Toolbar className="toolbarMain">
        <h2 className="fontFamily" id="header1">
          <span style={{ color: 'rgb(25,25,112)' }} id="header">
            {' '}
            Safiri :{' '}
          </span>

          <span id="introducing">Introducing the Difference....</span>
        </h2>
        <Typography id="phoneTypo" variant="h5">
          📞0734536464
        </Typography>

        <Typography id="emailTypo" variant="h5">
          📧 : safiri@gmail.com
        </Typography>

        <div>
          {user ? (
            <div className="logoutDiv">
              <Typography variant="h5" id="user">
                {user.split(' ')[0]}
              </Typography>
              
               <IconButton onClick={handleOpen}><ArrowDropDownIcon size='large'></ArrowDropDownIcon>Profile</IconButton>

              <Button
                variant="contained"
                color="error"
                id="logout"
                onClick={handleLogout}
              >
                Logout
              </Button>
             
            </div>
          ) : (
            <Button
              id="loginButton"
              variant="contained"
              color="primary"
              size="large"
              component={Link}
              to="home/register"
            >
              {' '}
              <div className="h3Div">Sign In </div>
              </Button>
             
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

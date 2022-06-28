import React, { useEffect, useState } from 'react';
import { AppBar, Typography, Toolbar, Button } from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { logout } from '../reducers/authSlice';

import { useDispatch } from 'react-redux';

import './NavBar.css';

export const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(localStorage.getItem('user'));

  useEffect(() => {
    setUser(localStorage.getItem('user'));
  }, [location]);

  const handleLogout = async () => {
    dispatch(logout());
    setUser(null);
    localStorage.clear();
    navigate('/home/login');
  };

  return (

    <AppBar style={{ marginBottom: '10px' }} className="appBar">


      <Toolbar className="toolbarMain">
        <h2 className="fontFamily" id="header1">
          <span style={{ color: 'rgb(25,25,112)' }} id="header">
            {' '}
            Safiri :{' '}
          </span>

          <span id="introducing">Introducing the Difference....</span>
        </h2>
        <div id='userDetails'>
          {user ? (
            <>
              <Typography variant="h5" id="user">
                {user.split(' ')[0]}
              </Typography>


              <Button
                variant="contained"
                color="error"
                id="logout"
                onClick={handleLogout}
              >
                Logout
              </Button>
              </>
          )
           : (
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

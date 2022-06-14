import React, { useEffect, useState } from 'react';
import { AppBar, Typography, Toolbar, Button } from '@mui/material';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { logout } from '../reducers/authSlice';

import { useDispatch } from 'react-redux';

import './NavBar.css';

/* the Height of my navbar is 100px that is from the top  of the viewport */

export const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

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
    navigate('/register');
  };

  /* but why use LocalStorage in the code below , the reason is that the react Hooks cannot be called inside a callbacks , that is , useSelector cannot be called inside the callback of useEffect. */

  return (
    <AppBar style={{ marginBottom: '10px' }} className="appBar">
      {/* for the toolabar , dispaly is a flex, flex-diretionis a row . app bar uses display column */}

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

              <Button
                variant="contained"
                color="secondary"
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

import { Typography } from '@mui/material';
import Container from '@mui/material/Container';
import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import {
  Bookmark,
  List,
  ExitToApp,
  Home,
  Person,
  Settings,
  Storefront,
  TabletMac,
} from '@mui/icons-material';

const Leftbar = () => {
  return (
    <Container className="mainContainer">
      <div className="mainDivItem">
        <Link to="/">
          <Home className="icon" />
        </Link>
        <Typography className="text">Homepage</Typography>
      </div>
      <div className="mainDivItem">
        <Person className="icon" />
        <Typography className="text">My Profile</Typography>
      </div>
      <div className="mainDivItem">
        <Bookmark className="icon" />
        <Typography className="text">My Tickets</Typography>
      </div>
      <div className="mainDivItem">
        <List className="icon" />
        <Typography className="text">Categories</Typography>
      </div>
      <div className="mainDivItem">
        <TabletMac className="icon" />
        <Typography className="text">Apps</Typography>
      </div>

      <div className="mainDivItem">
        <Storefront className="icon" />
        <Typography className="text">Market Place</Typography>
      </div>
      <div className="mainDivItem">
        <Settings className="icon" />
        <Typography className="text">Acc.Settings</Typography>
      </div>

      <div className="mainDivItem">
        <ExitToApp className="icon" />
        <Typography className="text">Logout</Typography>
      </div>
    </Container>
  );
};

export default Leftbar;

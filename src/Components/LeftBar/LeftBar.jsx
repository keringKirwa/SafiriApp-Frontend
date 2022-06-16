import React,{useState} from 'react';
import { Typography } from '@mui/material';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
import {
  Bookmark,
  List,
  Home,
  Person,
  Settings,
  Storefront,
  TabletMac,
} from '@mui/icons-material';

import { MyProfile } from '../UserProfile/MyProfile';
import './styles.css'




const Leftbar = () => {

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prevIsOpen) => !prevIsOpen);
  }
  return (
    <Container className="mainContainer">

      {open && <MyProfile open={open} setOpen={ setOpen}/>}
      

      {/* FIXME: add the MyProfile component here  */}

      <Link to="/"  style={{ textDecoration: 'none' }}>
        <div className="mainDivItem">
          <Home className="icon" />
          <Typography className="text">Homepage</Typography>
        </div>
      </Link>

      <div className="mainDivItem">
        <IconButton onClick={handleClick}> <Person className="icon profile" /><Typography className="text profile">My Profile</Typography>
        </IconButton>
        
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

       <Link to="/home/settings" style={{ textDecoration: 'none' }}>
        <div className="mainDivItem">
          <Settings className="icon" />
          <Typography className="text">Acc.Settings</Typography>
        </div>
      </Link>
    </Container>
  );
};

export default Leftbar;

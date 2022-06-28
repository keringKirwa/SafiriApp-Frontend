import React,{useState} from 'react';
import { Typography } from '@mui/material';
import Container from '@mui/material/Container';
import { Link, useNavigate } from 'react-router-dom';
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

import './styles.css'
import { toast } from 'react-hot-toast';




const Leftbar = () => {

  const [open, setOpen] = useState(false);
  const user = localStorage.getItem('user');
  const navigate = useNavigate();
  const handleClick = () => {

    if (!user) {
      toast.error("No User Is Logged In Yet , PLease Sign In Or Register to view your Profile!");
      console.log(open);
      return;
    }
    setOpen((prevIsOpen) => !prevIsOpen);
  }

  const handeTicketPageRequest = () => {

    if (!user) {
      toast.error("No User Is Logged In Yet , PLease Sign In Or Register To See Your Tickets !!!");
      return;
    }
    navigate('/home/tickets');

  }
   const handeAccountPageRequest = () => {

    if (!user) {
      toast.error("PLease Sign In To Update Your Account Details !!!");
      return;
    }
    navigate('/home/settings');

  }
  return (
    <Container className="mainContainer">


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
        <IconButton onClick={handeTicketPageRequest }> <Bookmark  className="icon " /><Typography className="text profile">My Tickets</Typography>
        </IconButton>
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
        <IconButton onClick={handeAccountPageRequest }> <Settings  className="icon " /><Typography className="text profile">Acc. Settings</Typography>
        </IconButton>
      </div>
    </Container>
  );
};

export default Leftbar;

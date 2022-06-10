import {  Typography } from "@material-ui/core";
import Container from '@material-ui/core/Container';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';


import {

  Bookmark,
  List,
  ExitToApp,
  Home,
  Person,
  Settings,
  Storefront,
  TabletMac,
} from "@material-ui/icons";

/* 100vh in the below case means that the height is full screen. */

const useStyles = makeStyles((theme) => ({
  container: {
    height: "600px",
    width: "15%",
    alignItems:"center",
    color: "black",
    paddingTop: theme.spacing(15),
    position: "fixed",
    marginRight:'0px',
    top: 0,
    borderRight: "1px solid violet",
  },
  item: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(3),
      cursor: "pointer",
    },
  },
  icon: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      fontSize: "18px",
    },
  },
  text: {
    fontWeight: 550,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const Leftbar = () => {
  const classes = useStyles();
  
  return (

    <Container className={classes.container}>
      
      <div>
      <div className={classes.item}>
        <Link to="/">
          <Home className={classes.icon} />
        </Link>
        <Typography className={classes.text}>Homepage</Typography>
      </div>
      <div className={classes.item}>
        <Person className={classes.icon} />
        <Typography className={classes.text}>My Profile</Typography>
      </div>
      <div className={classes.item}>
        <List className={classes.icon} />
        <Typography className={classes.text}>Categories</Typography>
      </div>      
      <div className={classes.item}>
        <TabletMac className={classes.icon} />
        <Typography className={classes.text}>Apps</Typography>
      </div>
      <div className={classes.item}>
        <Bookmark className={classes.icon} />
        <Typography className={classes.text}>Collections</Typography>
      </div>
      <div className={classes.item}>
        <Storefront className={classes.icon} />
        <Typography className={classes.text}>Market Place</Typography>
      </div>
      <div className={classes.item}>
        <Settings className={classes.icon} />
        <Typography className={classes.text}>Acc.Settings</Typography>
      </div>
      <div className={classes.item}>
        <ExitToApp className={classes.icon} />
        <Typography className={classes.text}>Logout</Typography>
        </div>
        </div>

    </Container>
  );
};

export default Leftbar;
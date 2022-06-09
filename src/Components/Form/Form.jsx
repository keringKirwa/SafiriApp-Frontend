import React from 'react';
import {  Typography, Paper } from '@material-ui/core';
import SafariImage from '../../images/carLogo.jpg';
import { Divider } from '@material-ui/core';
import useStyles from './styles.js'
import './styles.css';

export const Form = () => {
  const classes = useStyles();

  return (<Paper className={classes.NotLoggedinPaper} id='notLoggedInPaper' >

    <Typography variant="h6" align="center">
      <h2 id='safiriText'>Safiri Point Travel</h2>
        <img src={SafariImage} alt="SuperWing Ltd." gutterBottom id='SafariImage' />
        <Divider></Divider>
        <br />
        PLease sign in to:<br></br>

        <strong>✔️</strong> : <span style={{ color: "green" }}>
          Book a Travel...
        </span>
        <br />
        <strong>✔️</strong> : <span style={{ color: "green" }}>
          Receive a ticket now
        </span>
        <br />


      </Typography>
  </Paper>)
  }
   
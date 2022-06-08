import React from 'react';
import {  Typography, Paper } from '@material-ui/core';
import SuperwingLogo from '../../images/Superwing1.JPG';
import { Divider } from '@material-ui/core';
import useStyles from './styles.js'
import './styles.css';

export const Form = () => {
  const classes = useStyles();

  return (<Paper className={classes.NotLoggedinPaper} id='notLoggedInPaper' >

      <Typography variant="h6" align="center">
        <img src={SuperwingLogo} alt="SuperWing Ltd." height="100px" width="150px" gutterBottom id='superwingImage' />
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
   
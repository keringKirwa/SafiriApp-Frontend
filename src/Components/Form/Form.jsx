import React from 'react';
import { Typography ,Paper} from '@mui/material';
import SafariImage from '../../images/carLogo.jpg';
import './styles.css';

export const Form = () => {

  return (
    <Paper className='notLoggedInPaper' id='notLoggedInPaper' >

    <Typography variant="h6" align="center">
      <h2 id='safiriText'>Safiri Point Travel</h2>
        <img src={SafariImage} alt="SuperWing Ltd." gutterBottom id='SafariImage' />

      </Typography>
  </Paper>)
  }
   
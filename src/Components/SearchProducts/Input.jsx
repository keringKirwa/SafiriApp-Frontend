import React from 'react';
import { TextField,Grid } from '@mui/material';


/* just like calling a function and passing parameters to it , so is the Input component .among the arquments passed are the handleChange function , half flag etc */

const Input = ({ name, handleChange, label, half, autoFocus, type, handleShowPassword }) => (
  <Grid item xs={12} sm={half ? 6 : 12}>
    <TextField
      name={name}
      onChange={handleChange}
      variant="outlined"
      required
      fullWidth
      label={label}
      autoFocus={autoFocus}
      type={type}
      
    />
  </Grid>
);

export default Input;

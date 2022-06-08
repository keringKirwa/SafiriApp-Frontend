import React from 'react';
import { Grid, InputAdornment, TextField, IconButton } from '@material-ui/core';
import VisibilityOff  from '@material-ui/icons/VisibilityOff';
import  Visibility from '@material-ui/icons/Visibility';

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
      InputProps={name === 'password' ? {
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleShowPassword}>
              {type === 'password' ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      } : null}
    />
  </Grid>
);

export default Input;

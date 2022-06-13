import React from 'react';
import { Grid, InputAdornment, TextField, IconButton } from '@mui/material';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';

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
              {type === 'password' ? <VisibilityIcon/> : <VisibilityOffOutlinedIcon />}
            </IconButton>
          </InputAdornment>
        ),
      } : null}
    />
  </Grid>
);

export default Input;

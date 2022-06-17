import React, { useState, useEffect } from 'react';
import { Avatar, Grid, Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Settings } from '@mui/icons-material';
import toast from 'react-hot-toast';

import {
  signUp,
  updateAccountDetails,
} from '../../ActionCreators/authActionCreator';
import './accountStyles.css';
import Input from './Input';

export const Account = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const { userEmail } = useSelector((state) => state.user);
  const initialState = userDetails;

  useEffect(() => {
    updateAccountDetails({ email: userEmail }, dispatch, setUserDetails);
  }, [dispatch, userEmail, setUserDetails]);

  const handleShowPassword = () => setShowPassword(!showPassword);

  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userDetails);

    if (userDetails.password !== userDetails.confirmPassword) {
      toast.error('Password and ConfirmPassword must be the same!!');
      return;
    }

    await signUp(userDetails, navigate, dispatch);
  };

  return (
    <div className="paper" id="paper">
      <Avatar id="avatar">
        <Settings></Settings>
      </Avatar>

      <Typography component="h1" variant="h5">
        Update Your Acc. Details
      </Typography>

      <form onSubmit={handleSubmit}>
        

        <Grid container spacing={2}>
          <>
            <Input
              name="firstName"
              label="First Name"
              handleChange={handleChange}
              autoFocus
              half
              value={initialState.firstName}
            />
            <Input
              name="lastName"
              label="Last Name"
              handleChange={handleChange}
              half
              value={initialState.lastName}
            />
          </>

          <Input
            name="email"
            label="Email Address"
            handleChange={handleChange}
            type="email"
            value={initialState.email}
          />

          <Input
            name="password"
            label="Password"
            handleChange={handleChange}
            type={showPassword ? 'text' : 'password'}
            handleShowPassword={handleShowPassword}
            value={initialState.password}
          />

          <Input
            name="confirmPassword"
            label="Repeat Password"
            handleChange={handleChange}
            type="password"
            value={initialState.confirmPassword}
          />
        </Grid>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          id="signUpButton"
        >
          Submit
        </Button>

        <Grid container justify="flex-end">
          <Grid item></Grid>
        </Grid>
      </form>
    </div>
  );
};

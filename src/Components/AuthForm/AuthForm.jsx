import React, { useState } from 'react';
import Input from './Input';
import { Avatar, Grid, Button, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';

import { signIn, signUp } from '../../ActionCreators/authActionCreator';
import './styles.css';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState(initialState);
  const [wantsToSignUp, setWantsToSignup] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const switchMode = () => {
    setUserDetails(initialState);
    setWantsToSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };

  const handleShowPassword = () => setShowPassword(!showPassword);
  const handleChange = (e) =>
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault(); /* stop the browser from refreshing. */

    if (wantsToSignUp) {

      await signUp(userDetails, navigate, dispatch);
    } else {
      dispatch(signIn(userDetails, navigate,dispatch));
    }

    /* TODO : call react Hot Toast here .this will await dispatch to end , and once the user deatils are poplated in the store , the compiller then proceeds to cal the toas() function . */
    

  };

  return (
    <div className="paper" id="paper">
      <Avatar id="avatar">
        {wantsToSignUp ?<PersonAddOutlinedIcon /> : <LockOutlinedIcon/>}
        
      </Avatar>

      <Typography component="h1" variant="h5">
        {wantsToSignUp ? 'Sign Up' : 'Sign In'}
      </Typography>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {wantsToSignUp && (
            <>
              <Input
                name="firstName"
                label="First Name"
                handleChange={handleChange}
                autoFocus
                half
              />
              <Input
                name="lastName"
                label="Last Name"
                handleChange={handleChange}
                half
              />
            </>
          )}

          <Input
            name="email"
            label="Email Address"
            handleChange={handleChange}
            type="email"
          />

          <Input
            name="password"
            label="Password"
            handleChange={handleChange}
            type={showPassword ? 'text' : 'password'}
            handleShowPassword={handleShowPassword}
          />

          {wantsToSignUp && (
            <Input
              name="confirmPassword"
              label="Repeat Password"
              handleChange={handleChange}
              type="password"
            />
          )}
        </Grid>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          id="signUpButton"
        >
          {wantsToSignUp ? 'Sign Up' : 'Sign In'}{' '}
        </Button>

        <Grid container justify="flex-end">
          <Grid item>
            <Button onClick={switchMode}>
              {wantsToSignUp
                ? 'Already have an account? Sign In'
                : "Don't have an account? Sign Up"}
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default SignUp;

import React, { useState } from 'react';
import Input from './Input';
import { Avatar, Typography, Grid, Button } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import './styles.css';
import { signIn} from '../../ActionCreators/authActionCreator';

const initialState = {
    email: '',
    password: '',
};

export const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);


  const handleShowPassword = () => setShowPassword(!showPassword);
  const handleChange = (e) =>
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
      e.preventDefault(); 
      console.log(userDetails);
      dispatch(signIn(userDetails, navigate,dispatch));
    }

    /* TODO :Redirect a user from here to the home page . */

    return (
      
        <div className="paper" id="paper">

            <Avatar id="avatar">
                <LockOutlinedIcon />
            </Avatar>

            <Typography component="h1" variant="h5">
                LogIn
            </Typography>

            <form onSubmit={handleSubmit}>

                <Grid container spacing={2}>
                    <Input name="email"
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
                </Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    id="signUpButton"
                > Sign In
                </Button>
      </form>
    </div>
  );
};

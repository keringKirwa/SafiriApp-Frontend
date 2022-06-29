import React, { useState } from 'react';
import Input from './Input';
import { Avatar, Typography, Grid, Button } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
/* {"email":"sam@gmail.com","name":"MaripetSam Sammy","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbUBnbWFpbC5jb20iLCJpZCI6IjYyYWMzNDcyMmIwNzQ5MjYzNGEzNWE0NSIsImlhdCI6MTY1NTQ1Mjc4NywiZXhwIjoxNjU1NDU2Mzg3fQ.rKNqnkdrTR5f5y5qbJ43M3XEZnywb54wl7njlSJiagQ"} */

import './styles.css';
import { signIn} from '../../ActionCreators/authActionCreator';

const initialState = {
    username: '',
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
                <LockIcon />
            </Avatar>

            <Typography component="h1" variant="h5">
                LogIn
            </Typography>

            <form onSubmit={handleSubmit}>

                <Grid container spacing={2}>
                    <Input name="username"
                        label="Username"
                        handleChange={handleChange}
                        type="text"
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

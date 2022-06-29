import React, { useState } from 'react';
import { Button, Grid } from '@mui/material';

import safiriImage from '../../../src/images/safaricom.png';
import Input from './Input';
import './styles.css';
import { useNavigate } from 'react-router-dom';

export const PaymentModal = ({ stateVariable } = this.props.first) => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    amount: stateVariable.price,
    date: stateVariable.date,
    time: stateVariable.time,
    seatsSelected: stateVariable.seats[0],
    phoneNumber: '',
    carId:stateVariable.carId,
  });

  const handleChange = (e) =>
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/home/tickets');

    console.log(userDetails);

  };

  return (
    <div className="mainDiv">
      <img src={safiriImage} alt="" className="image" />

      <h2 className="safiriH2">
        Pay SafiriPointTravel.Ltd <strong>Ksh. </strong>{' '}
        <h1>{stateVariable.price}</h1>{' '}
      </h2>

      <form onSubmit={handleSubmit} className="form">
        <Grid container spacing={2}>
          <Input
            name="phoneNumber"
            label="Phone Number"
            handleChange={handleChange}
            autoFocus
            fullWidth
            type="phone"
          />
        </Grid>

        <Button
          variant="contained"
          type="submit"
          color="primary"
          className="safiriButton"
          onSubmit={handleSubmit}
        >
          {' '}
          <h3 className="h3Color">Pay Now ✅</h3>{' '}
        </Button>
      </form>
    </div>
  );
};

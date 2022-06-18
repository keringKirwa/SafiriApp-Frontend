import React, { useState, useEffect } from 'react';
import { Grid, Button, Paper } from '@mui/material';
import Leftbar from '../LeftBar/LeftBar';
import './seatStyles.css';

import { useDispatch, useSelector } from 'react-redux';
import { addedSeat, removedSeat } from '../../reducers/selectedSeatsSlice';
import Footer from '../Footer/Footer';
import { PaymentModal } from '../PaymentModal/PaymentModal';
import { useLocation } from 'react-router-dom';
import { getOneCar } from '../../ActionCreators/carActionCreator';
import { toast } from 'react-hot-toast';

export const Seats = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const search = useLocation().search;

  const carId = new URLSearchParams(search).get('carId');
  const price = new URLSearchParams(search).get('price');
  const from = new URLSearchParams(search).get('from');
  const to = new URLSearchParams(search).get('destination');
  const date = new URLSearchParams(search).get('date');
  const time = new URLSearchParams(search).get('time');

  useEffect(() => {
    getOneCar(carId, dispatch);
  }, [dispatch, carId]);

  /* TODO: anytime the seats componnet loads , then we send an axioxs request to the backend , the respponse will be used to desplay the order and the seats page . */

  const carSeats = [
    { seatNumber: 1, taken: 0 },
    { seatNumber: 2, taken: 1 },
    { seatNumber: 3, taken: 0 },
    { seatNumber: 4, taken: 1 },
    { seatNumber: 5, taken: 0 },
    { seatNumber: 6, taken: 0 },
    { seatNumber: 7, taken: 0 },
    { seatNumber: 8, taken: 0 },
    { seatNumber: 9, taken: 1 },
    { seatNumber: 10, taken: 0 },
    { seatNumber: 11, taken: 0 },
    { seatNumber: 12, taken: 0 },
  ];

  const seatsArray = useSelector((state) => state.selectedSeats.seatsSelected);
  const numberOfSeats = seatsArray.length || 0;
  const totalAmount = price * numberOfSeats || 0;

  const stateVariable = {
    price: totalAmount,
    seats: seatsArray,
    date: date,
    time: time,
    carId: carId,
    
    
  };

  const handleSelect = (event) => {
    const checked = event.target.checked;
    const value = event.target.value;

    if (checked) {
      dispatch(addedSeat({ data: { seatNo: value } }));
    } else {
      dispatch(removedSeat({ data: { seatNo: value } }));
    }
  };

  const handleClick = () => {
    if (totalAmount !== 0) {
      setOpen((prevIsOpen) => !prevIsOpen);
    } else {
      toast.error('You Have Not Reserved Any Seat(s) Yet !!! ');
      return;
    }
  };

  return (
    <Grid container>
      {open && <PaymentModal stateVariable={stateVariable} />}

      <Grid item xs={2} sm={2}>
        <div className="leftBarContainer">
          <Leftbar />
        </div>
      </Grid>

      <Grid item xs={6} sm={6}>
        <div id="mainContainer">
          <h1 id="almost">
            Almost To the end , Select The Seats Remaining Below.Then proceed to
            check-Out
          </h1>

          <div className="middle">
          

            {carSeats.map((seatObject) => (
              <div className="seatBox">
                <label htmlFor="c">
                  {seatObject.seatNumber === 1
                    ? 'Driver'
                    : seatObject.seatNumber}
                </label>

                <input
                  type="checkbox"
                  id="c"
                  value={seatObject.seatNumber}
                  className="checkBox"
                  disabled={
                    seatObject.seatNumber === 1 ||
                    seatObject.seatNumber === 5 ||
                    seatObject.taken === 1
                      ? true
                      : false
                  }
                  onChange={handleSelect}
                />
              </div>
            ))}
          </div>
          <Footer></Footer>
        </div>
      </Grid>

      <Grid item xs={3} sm={3}>
        {/* NOTE that the data in the paper below are all from the store and not the database, that is , we dont initially keep the ticket data in the datbase , until when the user makes a payment.*/}

        <Paper id="cart" elevation={6}>
          <h2>Order Summary</h2>
          <h3 id="proceedText">
            Almost to the end ! Proceed to checkOut and Receive a ticket.
          </h3>
          <div className="actualTicket">
            <h4 className="route">
              From : <h3 className="margin">{from}</h3>{' '}
            </h4>
            <h4 className="route">
              To : <h3 className="margin">{to}</h3>{' '}
            </h4>
            <h3 className="seatsMapped">
              selected Seats : {'  '}
              {seatsArray.map((seat) => (
                <h2>{seat},</h2>
              ))}
            </h3>

            <h3 id="h3price">
              Price : {numberOfSeats} * {price} = <h2>Ksh. {totalAmount}</h2>
            </h3>
          </div>
          <Button
            size="large"
            variant="contained"
            color="primary"
            className="button"
            onClick={handleClick}
          >
            {' '}
            <div className="h3color">Proceed to checkOut</div>
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
};

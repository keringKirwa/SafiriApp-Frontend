import React from 'react'
import { Grid, Button, Paper } from '@material-ui/core';
import Leftbar from '../LeftBar/LeftBar';
import './styles.css'
import image from '../../../src/images/bus.jpg'
export const Seats = () => {

  /* anytime the seats componnet loads , then we send an axioxs request to the backend , the respponse will be used to desplay the order and the seats page . */

  return (
    <Grid container >

        <Grid item xs={2} sm={ 2}>
          <Leftbar></Leftbar>
        </Grid>

        <Grid item xs={6} sm={ 6}>
        <div id='mainContainer'>

          <h1>hello from seats </h1>
          <div className='middleRow'></div>
         
          </div>
      </Grid>

      <Grid item xs={3} sm={3}>\
      
        {/* NOTE that the data in the paper below are all from the store and not the database, that is , we dont initially keep the ticket data in the datbase , until when the user makes a payment.*/}
        

              <Paper id='cart' elevation={6}>
                  <h2>Order Summary</h2>
                  <h3 id='proceedText'>Almost to the end ! Proceed to checkOut and Receive a ticket.</h3>
                  <div className="actualTicket">
                      <h3>From : Nairobi</h3>
                      <h3>To : Eldoret</h3>
                      <h3>selected Seats  : { "  "}9,10,11</h3>
                      <h3 id='h3price'>Price :{" "} 1*3 = {" "} { " "} <h2>Ksh. 5200</h2></h3>
                      
                  </div>
                  <Button size='large' variant='contained' color='primary' className='button' > Proceed To Check Out</Button>
                 
        </Paper>
        </Grid>

      
       

      </Grid>
      
  )
}

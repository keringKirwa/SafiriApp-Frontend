import React, { useState,useEffect } from 'react'
import './styles.css';
import { Typography, Button } from '@material-ui/core';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const MiddleRow = () => {
  const [user, setUser] = useState('');

  return (

    < div className='mainContainer' >

      <Typography variant='h4' >A lifetime of Discounts with Safiri.</Typography>
      <h5 variant='h4'>Get Awarded for you travels - Unlock instant savings of 10% or more with free Safari Booking App</h5>

      <div className='ticket1'>     
        
        <h4>Get a ticket starting from <span id='ticketSpan'>Ksh.800</span> Now</h4>
        
        <div className="right">
          <Button variant='outlined'   component={Link} to="/products" disabled={!user} color='primary' size='medium'>Go to the products page ➡️</Button>
        
        </div>
        
      </div>
       

      <div className="footer">
        <Footer></Footer>
      </div>
     
    </div>
  )
}


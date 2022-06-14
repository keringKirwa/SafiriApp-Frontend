import React, { useState,useEffect } from 'react'
import './styles.css';
import { Typography, Button } from '@mui/material';
import Footer from '../Footer/Footer';
import { Link, useLocation } from 'react-router-dom';

export const MiddleRow = () => {
  const location = useLocation();
  const [user, setUser] = useState((JSON.parse(localStorage.getItem('profile'))?.name));
   useEffect(() => {
     setUser(JSON.parse(localStorage.getItem('profile'))?.name);
    
},[location]);

  return (

    < div className='mainMiddleContainer' >

      <Typography variant='h4' >A lifetime of Discounts with Safiri.</Typography>
      <h5 variant='h4' className='getAwarded'>Get Awarded for you travels - Unlock instant savings of 10% or more with free Safari Booking App</h5>

      <div className='ticket1'>     
        
        <h4> <h4>Get a ticket starting from</h4>  <span id='ticketSpan'>Ksh.800</span> Now</h4>
        
        <div className="right">
          <Button variant='outlined'   component={Link} to="/home/products" disabled={!user} color='primary' size='medium'>Go to the products page ➡️</Button>
        
        </div>
        
      </div>
       

      <div className="footer">
        <Footer></Footer>
      </div>
     
    </div>
  )
}

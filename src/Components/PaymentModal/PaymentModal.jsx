import React,{useState} from 'react';
import './styles.css'
import { Button, Grid } from '@material-ui/core';
import safiriImage from '../../../src/images/safaricom.png'
import Input from './Input';

export const PaymentModal = ({ stateVariable } = this.props.first) => {

  const [userDetails, setUserDetails] = useState({amount:stateVariable.price,phoneNumber:''});
  
  const handleChange = (e) =>
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(userDetails);
    return;


    /* TODO : call an action creator from heren to communicate with the database and send the payment details in an object*/
  };
    

  return (
    <div className='mainDiv'>

      <img src={safiriImage} alt="" className='image' />

      <h2 className='safiriH2'>Pay SafiriPointTravel.Ltd  <strong>Ksh. </strong> <h1>{stateVariable.price}</h1> </h2>

      <form onSubmit={handleSubmit} className='form'>

       <Grid container spacing={2}>
          <Input name="phoneNumber" label="Phone Number" handleChange={handleChange} autoFocus fullWidth type='phone' />
          
        </Grid>

        <Button variant='contained' type='submit' color='primary' className='safiriButton'
         onSubmit={handleSubmit} > Pay Now ✅</Button>
          
        </form>

      
     
      
      


    
    </div>
  );
}

import React from 'react';
import './styles.css'
import { Button } from '@material-ui/core';
import safiriImage from '../../../src/images/safaricom.png'

export const PaymentModal = ({stateVariable}=this.props.first) => {
    

  return (
    <div className='mainDiv'>

      <img src={safiriImage} alt="" className='image' />

      <h2 className='safiri'>Pay SafiriPointTravel.Ltd Ksh. <h1>{stateVariable.price}</h1>
      </h2>
      <Button variant='contained' color='primary' className='safiriButton'> Pay Now ✅</Button>
      
      


    
    </div>
  );
}

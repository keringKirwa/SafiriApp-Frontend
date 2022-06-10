import React, { useState } from 'react';
import Input from './Input';
import { Grid, Button } from '@material-ui/core';


import './stylesSearch.css'
import { getCarsBySearch } from '../../ActionCreators/carActionCreator';
import { useDispatch } from 'react-redux';


const initialState = { from: '', destination: '', date: '', };

export const SearchProducts = () => {
  const dispatch = useDispatch();

  const [userDetails, setUserDetails] = useState(initialState);
  
  const handleChange = (e) => setUserDetails({ ...userDetails, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(userDetails);
    getCarsBySearch(userDetails,dispatch);


    /* TODO : call an action creator from heren to communicate wit the database and send us back the response . */
  };


  return (

    <div  id='searchDiv'>

      <h2 id='searchh2'>Search Tickets</h2>

      <form onSubmit={handleSubmit}>

          <Grid container spacing={2}>

          
            <>
              <Input name="from" label="From" handleChange={handleChange} autoFocus half />
              <Input name="destination" label="Destination" handleChange={handleChange} half />
            </>
          
          

          <Input name="date"  handleChange={handleChange} type="date" />
        
            
        </Grid>
        

        <Button type="submit" fullWidth variant="contained" color="primary" onSubmit={handleSubmit} id='search'> Search </Button>
          
        </form>
      </div>
  );

};

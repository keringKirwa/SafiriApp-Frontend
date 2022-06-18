import React,{useState} from 'react'
import { getCarsBySearch } from '../../ActionCreators/carActionCreator';
import { useDispatch } from 'react-redux';
import './search.css'
import Input from './Input';

import { Button, Grid, Typography } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export const SearchProducts = () => {
  const dispatch = useDispatch();

  const initialState = { from: 'Nairobi', destination: '', date: '' };
  const [userDetails, setUserDetails] = useState(initialState);
  

  const handleChange = (e) => setUserDetails({ ...userDetails, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    console.log(userDetails);
    getCarsBySearch(userDetails, dispatch);
  };

  return (
    <div id='searchDivMainContainer'>
    
     
      <div className='GridContainer'>
         
      <h2 id='searchh2'>Search Tickets</h2>

      <Grid container >
        

        <Grid item xs={12} sm={6} >
        <FormControl required sx={{ ml: 4, mt:1, width:'110px'}}>
        <InputLabel id="demo-simple-select-required-label">From</InputLabel>
        <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={userDetails.from}
          label="From *"
          name='from'
          defaultValue='Nairobi'
          onChange={handleChange}
        >
          <MenuItem value='Nairobi'>Nairobi</MenuItem>
          <MenuItem value='Eldoret'>Eldoret</MenuItem>
          <MenuItem value='Kisumu'>Kisumu</MenuItem>
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
        </Grid>
    
      {/* --------------------------------------------------------------------- */}
        <Grid item xs={12} sm={6} sx={{marginRight:"0px"}}>
        
          <FormControl required sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-required-label">To</InputLabel>
                <Select
                  labelId="demo-simple-select-required-label"
                  id="demo-simple-select-required"
                  value={userDetails.destination}
                  label="Destination *"
                  name='destination'
                  defaultValue='Nairobi'
                  onChange={handleChange}
                >
          <MenuItem value='Nairobi'>Nairobi</MenuItem>
          <MenuItem value='Eldoret'>Eldoret</MenuItem>
          <MenuItem value='Kisumu'>Kisumu</MenuItem>
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
      </Grid>
      
      {/* ---------------------------------------------------------- */}
        <Grid item xs={12} sm={12}>
           <Input name="date"  handleChange={handleChange} type="date" />
      </Grid>
      {/* ---------------------------------------------------------------- */}
        </Grid> 
        <Button type="button" fullWidth variant="contained" color="primary" onClick={handleSubmit} id='search'>  <Typography className="h3Container">Search</Typography> </Button>
        </div>
    
          

    </div >
    )
}

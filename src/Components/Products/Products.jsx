/* in this case , we fetch data about a car from the database , and then display them in a Container of divs. */

/* TODO import CircularProgress , useEffect, useSelector, set Page variable ===1 AND then dispatch actions using action creators from the redux toolkit the */

import React from 'react';
import Grid  from '@mui/material/Grid';

import { Product } from '../Product/Product';
import Leftbar from '../LeftBar/LeftBar';
import './styles.css'
import { SearchProducts } from '../SearchProducts/SearchProducts';
import { getAllCars } from '../../ActionCreators/carActionCreator';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';


export const Products = () => {
  const dispatch = useDispatch();
  
  
  useEffect(() => {
    getAllCars(dispatch);
    
  }, [dispatch]);

  const { isLoading, posts } = useSelector((state) => state.cars);
  console.log(posts);
  console.log(isLoading);

  const cars = [
    {
      from: 'Nairobi',
      to: 'Eldoret',
      date: '5-7-2022',
      time: '7:00 AM',
      price: '1200',
      availableSeats: 3,
      carId:'KCV123P'
    },{
      from: 'Thika',
      to: 'Nyeri',
      date: '18-6-2022',
      time: '10:30 AM',
      price: '400',
      availableSeats: 7,
      carId:'KCM34RT'
    },{
      from: 'KItale',
      to: 'Kisumu',
      date: '10-6-2022',
      time: '9:00 AM',
      price: '1350',
      availableSeats: 1,
      carId:'KDV45PT'
    },{
      from: 'Nairobi',
      to: 'Nakuru',
      date: '10-6-2022',
      time: '8:00 AM',
      price: '600',
      availableSeats: 3,
      carId:'KMNH34P'
    },
  ];

   

    /* TODO : isLoading ? <CircularProgress />
     :  */
  
    return (
      <div>
        <Grid container className='mainContainer' alignItems="stretch">
               
          <Grid item sm={2}>
            <div className="mainDivContainer">
              <Leftbar/>
            </div>
            
          </Grid>

          <Grid item sm={6}>
            

            <div className="availableProducts">

              {cars.map((car) => (<Product car={car}/>))}
            </div>
                   
        </Grid>
          
          <Grid item sm={3}>
            <SearchProducts></SearchProducts>
          </Grid>
                
        </Grid>
      </div>
    
    );
};

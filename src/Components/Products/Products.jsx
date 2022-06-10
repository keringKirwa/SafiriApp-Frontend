/* in this case , we fetch data about a car from the database , and then display them in a Container of divs. */

/* TODO import CircularProgress , useEffect, useSelector, set Page variable ===1 AND then dispatch actions using action creators from the redux toolkit the */

import React from 'react';
import { Grid, } from '@material-ui/core';

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

   

    /* TODO : isLoading ? <CircularProgress />
     :  */
  
    return (
      <div>
            <Grid container className='mainContainer' alignItems="stretch">
               
                <Grid item sm={2}>
                    <Leftbar/>
                </Grid>

                <Grid item sm={6}>

                    <div className="availableProducts">
                        <Product></Product>
                        <Product></Product>
                        <Product></Product>
                    </div>
                   
               </Grid>
          
                <Grid item sm={4}>
                    <SearchProducts></SearchProducts>
                 </Grid>
                
           </Grid>
            </div>
    
    );
};

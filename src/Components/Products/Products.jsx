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
  if (isLoading) {
    return <div>
      CircularProgress
    </div>
  }


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

              {posts.data.map((car) => (<Product car={car}/>))}
            </div>

        </Grid>

          <Grid item sm={3}>
            <SearchProducts></SearchProducts>
          </Grid>

        </Grid>
      </div>

    );
};

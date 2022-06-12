import axios from 'axios';
import { allCarsFetched, carsFetchedBySearch, endLoading, oneCarFetched, startLoading } from '../reducers/carSlice';


const AxiosInstance = axios.create({ baseURL: 'http://localhost:5000' });

AxiosInstance.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});




export const getOneCar = async (carId,dispatch) => {

  /* data here is a single object from the database,and not a variable holding that data*/
  
  try {
    
    dispatch(startLoading());

    const { data } = await AxiosInstance.get(`/products/${carId}`);
    /* this data in this line actually refers to the actual object that is coming from the backend and NOT a variable , its the actual,actual data ie an object or an array/list  . */

    dispatch(oneCarFetched({ data:data })); /* ie{ data :[seat objects]} */
      
    dispatch(endLoading());
      
  } catch (error) {
    console.log(error);
  }
};


export const getAllCars = async (dispatch) => {

    /* data here  is an array of posts,actual data and not the variable ?  limit (4)*/

    try {
      
      dispatch(startLoading());
      
    const { data } = await AxiosInstance.get(`/posts?page=1`);/* to get the data in the reducers we will use the following : action.payload.data.data =[{},{},{},...] */
        
    dispatch(allCarsFetched({data : data}));  
    dispatch(endLoading());
  } catch (error) {
    console.log(error);
  }
};


export const getCarsBySearch = async (searchQuery,dispatch) => {
    
    /* data here will be an array of  posts.searchQuery being an object from the UI containing : {from:'Eldoret', to:'Nairobi', date:'18/6/2020' } */

    try {
      
      dispatch(startLoading());
      
      const { data } = await AxiosInstance.get('/products/searchcars', searchQuery);

      /* data again is a List of objects. */
      
      
    dispatch(carsFetchedBySearch({data: data }));
    dispatch(endLoading);
        
  } catch (error) {
    console.log(error);
  }
};




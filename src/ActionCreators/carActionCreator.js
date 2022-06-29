import axios from 'axios';
import { allCarsFetched, carsFetchedBySearch, endLoading, oneCarFetched, startLoading } from '../reducers/carSlice';


const AxiosInstance = axios.create({ baseURL: 'http://localhost:8000' });




export const getOneCar = async (carId,dispatch) => {
  try {

    dispatch(startLoading());

    const { data } = await AxiosInstance.get(`/products/${carId}`);

    dispatch(oneCarFetched({ data:data }));
    dispatch(endLoading());

  } catch (error) {
    console.log(error);
  }
};


export const getAllCars = async (dispatch) => {
  try {
    /* FIXME: in this case , data is an onject with an array in it called data */

      dispatch(startLoading());

      const { data } = await AxiosInstance.get(`/api/v1/routes/`);
      console.log(data);


    dispatch(allCarsFetched({data : data}));
    dispatch(endLoading());
  } catch (error) {
    console.log(error);
  }
};


export const getCarsBySearch = async (searchQuery,dispatch) => {


    try {

      dispatch(startLoading());

      const { data } = await AxiosInstance.get('/api/v1/routes/', searchQuery);

      /* data again is a List of objects. */


    dispatch(carsFetchedBySearch({data: data }));
    dispatch(endLoading);

  } catch (error) {
    console.log(error);
  }
};


export const  getTicketsDetails = async ( userObject, setTicketDetails) => {
    try {
      /* this methid here expects an array of ticket datan objects */

      const { data } = await AxiosInstance.get('/tickets', userObject);
      setTicketDetails(data);

    } catch (error) {

    console.log(error);
  }
};
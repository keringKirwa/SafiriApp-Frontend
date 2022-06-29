import axios from 'axios';
import { userDetailsFetched } from '../reducers/settingsSlice';
import { toast } from 'react-hot-toast';

const axiosInstance = axios.create({ baseURL: 'http://localhost:8000' });


export const signIn = async (formData, navigate, dispatch) => {
  console.log(formData);
  try {
    const { username, password } = formData;

     localStorage.setItem('user',username);

    const { data } = await axiosInstance.post('/api/v1/user/profile/login/', {
      username:username,
      password: password
    });
    if (data.key) {
      localStorage.setItem('token', data.key);
      toast.success("Successfully Logged In.")
    }


    navigate('/home');
  } catch (error) {
    toast.error(`ERROR !! ${error.response.data.detail} , ${error.message}` );
    console.log(error);
  }
};

export const signUp = async (formData, navigate, dispatch) => {
  const { firstName, email, password, confirmPassword } = formData;

  const userDetails = {
    email: email,
    username: firstName,
    password1: password,
    password2:confirmPassword
  }
  try {

    const response = await axiosInstance.post('/api/v1/user/registration/', userDetails);
    console.log(response);
   localStorage.setItem('firstName', firstName);
    toast.success('Your Account Has been creted successfully !!');
    navigate('/home/login');
  } catch (error) {

    console.log(error);

    toast.error("there was an error in registration");

    console.log(typeof error);
  }
};

export const updateAccountDetails = async (
  formData,
  dispatch,
  setUserDetails
) => {
  try {

    const { data } = await axiosInstance.post('/api/v1/user/registration/', formData);
    setUserDetails(data.userDetails);

    dispatch(userDetailsFetched({ data: data.userDetails }));
    console.log('successsfully fetched data from the database. !!! Kirwa ');
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.message || error.message);
  }
};

export const createMyTicket = async (formData, navigate) => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    const datePaid = mm + '-' + dd + '-' + yyyy;

  const username=localStorage.getItem('firstName');
  const {seatSelected,phone,carId } = formData;

  const userDetails = {
    traveller: username,
    date_paid: datePaid,
    seat_number: seatSelected,
    route_id: carId,
    phone_number:phone
}
  try {

    const response = await axiosInstance.post('/api/v1/user/myticket/create/', userDetails);
    console.log(response);
    toast.success('Your Account Has been creted successfully !!');
    navigate('/home');
  } catch (error) {

    console.log(error);
    toast.error("there was an error in registration");
  }
};

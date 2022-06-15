import axios from 'axios';
import { login, signup } from '../reducers/authSlice';
import { userDetailsFetched } from '../reducers/settingsSlice';
import { toast } from 'react-hot-toast';

const axiosInstance = axios.create({ baseURL: 'http://localhost:5000' });

axiosInstance.interceptors.request.use((req) => {
  if (localStorage.getItem('kirwa')) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem('profile'))?.token
    }`;
  }

  return req;
});

export const signIn = async (formData, navigate, dispatch) => {
  try {
    const { email, password } = formData;

    /* this is where we will send an axios request to the backend of the application .we will receive a JSON object with the following properties : 

    data = { result:{userId:'1234', email:'kkirwa230@gmail.com'} , token:'tefdgye6535367474gdsbhdhhgdg' }

     */

    const { data } = await axiosInstance.post('/user/signin', {
      email,
      password,
    });

    const { userEmail, userName } = data.result;
    const token = data.token;

    dispatch(
      login({ data: { email: userEmail, name: userName, token: token } })
    );

    navigate('/home');
  } catch (error) {
    console.log(error);
  }
};

export const signUp = async (formData, navigate, dispatch) => {
  try {
    const { data } = await axiosInstance.post('/user/signup', formData);

    toast.success('Your Account Has been creted successfully !!');

    const { email, name } = data.result;
    const token = data.token;
    dispatch(signup({ data: { email: email, name: name, token: token } }));

    navigate('/home/login');
  } catch (error) {
    /* note that it is  always/AMUST advisable that we log the error and not the message for the reasons of debugging . */

    console.log(error);

    toast.error(error.response.data.message || error.message);

    console.log(typeof error);
  }
};

/* ------------------------------------------------------------ */

export const updateAccountDetails = async (
  formData,
  dispatch,
  setUserDetails
) => {
  try {
    /* note that data refers to the object inside the res.status().json() method . */

    const { data } = await axiosInstance.post('/user/settings', formData);
    setUserDetails(data.userDetails);

    dispatch(userDetailsFetched({ data: data.userDetails }));
    console.log('successsfully fetched data from the database. !!! Kirwa ');
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.message || error.message);
  }
};

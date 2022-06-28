import axios from 'axios';
import { userDetailsFetched } from '../reducers/settingsSlice';
import { toast } from 'react-hot-toast';

const axiosInstance = axios.create({ baseURL: 'http://127.0.0.1:8000' });


export const signIn = async (formData, navigate, dispatch) => {
  console.log(formData);
  try {
    const { email, password } = formData;
    const userName='ArapKering'

    const { data } = await axiosInstance.post('/api/v1/user/profile/login/', {
      email:email,
      password: password,
      username:userName
    });
    if (data.key) {
      localStorage.setItem('token', data.key);
      localStorage.setItem('user', userName);
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
    console.log(userDetails);
    const response = await axiosInstance.post('/api/v1/user/registration/', userDetails);
    console.log(response);
    toast.success('Your Account Has been creted successfully !!');

    /* const { email, name } = data.result;
    const token = data.token;
    dispatch(signup({ data: { email: email, name: name, token: token } })); */

    navigate('/home/login');
  } catch (error) {

    console.log(error);

    toast.error("there was an error in registration");

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

    const { data } = await axiosInstance.post('/api/v1/user/registration/', formData);
    setUserDetails(data.userDetails);

    dispatch(userDetailsFetched({ data: data.userDetails }));
    console.log('successsfully fetched data from the database. !!! Kirwa ');
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.message || error.message);
  }
};

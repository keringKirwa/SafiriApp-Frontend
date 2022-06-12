import axios from 'axios';
import { login, signup } from '../reducers/authSlice';

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
    
    const { data } = await axiosInstance.post('/user/signin', { email, password });

    const { userEmail , userName } = data.result;
    const token = data.token;


    dispatch(login({ data:{email:userEmail, name:userName, token:token}}));

    navigate('/');
  } catch (error) {
    console.log(error);
  }
};


export const signUp = async (formData, navigate, dispatch) => {
  try {

    const { data } = await axiosInstance.post('/user/signup', formData);

    const { email, name } = data.result;
    const token = data.token;
    dispatch(signup({ data:{email:email, name:name, token:token}}));

    navigate('/login');
  } catch (error) {
    console.log(error);
  }
};

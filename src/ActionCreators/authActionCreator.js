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

    navigate('/products');
  } catch (error) {
    console.log(error);
  }
};


export const signUp = async (formData, navigate, dispatch) => {
  try {

    /* this is the response from the server : res.status(201).json({ result, token });
    where result is the object created in the database having { email,name , password ,objectId} and the token is the string token
    /* data is an obejct with the userDetails and a token :
      action.data={result:{
               email: "sammy@gmail.com"
              name: "sammy mwawaka"
              password: "$2a$12$VEmzpe46y/UG1utF6jpe/Oaw9.swa3FoVVkbk4XpdUKk7f9SeKYaG"
              _id: "629f65f8ab96d7229ffa70a3"
            },
            token:'"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJeyJlbWFpbCI6InNhbW15QGdtYWlsLmNvbSIsImlkIjoiNjI5ZjY1ZjhhYjk2ZDcy'
          } */

    const { data } = await axiosInstance.post('/user/signup', formData);

    const { email, name } = data.result;
    const token = data.token;
    dispatch(signup({ data:{email:email, name:name, token:token}}));

    navigate('/');
  } catch (error) {
    console.log(error);
  }
};

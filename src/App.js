import React from "react";
import { BrowserRouter,Routes,Route, Navigate} from "react-router-dom";

import Home from './Components/Home/Home';
import { Navbar } from './NavBar/Navbar';
import SignUp  from './Components/AuthForm/AuthForm.jsx';
import { Products } from './Components/Products/Products';
import { Seats } from './Components/Seats/Seats';
import { PaymentModal } from "./Components/PaymentModal/PaymentModal";
import { Login } from './Components/Login/Login';
import { Toaster } from 'react-hot-toast';
import { Account } from './Components/AccountSettings/Account';

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));
  return (
    <>
    

      <BrowserRouter>
        <Toaster />
        
        <Navbar></Navbar>

        <Routes>

          <Route path="/" exact element={<Navigate to='/home' />} />
          <Route path="/home" exact element={<Home />} />

          <Route path="/home/register" exact element={ !user ? <SignUp /> : <Navigate to="/home" /> } />          
          <Route path="/home/login" exact element={<Login />} />
          <Route path="/home/products" exact element={<Products />} />
          <Route path="home/products/:id" exact element={<Seats />} />
          <Route path="home/payment" exact element={<PaymentModal />} />

          <Route path="/home/settings" exact element={ user ? <Account/> : <Navigate to="/home" /> } /> 


        </Routes>
        
      </BrowserRouter>
      </>)
};



export default App;

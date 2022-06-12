import React from "react";
import { BrowserRouter,Routes,Route, Navigate} from "react-router-dom";

import Home from './Components/Home/Home';
import { Navbar } from './NavBar/Navbar';
import SignUp  from './Components/AuthForm/AuthForm.jsx';
import { Products } from './Components/Products/Products';
import { Seats } from './Components/Seats/Seats';
import { PaymentModal } from "./Components/PaymentModal/PaymentModal";
import { Login } from './Components/Login/Login';

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));
  return (
    <>
    

      <BrowserRouter>
        
        <Navbar></Navbar>

        <Routes>

          <Route path="/" exact element={<Home />} />
          <Route path="/register" exact element={ !user ? <SignUp /> : <Navigate to="/" /> } />          
          <Route path="/login" exact element={<Login />} />
          <Route path="/products" exact element={<Products />} />
          <Route path="/products/:id" exact element={<Seats />} />
          <Route path="/payment" exact element={<PaymentModal />} />

        </Routes>
        
      </BrowserRouter>
      </>)
};



export default App;

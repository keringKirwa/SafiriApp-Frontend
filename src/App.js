import React from "react";
import { BrowserRouter,Routes,Route, Navigate} from "react-router-dom";

import Home from './Components/Home/Home';
import { Navbar } from './NavBar/Navbar';
import SignUp  from './Components/AuthForm/AuthForm.jsx';
import { Products } from './Components/Products/Products';
import { Seats } from './Components/Seats/Seats';

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));
  return (
    <>
    

      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          
          <Route path="/" exact element={<Home />} />
          <Route path="/products" exact element={<Products />} />
          <Route path="/products/:id" exact element={<Seats />} />
          
          <Route path="/auth" exact element={ !user ? <SignUp /> : <Navigate to="/" /> } />
          
        </Routes>
      </BrowserRouter>
      </>)
};



export default App;

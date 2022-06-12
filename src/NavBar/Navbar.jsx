import React, { useEffect,useState } from 'react';
import { AppBar, Typography, Toolbar, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './NavBar.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { logout } from '../reducers/authSlice';
import { useDispatch } from 'react-redux';

/* the Height of my navbar is 100px that is from the top  of the viewport */

export const Navbar = () => {

  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const styles = useStyles();

  const [user, setUser] = useState((JSON.parse(localStorage.getItem('profile'))?.name));

   useEffect(() => {
     setUser(JSON.parse(localStorage.getItem('profile'))?.name);
    
  },[location]);


  const handleLogout = async () => {

    dispatch(logout());
    setUser(null);
    localStorage.clear();
    navigate('/register');
  };

  
  /* but why use LocalStorage in the code below , the reason is that the react Hooks cannot be called inside a callbacks , that is , useSelector cannot be called inside the callback of useEffect. */

  return (
      <AppBar  style={{ marginBottom: "10px" }} className={styles.appBar}>

        <h2 className='fontFamily' id='header1' width='50%'>
            <span style={{ color: "rgb(25,25,112)" }} id='header'> Safiri : </span >
            Introducing the Difference....
        </h2>
        <Typography id='emailTypo' variant="h5">📞0734536464</Typography>

        
        <Typography id='emailTypo' variant="h5">📧 : safiri@gmail.com</Typography>

        <Toolbar >
    
            { user ? (
              <div  className= {styles.logoutDiv}>
                
              <Typography variant="h5" id='user'>{user.split(' ')[0]}</Typography>
                
                <Button variant="contained" color="secondary"  id='logout' onClick={handleLogout}>Logout</Button>

              </div>
            ) : (
              
              <Button className={styles.loginButton} variant="contained" color="primary" marginLeft="1px" borderRadius='10px' component={Link} to="/register">Sign In</Button>
            )}
            
          </Toolbar>
          
             </AppBar>
      );
  
}

/* makeStyles is a funxtion that returns a styling object.being a funxtion , it must then be called like other function . */


const useStyles = makeStyles({
  
  appBar: {
    display: "flex",
    position: "fixed",
    top:0,
    flexDirection: "row",
    justifyContent: 'space-between',
    height: '100px',
    background: 'dodgerblue',
    padding: '5px',
    flexWrap:'wrap'

    
  },
  loginButton: {
    borderRadius: '30px 0px ', 
    boxShadow:'0px 4px 2px black '
  },

  logoutDiv: {
    flexDirection: "column",
    display: "flex",
    alignItems: "center",
  }
});
import React, { useEffect,useState }  from 'react'
import './dp.css';
import { Button, Typography } from '@mui/material';
import { Link,useNavigate } from 'react-router-dom';

export const MyDp = ({open , setOpen}) => {

  const navigate = useNavigate();

  const [user, setUser] = useState({});
  const { email, name } = user;

  const handleClick = () => {
    setOpen(false)
    navigate('/home/settings');
  }

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('profile')));
  }, []);
  return (
    <div className='dpdiv'>
        <Typography  variant="h6" component="h1" className='profile'>
            My Profile
          </Typography>

          <Typography id="modalDescription" sx={{ mt: 2 }}>
            <h2>Name:</h2> {name} 
          </Typography>

          <Typography id="modalDescription" sx={{ mt: 2 }}>
            <h2>Email:</h2>
             {email}
          </Typography>
          <Button color='success' variant='outlined' component={Link} to="/home/settings" onClick={handleClick}><div className="h3Button">Update Profile Details</div></Button>

    </div>
  )
}


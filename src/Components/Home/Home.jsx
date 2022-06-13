import Leftbar from '../LeftBar/LeftBar';
import { Form } from '../Form/Form';
import Grid from '@mui/material/Grid';
import { MiddleRow } from '../MiddleRow/MiddleRow';

import './home.css'


const Home = () => {
  return (
    <div>
      <Grid container spacing={1} >


        <Grid item xs={2} sm={2}>
          <div className="lefBarContainer">
            <Leftbar></Leftbar>
          </div>
          
        </Grid>

        <Grid item xs={6} sm={6}>
          <div className="middleRow">
             <MiddleRow></MiddleRow>
           
          </div>
          
        </Grid>

        <Grid item xs={3} sm={ 3}>
          <Form></Form>
        </Grid> 
        
      </Grid>
      

    </div>
  )
};

export default Home;
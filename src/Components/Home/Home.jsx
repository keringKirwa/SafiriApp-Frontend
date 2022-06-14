import Leftbar from '../LeftBar/LeftBar';
import { Form } from '../Form/Form';
import Grid from '@mui/material/Grid';

import { MiddleRow } from '../MiddleRow/MiddleRow';

import './home.css'


const Home = () => {
  return (
    <div className='home'>
      <Grid container spacing={1} >


        <Grid item xs={2} sm={2}>
          <div className="lefBarContainer">
            <Leftbar></Leftbar>
          </div>
          
        </Grid>

        <Grid item xs={9} sm={9}>

          <div className="middleRow">
            <MiddleRow />
          </div>
        </Grid>

       
        
      </Grid>
      

    </div>
  )
};

export default Home;
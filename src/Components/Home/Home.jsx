import Leftbar from '../LeftBar/LeftBar';
import { Form } from '../Form/Form';
import { Grid } from '@material-ui/core';
import { MiddleRow } from '../MiddleRow/MiddleRow';


const Home = () => {
  return (
    <div>
      <Grid container >

        <Grid item xs={2} sm={ 2}>
          <Leftbar></Leftbar>
        </Grid>

        <Grid item xs={6} sm={ 6}>
          <MiddleRow></MiddleRow>
        </Grid>

        <Grid item xs={3} sm={ 3}>
          <Form></Form>
        </Grid>
        
      </Grid>
      

    </div>
  )
};

export default Home;
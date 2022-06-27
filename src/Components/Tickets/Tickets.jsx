import React from 'react';
import "./tickets.css";
import { Grid } from '@mui/material';
import Leftbar from '../LeftBar/LeftBar';
import { TableComponent } from './test';
import TicketsFooter from '../Footer/TicketsFooter';

const Tickets = () => {
    return (
        <div className='ticketsContainer'>
            <Grid container spacing={1}>
                <Grid item xs={1} sm={2}>
                    <div className="lefBarContainer">
                        <Leftbar></Leftbar>
                    </div>
                </Grid>
                <Grid item xs={10} sm={10}>
                    <div id="conainerDiv">
                        <TableComponent></TableComponent>

                    </div>
                   < TicketsFooter/>

                </Grid>


      </Grid>

    </div>
  )
}

export default Tickets
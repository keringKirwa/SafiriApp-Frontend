import React,{useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';

import "./tickets.css";
import { Grid } from '@mui/material';
import Leftbar from '../LeftBar/LeftBar';
import TicketsFooter from '../Footer/TicketsFooter';
import { TableComponent } from './TicketComponent';

import { getTicketsDetails } from '../../ActionCreators/carActionCreator';

const Tickets = () => {
    const dispatch = useDispatch();
    const userEmail = 'kkirwa230@gmail.com';

    const [ticketDetails, setTicketDetails] = useState([]);

    useEffect(() => {
    getTicketsDetails({ email: userEmail }, setTicketDetails);
  }, [dispatch, userEmail]);

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
                        <TableComponent ticketsArray={ticketDetails}></TableComponent>

                    </div>
                   < TicketsFooter/>

                </Grid>


      </Grid>

    </div>
  )
}

export default Tickets
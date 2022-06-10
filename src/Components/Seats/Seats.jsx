import React,{useState} from 'react'
import { Grid, Button, Paper } from '@material-ui/core';
import Leftbar from '../LeftBar/LeftBar';
import './styles.css'
import { useDispatch, useSelector } from 'react-redux';
import { addedSeat, removedSeat } from '../../reducers/selectedSeatsSlice';
import Footer from '../Footer/Footer';
import { PaymentModal } from '../PaymentModal/PaymentModal';
export const Seats = () => {

  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  /* TODO: anytime the seats componnet loads , then we send an axioxs request to the backend , the respponse will be used to desplay the order and the seats page . */

  const carSeats = [
    { seatNumber: 1, taken: 0 },
    { seatNumber: 2, taken: 1 },
    { seatNumber: 3, taken: 0 },
    { seatNumber: 4, taken: 1 },
    { seatNumber: 5, taken: 0 },
    { seatNumber: 6, taken: 0 },
    { seatNumber: 7, taken: 0 },
    { seatNumber: 8, taken: 0 },
    { seatNumber: 9, taken: 1 },
    { seatNumber: 10, taken: 0 },
    { seatNumber: 11, taken: 0 },
    { seatNumber: 12, taken: 0 }
  ]

  const seatsArray = useSelector((state) => state.selectedSeats.seatsSelected);
  const price = 1200;
  const numberOfSeats = seatsArray.length ||  0;
  const totalAmount = price * numberOfSeats || 0;


  const stateVariable = {
    price: totalAmount,
    seats: seatsArray,
  }
   
  

  const handleSelect = (event) => {
    
    
    const checked = event.target.checked;
    const value = event.target.value;

    /* note that it is always advisable that we dispatch an object to the store , that object will be called the payload. that is action.payload.data.seatNo will give us the seat ID */

    if (checked) {

      dispatch(addedSeat({data:{seatNo:value}}));
      
    }
    else {
      dispatch(removedSeat({ data: { seatNo: value } }));
    }
  }

  const handleClick = () => {
    setOpen((prevIsOpen) => !prevIsOpen);
  }

    return (
      <Grid container >
        
        {open && <PaymentModal stateVariable={ stateVariable}/>}
        
        
        <Grid item xs={2} sm={2}>
          <Leftbar></Leftbar>
        </Grid>

        <Grid item xs={6} sm={ 6}>
          <div id='mainContainer'>
            
          <h1 id='almost'>Almost To the end , Select The Seats Remaining Below.Then proceed to check-Out</h1>

          < div className='middleRow'> 
            
        <div className="empty"></div>
          
            {carSeats.map((seatObject) => (
              <div className="seatBox">
                <label htmlFor="c">{seatObject.seatNumber === 1 ? 'Driver' : seatObject.seatNumber}</label>
                
                <input
                  type="checkbox"
                  id='c'
                  value={seatObject.seatNumber}
                  className='checkBox'
                  disabled={seatObject.seatNumber === 1 || seatObject.seatNumber === 5 || seatObject.taken === 1 ? true : false}
                  onChange={handleSelect}
                />
              
              </div>))}
          </div>
          <Footer></Footer>
         
          </div>
      </Grid>

      <Grid item xs={3} sm={3}>
      
        {/* NOTE that the data in the paper below are all from the store and not the database, that is , we dont initially keep the ticket data in the datbase , until when the user makes a payment.*/}
        

              <Paper id='cart' elevation={6}>
                  <h2>Order Summary</h2>
                  <h3 id='proceedText'>Almost to the end ! Proceed to checkOut and Receive a ticket.</h3>
                  <div className="actualTicket">
                      <h3>From : Nairobi</h3>
                      <h3>To : Eldoret</h3>
              <h3 className='seatsMapped'>selected Seats  : {"  "}
               
                 {seatsArray.map((seat) => (
                  <h2>{ seat},</h2>
              ))}
              </h3>
              
              <h3 id='h3price'>Price :{" "} {numberOfSeats} * {price}  = <h2>
                 Ksh. {" "} {" "}{totalAmount}</h2></h3>
                      
                  </div>
            <Button
              size='large'
              variant='contained'
              color='primary'
              className='button'
              onClick={handleClick}
            > Proceed To Check Out</Button>
                 
        </Paper>
        </Grid>

      
       

      </Grid>
      
  )
}

import "./styles.css";
import image from '../../../src/images/carLogo.jpg'
import { Link} from 'react-router-dom';

export const Product = ({ car }) => {
  /* {id: 2, start_point: 'NRB', end_point: 'NYH', departure_time: '09:25:04', price: 456} */
  return (
    <div className="searchItem">
      <img
        src={image}
        alt=""
        className="siImg"
      />

      {/* ---------------------------------------------------------------- */}
      <div className="siDesc">
        <h1 className="siTitle">{car.start_point}➡️ {car.end_point}</h1>

        <span className="siTaxiOp">{car.availableSeats} seats available</span>


        <span id="siCancelOp">Free cancellation, for Less than 24 hours towards depature time.</span>

        <span id="depature">Depature Time: {car.departure_time}</span>
      </div>

      {/* --------------------------------------------------- */}

      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>

        {/* ------------------------------------------------ */}
        <div className="siDetailTexts">
          <span className="siPrice">Ksh. { car.price}</span>

          <Link to={`/home/products/${car.id}?carId=${car.id}&price=${car.price}&from=${car.start_point}&destination=${car.end_point}&date=${car.date}&time=${car.departure_time}`} ><button className="siCheckButton" >See availability</button></Link>

        </div>
      </div>
    </div>
  );
};
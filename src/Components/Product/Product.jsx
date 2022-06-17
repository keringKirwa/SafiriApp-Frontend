import "./styles.css";
import image from '../../../src/images/carLogo.jpg'
import { Link} from 'react-router-dom';

export const Product = ({ car }) => {
  /* {
      from: 'KItale',
      to: 'Kisumu',
      date: '10-6-2022',
      time: '9:00 AM',
      price: '1350',
      availableSeats:1,
    } */
  
  return (
    <div className="searchItem">
      <img
        src={image}
        alt=""
        className="siImg"
      />

      {/* ---------------------------------------------------------------- */}
      <div className="siDesc">
        <h1 className="siTitle">{car.from}➡️ {car.to}</h1>

        <span className="siTaxiOp">{car.availableSeats} seats available</span>
			  <span className="siSubtitle">
         with  Music system and Free WIFI
        </span>
      
        <span className="siCancelOp">Free cancellation, for Less than 24 hours towards depature time.</span>
        
        <span id="depature">Depature Time: {car.time}</span>
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

          <Link to={`/home/products/${car.carId}?carId=${car.carId}&price=${car.price}&from=${car.from}&destination=${car.to}&date=${car.date}&time=${car.time}`} ><button className="siCheckButton" >See availability</button></Link>
          
        </div>
      </div>
    </div>
  );
};
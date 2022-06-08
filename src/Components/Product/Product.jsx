import "./styles.css";
import image from '../../../src/images/carLogo.jpg'
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

export const Product = () => {
  return (
    <div className="searchItem">
      <img
        src={image}
        alt=""
        className="siImg"
      />

      {/* ---------------------------------------------------------------- */}
      <div className="siDesc">
        <h1 className="siTitle">Nairobi ➡️ Eldoret</h1>

        <span className="siTaxiOp">4 seats available</span>
			  <span className="siSubtitle">
         with  Music system and Free WIFI
        </span>
      
        <span className="siCancelOp">Free cancellation, for Less than 24 hours towards depature time.</span>
        
        <span id="depature">Depature Time: 9:35 A.M</span>
      </div>

      {/* --------------------------------------------------- */}

      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>

        {/* ------------------------------------------------ */}
        <div className="siDetailTexts">
          <span className="siPrice">Ksh. 1400</span>

          <Link to='/products/:productId'><button className="siCheckButton" >See availability</button></Link>
          
        </div>
      </div>
    </div>
  );
};
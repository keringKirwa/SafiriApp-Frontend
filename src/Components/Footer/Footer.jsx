import "./footer.css";
import { Paper, Button, Typography } from '@mui/material';

const Footer = () => {
  return (
    <div className="footer">
      <div className="mainFooterDiv">
        <h2 className="h2Container">✅Save Money with Safiri Today, prices might change tommorrow !!</h2>
        <h2 className="h2Container">✅get a ticket starting from Ksh.800 !!</h2>

        <Paper elevation={4} className='mainPaper'>

        <ul className="fList">
          <li className="fListItem"> <strong id='strong'>Towns</strong> </li>
          <li className="fListItem">Nakuru</li>
          <li className="fListItem">Kisumu</li>
          <li className="fListItem">Nairobi</li>
          <li className="fListItem">Kitale</li>
          <li className="fListItem">Kericho</li>
        </ul>

        <ul className="fList">
          <li className="fListItem"> <strong id='strong'>Services</strong>  </li>
          <li className="fListItem">Lunch Stopovers</li>
          <li className="fListItem">Luggage trabsport</li>
          <li className="fListItem">Travel communities </li>
          <li className="fListItem">Seasonal and holiday deals </li>
        </ul>

          <ul className="fList">
            <li className="fListItem"> <strong id='strong'>Customer Services</strong>  </li>
            <li className="fListItem">Wifi Facilities</li>
          <li className="fListItem">Fixed Prices</li>

        </ul>

        </Paper>
        <div className="sub">


          <Button type="button" fullWidth variant="contained" size="small" id="button1"> <Typography > SubScribe</Typography>
       </Button>

</div>

        <div className="copyright">
          <span className="h2Container">Copyright ©</span>  2022 SafiriBooking.</div>
      </div>



    </div>
  );
};

export default Footer;

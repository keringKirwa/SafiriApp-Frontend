import "./footer.css";
import { Paper, Button } from '@material-ui/core';

const Footer = () => {
  return (
    <div className="footer">
      <div className="mainFooterDiv">
        <h2>✅Save Money with Safiri Today, prices might change tommorrow !!</h2>
        <h2>✅get a ticket starting from Ksh.800 !!</h2>

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
          <li className="fListItem">Curtomer Service</li>
          <li className="fListItem">Partner Help</li>
          <li className="fListItem">Fixed Prices</li>
        
        </ul>
  
        </Paper>
        <div className="sub">
           
          
          <Button type="button" fullWidth variant="contained" color="primary" size="large" id="button1">
        SubScribe </Button>
        
</div>
        
        <div className="copyright">
          <span>Copyright ©</span>  2022 SafiriBooking.</div>
      </div>

  
      
    </div>
  );
};

export default Footer;

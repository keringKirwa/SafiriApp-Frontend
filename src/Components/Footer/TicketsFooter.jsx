import "./ticketsFooterStyles.css";
import { Paper, Button, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const TicketsFooter = () => {
  return (
    <div className="footer">
      <div className="mainFooterDiv">
        <h2 className="h2Container">✅Thank You For Chooosing Safiri. !!</h2>
              <h2 className="h2Container">✅In case of Anything PLease Contact Us via :
              <span>📞0734536464</span>     </h2> <br />
              <h2 className="h2Container">✅ Or Our Email Address @:
              <span>SafiriKenya@gmail.com</span>    </h2>


        <Paper elevation={4} className='mainPaper'>

                  <div id="divIcon">
                      <h2>SafiriKenya2022</h2>
                      <FacebookIcon color='primary' id='facebookIcon'></FacebookIcon></div>
                  <div id="divIcon">
                      <h2>SafiriKenya2022</h2>
                      <LinkedInIcon id='linkedinIcon' />
                  </div>

                   <div id="divIcon">
                      <h2>SafiriKenya2022</h2>
                       < TwitterIcon id='twitterIcon' />

                  </div>

              </Paper>

        <div className="sub">


          <Button type="button" fullWidth variant="contained" size="small" id="button1"> <Typography > SubScribe</Typography>
       </Button>

</div>

        <div id="copyright">
          <span className="h2Container">Copyright ©</span>  2022 SafiriBooking.</div>
      </div>



    </div>
  );
};

export default TicketsFooter;

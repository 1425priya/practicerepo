import React from 'react'
import './footer.css'
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';



export default function Footer() {
  return (
    <div>
      <footer >
        <div className="footer-container container">
        <div className="footer-description">
        <Typography  variant="h4"
            noWrap
            sx={{
              mr: 2,
              textDecoration:"bold",
              display: { xs:'marginTop{{20px}}' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: 'white',

            }}
          >
            .UpTime

            </Typography>
            <p className="dwn">Downtime happens. Get notified!</p>
            <p className="desc-dwn">Join more than 1,900,000 happy users!<br></br> UptimeRobot is one of the most popular <br></br> website monitoring services in the world.</p>
            <div className="f-t-l">
                <FacebookIcon sx={{color:'grey', '&:hover':{color:'white'},fontSize:'30px'}}></FacebookIcon>
                <TwitterIcon sx={{color:'grey', '&:hover':{color:'white'},fontSize:'30px'}}></TwitterIcon>
                <LinkedInIcon sx={{color:'grey', '&:hover':{color:'white'},fontSize:'30px'}}></LinkedInIcon>
                </div>
            
        </div>
        <div className="footer-section  ">
            <div className="link-column flex">
            <h2>Mointoring</h2>
          <a href='/' className="hover-link">Website monitoring</a>
          <a href='/' className="hover-link">SSL monitoring</a>
          <a href='/' className="hover-link">Ping monitoring</a>
          <a href='/' className="hover-link">Port monitoring</a>
          <a href='/' className="hover-link">Cron job monitoring</a>
          <a href='/' className="hover-link">Keyword monitoring</a>
            </div>

            <div className="link-column flex">
            <h2>Company.</h2>
          <a href='/' className="hover-link">Pricing</a>
          <a href='/' className="hover-link">Blog</a>
          <a href='/' className="hover-link">Affiliate program</a>
          <a href='/' className="hover-link">Terms / Privacy</a>
          <a href='/' className="hover-link">Contact us</a>
          <a href='/' className="hover-link2">We are hiring!</a>
            </div>

            
            <div className="link-column flex">
            <h2>Resources.</h2>
          <a href='/' className="hover-link">Integrations</a>
          <a href='/' className="hover-link">API</a>
          <a href='/' className="hover-link">FAQs</a>
          <a href='/' className="hover-link">Help center</a>
          <a href='/' className="hover-link">Locations & IPs</a>
         
            </div>

        </div>
        </div>
      </footer>
    </div>
  )
}

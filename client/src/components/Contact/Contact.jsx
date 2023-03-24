import React from 'react';
import "./Contact.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import { Link } from 'react-router-dom';
import { color } from '@mui/system';

const Contact = () => {
  return (
    <div className="contact">
        <div className="wrapper">
            <span>
                Get in touch with us!
            </span>

            <div className="mail">
                <input type="text" placeholder='Enter your e-mail...'/>
                <button>Join now</button>
            </div>

            <div className="icons">
                <FacebookIcon/>

                <a href="https://www.instagram.com/milliondollarposters/" target="_blank">
                    <InstagramIcon/>
                </a>
                
                <TwitterIcon/>
            </div>
        </div>
    </div>
  )
}

export default Contact
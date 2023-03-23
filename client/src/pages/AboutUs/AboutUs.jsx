import React from 'react';
import './AboutUs.scss';
import BrushIcon from '@mui/icons-material/Brush';
import StorefrontIcon from '@mui/icons-material/Storefront';
import HomeIcon from '@mui/icons-material/Home';

import {AiOutlineShop, AiOutlineBulb, AiOutlineFormatPainter, AiOutlineHome} from 'react-icons/ai';


const AboutUs = () => {

    const values = () => {

    }

  return (
    <div className="aboutUs">

        <img src='/img/About-Us-Ticket.png'/>

        <div className="services">
            <div className="title">
                <h1>MillionDollarPosters</h1>
            </div>

            <div className="servicesArea">
                <div className="box">
                    <div className="card">
                        <i className="fas fa-bars">
                            <AiOutlineShop/>
                        </i>
                        
                        <h2>E-commerce Shop</h2>

                        <div className="pra">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet velit sit aut et amet mollitia, quasi, blanditiis, eos quo fuga temporibus nesciunt placeat dolorem labore eligendi cumque. Quae, aperiam veniam.</p>
                        </div>
                    </div>
                </div>

                <div className="box">
                    <div className="card">
                        <i className="fas fa-bars">
                            <AiOutlineBulb/>
                        </i>
                        <h2>Constantly Innovating</h2>

                        <div className="pra">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet velit sit aut et amet mollitia, quasi, blanditiis, eos quo fuga temporibus nesciunt placeat dolorem labore eligendi cumque. Quae, aperiam veniam.</p>
                        </div>
                    </div>
                </div>

                <div className="box">
                    <div className="card">
                        <i className="fas fa-bars">
                            <AiOutlineFormatPainter/>
                        </i>

                        <h2>Creativity splurge</h2>

                        <div className="pra">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet velit sit aut et amet mollitia, quasi, blanditiis, eos quo fuga temporibus nesciunt placeat dolorem labore eligendi cumque. Quae, aperiam veniam.</p>
                        </div>
                    </div>
                </div>

                <div className="box">
                    <div className="card">
                        <i className="fas fa-bars">
                            <AiOutlineHome/>
                        </i>

                        <h2>Comfort of your home</h2>

                        <div className="pra">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet velit sit aut et amet mollitia, quasi, blanditiis, eos quo fuga temporibus nesciunt placeat dolorem labore eligendi cumque. Quae, aperiam veniam.</p>

                        </div>
                    </div>
                </div>
            </div>
            
        </div>

    </div>
  )
}

export default AboutUs;
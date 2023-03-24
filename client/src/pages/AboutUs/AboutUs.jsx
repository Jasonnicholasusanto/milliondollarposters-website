import React from 'react';
import './AboutUs.scss';
import Contact from "../../components/Contact/Contact.jsx";

import {AiOutlineShop, AiOutlineBulb, AiOutlineFormatPainter, AiOutlineHome} from 'react-icons/ai';


const AboutUs = () => {

    const values = () => {

    }

  return (
    <div className="aboutUs">

        <img src='/img/About-Us-Ticket.png'/>

        <div className="services">
            <div className="title">
                <h1>About Us</h1>
            </div>

            <hr/>

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

                        <h2>Creativity Subscription</h2>

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

            <div className="aboutUsText">
                <h1>
                    How it started...
                </h1>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et quae, porro cum illo saepe distinctio voluptatibus blanditiis quos repellat error ipsam cumque, magni nihil est eos. Perspiciatis, dolor aliquid! 
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem natus aspernatur minus. Libero obcaecati, deserunt aliquid ducimus aspernatur rem, accusamus, sint iusto omnis odio autem. Debitis ea iste officia voluptates?
                </p>
            </div>
            
        </div>

        <Contact/>

    </div>
  )
}

export default AboutUs;
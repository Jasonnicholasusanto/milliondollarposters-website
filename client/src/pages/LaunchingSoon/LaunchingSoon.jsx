import React from 'react';
import './LaunchingSoon.scss';
import Plx from 'react-plx';

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from '@mui/icons-material/Twitter';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';


const LaunchingSoon = () => {
  return (
    <div className='launchingSoon'>

        <Plx
            parallaxData={[
            {
                start: 0,
                end: 700,
                // duration: 800,
                easing: "ease-in",
                properties: [
                {
                    startValue: 1,
                    endValue: 5,
                    property: "scale"
                }
                ]
            }
            ]}
            style={{
            position: "fixed",
            left: 0,
            top: 0,
            width: "100%",
            zIndex: 100
            }}
        >
            <img style={{ width: "100%", height: "100vh"}} src="/img/border-gradient.png" alt="foreground" />
        </Plx>

        <Plx
            parallaxData={[
            {
                start: 0,
                end: 800,
                properties: [
                {
                    startValue: 1,
                    endValue: 1.15,
                    property: "scale"
                }
                ]
            }
            ]}
            style={{  
            position: "fixed",
            left: 0,
            top: 0,
            width: "100%"
            }}
        >
            <img style={{zIndex: "-1", width: "100%", height: "100vh"}} src="/img/MillionDollarPosters-comingsoon.png" alt="background" />

            {/* <h1 className='launch'>
                Launching Soon.
            </h1>

            <div className="social">
                <a target="_blank" href="https://www.instagram.com/milliondollarposters/"><InstagramIcon/></a>
                <a href=""><FacebookIcon/></a>
                <a href=""><TwitterIcon/></a>
            </div> */}
        </Plx>

        <Plx
            parallaxData={[
            {
                start: 0,
                end: 400,
                properties: [
                {
                    startValue: 1,
                    endValue: 0,
                    property: "opacity"
                },
                {
                    startValue: 0,
                    endValue: 100,
                    property: "translateY"
                }]
            }
            ]}
            style={{
            position: "fixed",
            left: 0,
            top: "26vw",
            width: "100%"
            }}
        >

            <h1 className='milliondollarposters'>
                MillionDollarPosters
            </h1>

            <p className='copyright'>© Copyright 2023. All Rights Reserved</p>

            <p className='scroll'>
                scroll down
            </p>
            
            <KeyboardDoubleArrowDownIcon style={{color: "white", marginTop: "10px", fontSize: "15px"}}/>

        </Plx>

        <Plx
            parallaxData={[
            {
                start: 0,
                end: 400,
                properties: [
                {
                    startValue: 0,
                    endValue: 1,
                    property: "opacity"
                },
                ]
            },
            ]}
            style={{
            position: "fixed",
            left: 0,
            top: "26vw",
            width: "100%"
            }}
        >

            <h1 className='launch'>
                Launching Soon.
            </h1>

            <div className="social">
                <a target="_blank" href="https://www.instagram.com/milliondollarposters/"><InstagramIcon/></a>
                <a href=""><FacebookIcon/></a>
                <a href=""><TwitterIcon/></a>
            </div> 

        </Plx> 

        <h1 className='test'>
            Test
        </h1>

    </div>
  )
}

export default LaunchingSoon
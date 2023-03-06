import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {Link} from "react-router-dom";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <div className='navbar'>
        <div className="wrapper">
            <div className="left">
                <div className="item">
                    <img src="/img/en.png" alt=""/>
                    <KeyboardArrowDownIcon/>
                </div>

                <div className="item">
                    <span>AUD</span>
                    <KeyboardArrowDownIcon/>
                </div>

                <div className="item">
                    <Link className='link' to="/products/1">NBA Posters</Link>
                </div>

                {/* <div className="item">
                    <Link to="/products/2">Aesthetic Posters</Link>
                </div> */}

                <div className="item">
                    <Link className='link' to="/products/3">Other Posters</Link>
                </div>
            </div>

            <div className="center">
                <Link className='link' to="/">MillionDollarPosters</Link>
            </div>

            <div className="right">
                <div className="item">
                    <Link className='link' to="/">Homepage</Link>
                </div>

                <div className="item">
                    <Link className='link' to="/">About</Link>
                </div>

                <div className="item">
                    <Link className='link' to="/">Contact</Link>
                </div>

                <div className="item">
                    <Link className='link' to="/">Stores</Link>
                </div>
                
                <div className="icons">
                    <SearchIcon/>
                    <PersonOutlineOutlinedIcon/>
                    <FavoriteBorderOutlinedIcon/>

                    <div className="cartIcon">
                        <ShoppingCartOutlinedIcon/>
                        <span>0</span>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default NavBar
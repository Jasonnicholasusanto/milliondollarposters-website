import { React, useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {Link} from "react-router-dom";
import Cart from '../Cart/Cart';
import "./NavBar.scss";

const NavBar = () => {

    const [open, setOpen] = useState(false);

  return (
    <div className='navbar'>
        <div className="wrapper">

            <div className="left2">
                <Link className='millionDollarPostersLink' to="/">MillionDollarPosters</Link>
            </div>

            <div className="right">
                <div className="item">
                    <Link className='link' to="/posters/">Posters</Link>
                </div>

                <div className="item">
                    <Link className='link' to="/">Sell</Link>
                </div>

                <div className="item">
                    <Link className='link' to="/">Homepage</Link>
                </div>

                <div className="item">
                    <Link className='link' to="/">About</Link>
                </div>

                <div className="item">
                    <Link className='link' to="/">Contact</Link>
                </div>
                
                <div className="icons">
                    <SearchIcon/>
                    <PersonOutlineOutlinedIcon/>
                    <FavoriteBorderOutlinedIcon/>

                    <div className="cartIcon" onMouseEnter={() => setOpen(true)}>
                        <ShoppingCartOutlinedIcon/>
                        <span>0</span>
                    </div>
                </div>
            </div>
        </div>
        {open && <Cart onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}/>}
    </div>
  )
}

export default NavBar
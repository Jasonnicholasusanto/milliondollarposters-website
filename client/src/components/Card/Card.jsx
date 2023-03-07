import { Link } from '@mui/material';
import React from 'react'
import "./Card.scss";
import {NavLink} from "react-router-dom";

const Card = ({item}) => {
  return (
    <NavLink className="link" to={`/product/${item.id}`}>
        <div className="card">
            <div className="image">
                {item.isNew && <span>New Release</span>}
                <img src={item.img} alt="" className="mainImg" />
                <img src={item.img2} alt="" className="secondImg" />
            </div>

            <h2>{item.title}</h2>

            <div className="prices">
                <h3>${item.oldPrice}</h3>
                <h3>${item.price}</h3>
            </div>
        </div>
    </NavLink>
  )
}

export default Card
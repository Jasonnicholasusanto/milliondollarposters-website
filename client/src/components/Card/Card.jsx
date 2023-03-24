import React from 'react'
import "./Card.scss";
import {NavLink} from "react-router-dom";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';

const Card = ({item}) => {

  const totalRatings = () => {
    var numRatings = 0;
    
    for(var i=0; i<5; i++){
      numRatings += item.rating[i];
    }

    return numRatings;
  }

  const averageRating = () => {
    var total = 0;
    var avg = 0;

    for(var i=0; i<5; i++){
      total += (i+1) * item.rating[i];
    }

    avg = Math.floor(total / totalRatings());

    return avg;

  }

  return (
    <NavLink className="link" to={`/product/${item.id}`}>
        <div className="card">
            <div className="image">
                {/* {item.isNew && <span>New Release</span>} */}
                {item.tag !== "" && <span>{item.tag}</span>}
                <img src={item.img} alt="" className="mainImg" />
                <img src={item.img2} alt="" className="secondImg" />
            </div>

            { (item.title.length) > 58 ? <h2>{item.title.substring(0,55)}...</h2> : <h2>{item.title.substring(0,58)}</h2>}



            {item.branding === "" ? <h3>By {item.artist}</h3> : <h3>By {item.branding}</h3>}

            <div className="rating">
                <span className="star">
                    {averageRating() >= 1 ? <StarIcon fontSize='small'/> : <StarBorderIcon fontSize='small'/>}
                </span>
                <span className="star">
                    {averageRating() >= 2 ? <StarIcon fontSize='small'/> : <StarBorderIcon fontSize='small'/>}
                </span>
                <span className="star">
                    {averageRating() >= 3 ? <StarIcon fontSize='small'/> : <StarBorderIcon fontSize='small'/>}
                </span>
                <span className="star">
                    {averageRating() >= 4 ? <StarIcon fontSize='small'/> : <StarBorderIcon fontSize='small'/>}
                </span>
                <span className="fa fa-star">
                    {averageRating() >= 5 ? <StarIcon fontSize='small'/> : <StarBorderIcon fontSize='small'/>}
                </span>

                <span className='numRatings'>({totalRatings()})</span>
            </div>
            

            <div className="prices">
                {item.oldPrice !== item.price &&
                  <h3 className='oldPrice'>
                    ${item.oldPrice}
                  </h3>
                }
                <h3>${item.price}</h3>
            </div>
        </div>
    </NavLink>
  )
}

export default Card
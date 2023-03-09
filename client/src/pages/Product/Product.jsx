import React, { useState } from 'react'
import "./Product.scss";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import Accordion from '../../components/Accordion/Accordion';
import Contact from "../../components/Contact/Contact.jsx";

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [wish, setWish] = useState(false);
  const [compare, setCompare] = useState(false);
  

  const images = [
    "https://images.unsplash.com/photo-1584448141569-69f342da535c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1041&q=80",
    "https://images.unsplash.com/photo-1584448062058-0d13ba997eb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1055&q=80",
  ];

  return (
    <div className="product">

      <div className="wrapper">

        <div className="left">
          <div className="images">
            <img src={images[0]} alt="" onClick={e => setSelectedImg(0)}/>
            <img src={images[1]} alt="" onClick={e => setSelectedImg(1)}/>
          </div>

          <div className="mainImg">
            <img src={images[selectedImg]} alt=""/>
          </div>
        </div>

        <div className="right">
          <h1>Montreal Winter Sports</h1>
          <span className="price" >$199.00</span>
          <p className='itemDescription'>The annual winter sporting event is here! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat impedit odio dolores repudiandae, earum, dolore sunt maxime temporibus fugit omnis ullam, in cupiditate. Architecto quis molestiae illo quam, corporis vel.</p>

          <div className="quantity">
            <button onClick={() => setQuantity(prev => prev === 1 ? 1 : prev-1)}>-</button>
            <p>
              {quantity}
            </p>
            <button onClick={() => setQuantity(prev => prev+1)}>+</button>
          </div>

          <button className="add">
            <AddShoppingCartIcon/>
            ADD TO CART
          </button>

          <div className="links">

            <button className='wishlist'>
              <FavoriteBorderIcon/>
              ADD TO WISHLIST
            </button>

            <button className="compare">
              <CompareArrowsIcon/>
              ADD TO COMPARE
            </button>

            {/* <div className="item">
              <FavoriteBorderIcon/>
              ADD TO WISHLIST
            </div> */}

            {/* <div className="item">
              <CompareArrowsIcon/>
              ADD TO COMPARE
            </div> */}
          </div>

          <div className="info">
            <span>Artist: Mina Oberon</span>
            <span>Date: 15/01/2023</span>
            <span>Tags: Retro, Sports</span>
          </div>

          <hr />

          <Accordion/>

        </div>

      </div>

      {/* <hr className="lineBreak"/> */}
      {/* <div className="footerBar"></div> */}

      <Contact/>

    </div>
  )
}

export default Product
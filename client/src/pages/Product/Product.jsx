import React, { useState } from 'react'
import "./Product.scss";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BalanceIcon from '@mui/icons-material/Balance';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import Accordion from '../../components/Accordion/Accordion';
import Contact from "../../components/Contact/Contact.jsx";
import Dropdown from '../../components/Dropdown/Dropdown';
import Review from '../../components/Review/Review';

import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
      primary: {
      main: '#000000',
      darker: '#000000',
      },
      secondary: {
      main: '#ffffff',
      },
  },
});

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [wish, setWish] = useState(false);
  const [compare, setCompare] = useState(false);
  
  const images = [
    "/img/oceanic-poster-display-mockup.png",
    "/img/oceanic-display.png",
  ];

  return (
    <div className="product">

      <div className="wrapper">

        <div className="left">

          <div className="productImages">
            <div className="images">
                <img src={images[0]} alt="" onClick={e => setSelectedImg(0)}/>
                <img src={images[1]} alt="" onClick={e => setSelectedImg(1)}/>
              </div>

              <div className="mainImg">
                <img src={images[selectedImg]} alt=""/>
              </div>
          </div>

          <div className="reviewSection">
            <hr/>
            <Review/>
          </div>
          
        </div>

        <div className="right">
          <h1>Oceanic</h1>
          <span className='createdBy'>By MillionDollarPosters</span>
          <span className="price" >$35.99</span>
          <p className='itemDescription'>
            Calming and crashing waves. Seaside aesthetics. Bringing some seasalt in the air to your home.
            The beach is located in the Maldives and the photography was taken by Shifaaz Shamoon.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat impedit odio dolores repudiandae, 
            earum, dolore sunt maxime temporibus fugit omnis ullam, in cupiditate. 
            Architecto quis molestiae illo quam, corporis vel.
          </p>

          <hr/>

          <Dropdown/>

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

          {/* <Button
            type="submit"
            fullWidth="false"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            // color={theme.palette.primary.main}
          >
            ADD TO CART
          </Button> */}

          <div className="links">

            <button className='wishlist' onClick={() => setWish(!wish)}>
              {!wish && <FavoriteBorderIcon/>}
              {wish && <FavoriteIcon/>}
              ADD TO WISHLIST
            </button>

            {/* <button className="compare" onClick={() => setCompare(!compare)}>
              <CompareArrowsIcon/>
              ADD TO COMPARE
            </button> */}

          </div>

          <div className="info">
            <span>Artist: Jason Nicholas Susanto</span>
            <span>Date: 10/03/2023</span>
            <span>Sizes: A4 (8"x12"), 11"x14", A3 (29.7x42cm)</span>
            <span>Tags: Beach, Waves, Summer, Aesthetic</span>
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
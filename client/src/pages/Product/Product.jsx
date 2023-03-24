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

  const productData = {
    id: 1,
    img: "/img/With-great-power-comes-great-responsibility-spiderman-mockup.png",
    img2: "/img/With-great-power-comes-great-responsibility-spiderman-display.png",
    title: "With great power comes great responsibility — Spider-Man",
    artist: "Jason Nicholas Susanto",
    branding: "MillionDollarPosters",
    description: "This poster is for all those Spider-Man fans out there. Although Uncle Ben (and Aunt May) passed away, we believe his famous quote and spirit will continue to go on. May Peter Parker continue to uphold his responsibilities and stay as a friendly neighbourhood Spider-Man!",
    isNew: true,
    tag: "Featured",
    oldPrice: 50,
    price: 35,
    categories: ["Abstract", "Colours"],
    subcategories: ["Waves"],
    date: new Date("March 19, 2023"),
    sizes: ['11"x14"', 'A3 size (29.7x42 cm)', '12"x16"'],
  }

  // To convert Date data type to String.
  Date.prototype.yyyymmdd = function() {
    var mm = this.getMonth() + 1; // getMonth() is zero-based
    var dd = this.getDate();
  
    return [this.getFullYear(),
            (mm>9 ? '' : '0') + mm,
            (dd>9 ? '' : '0') + dd
           ].join('-');
  };

  // To retrieve the poster's creation date.
  const productDate = () => {
    return productData.date.yyyymmdd();
  }

  // To retrieve the poster's available sizes.
  const productSizes = () => {
    var sizes = "";

    for(var i=0; i<productData.sizes.length; i++){

      if(i+1 == productData.sizes.length){
        sizes += productData.sizes[i];
      } else {
        sizes = sizes + productData.sizes[i] + ", ";
      }
    }

    return sizes;
  }

  const productTags = () => {
    var tags = "";

    for(var i=0; i<productData.categories.length; i++){

      if(productData.subcategories.length === 0){
        if(i+1 == productData.categories.length){
          tags += productData.categories[i];
        } else {
          tags += productData.categories[i] + ", ";
        }
      } else {
        tags += productData.categories[i] + ", ";
      }

    }

    for(var i=0; i<productData.subcategories.length; i++){

      if(i+1 == productData.subcategories.length){
        tags += productData.subcategories[i];
      } else {
        tags += productData.subcategories[i] + ", ";
      }
      
    }

    return tags;
  }

  const [selectedImg, setSelectedImg] = useState(productData.img);
  const [quantity, setQuantity] = useState(1);
  const [wish, setWish] = useState(false);
  const [compare, setCompare] = useState(false);

  return (
    <div className="product">

      <div className="wrapper">

        <div className="left">

          <div className="productImages">
            <div className="images">
                <img src={productData.img} alt="" onClick={e => setSelectedImg(productData.img)}/>
                <img src={productData.img2} alt="" onClick={e => setSelectedImg(productData.img2)}/>
              </div>

              <div className="mainImg">
                <img src={selectedImg} alt=""/>
              </div>
          </div>

          <div className="reviewSection">
            <hr/>
            <Review/>
          </div>
          
        </div>

        <div className="right">
          <h1>{productData.title}</h1>
          <span className='createdBy'>By {productData.branding}</span>
          <span className="price" >${productData.price.toFixed(2)}</span>
          <p className='itemDescription'>
            {productData.description==="" ? "There is no description for this poster." : productData.description}
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
            <span>Date: {productDate()}</span>
            <span>Sizes: {productSizes()}</span>
            <span>Tags: {productTags()}</span>
          </div>

          <hr />

          <Accordion/>

        </div>
      </div>

      <Contact/>

    </div>
  )
}

export default Product
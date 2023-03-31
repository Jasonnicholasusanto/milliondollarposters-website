import "./FeaturedProducts.scss";
import Card from '../Card/Card.jsx';
import React from "react";
import useFetch from '../../hooks/useFetch';

const FeaturedProducts = ({ type }) => {

  const { data, loading, error } = useFetch(
    `/posters?populate=*&[filters][tag][$eq]=${type}`
  );

  return (
    <div className="featuredProducts">
        
        <div className="top">
          <h1>
            {type} 
            Products
          </h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
            suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
            lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
            suspendisse ultrices gravida. Risus commodo viverra maecenas.            
          </p>
        </div>

        <div className="bottom">
          {error ? "Oops! Something went wrong." : 
          (loading ? "loading" : 
          data?.map((item) => 
            <Card item={item} key={item.id}/>
          ))}
        </div>
    </div>
  )
}

export default FeaturedProducts
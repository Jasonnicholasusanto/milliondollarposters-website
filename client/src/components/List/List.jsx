import React from 'react'
import "./List.scss";
import Card from "../Card/Card.jsx";
import { testData } from '../../testData/testData';
import useFetch from '../../hooks/useFetch';

const List = () => {

    const { data, loading, error } = useFetch(
        `/posters?populate=*&`
      );

    return (
        <div className="list">
            {error ? "Oops! Something went wrong." : 
            (loading ? "loading" : 
            data?.map((item) => 
                <Card item={item} key={item.id}/>
            ))}

        </div>
    )
}

export default List; 
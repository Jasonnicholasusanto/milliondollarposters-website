import React, { useState } from 'react';
import "./List.scss";
import Card from "../Card/Card.jsx";
import useFetch from '../../hooks/useFetch';

const List = ({ subCats, maxPrice, sort, categoryId }) => {

    // let query = `/posters?populate=*&[filters][poster_materials][id]=${categoryId}${subCats.map(
    //     (item) => `&[filters][sub_categories][id][$eq]=${item}`
    // )}&[filters][price][$lte]=${maxPrice}`

    let query = `/posters?populate=*`;
    
    if (categoryId) {
        query += `&[filters][poster_materials][id]=${categoryId}${subCats.map(
            (item) => `&[filters][sub_categories][id][$eq]=${item}`
        )}&[filters][price][$lte]=${maxPrice}`;
    } else {
        query += `&[filters][price][$lte]=${maxPrice}`;
    }


    if (sort !== null) {
        query += `&sort=price:${sort}`;
    }

    const { data, loading, error } = useFetch(
        query
    );

    return (
        <div className="list">
            {error ? "Oops! Something went wrong." : 
            (loading ? "loading..." : 
            (data?.length !== 0 ? (data?.map((item) => <Card item={item} key={item.id}/>)) :
                "No items found."
            ))} 
        </div>

        // Need to implement a message where if there is no items after placing in filters, then state "no items found".
    )
}

export default List; 
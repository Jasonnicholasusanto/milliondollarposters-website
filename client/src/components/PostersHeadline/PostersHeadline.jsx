import React, { useState } from 'react';
import './PostersHeadline.scss';
import useFetch from '../../hooks/useFetch';

const PostersHeadline = ({ id }) => {

    const { data, loading, error } = useFetch(
        `/poster-materials/${id}`
    );

  return (
    <div className="postersHeadline">
        <h1>{id ? data?.attributes?.title : "All Posters"}</h1>
    </div>
  )
}

export default PostersHeadline
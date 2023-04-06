import React from 'react';
import './DPHeadline.scss';
import useFetch from '../../hooks/useFetch';

const DPHeadline = ({ id }) => {

    const { data, loading, error } = useFetch(
        `/digital-planner-categories/${id}`
    );

  return (
    <div className="dpHeadline">
        <h1>{id ? "Digital " + data?.attributes?.title + "s" : "All Digital Planners"}</h1>
    </div>
  )
}

export default DPHeadline
import React, { useState } from 'react';
import './PosterMaterials.scss';
import useFetch from '../../hooks/useFetch';

const PosterMaterials = () => {

    const [selectedPosterMaterials, setSelectedPosterMaterials] = useState([]);

    const { data, loading, error } = useFetch(
        `/poster-materials?populate*=&`
      );

    const handleChange = (e) => {
        const value = e.target.value;
        const isChecked = e.target.checked;

        setSelectedPosterMaterials(
            isChecked 
            ? [...selectedPosterMaterials, value] 
            : selectedPosterMaterials.filter(item => item !== value)
        );
        console.log(selectedPosterMaterials);
    }

  return (
    <div className="posterMaterials">
        <h2>Poster Materials</h2>

        {data?.map((item) => (
            <div className="inputItem" key={item.id}>
                <input type="checkbox" id={item.id} value={item.id} onChange={(e) => handleChange}/>
                <label htmlFor={item.id}>{item.attributes.title}</label>
            </div>
        ))}
    </div>
  )
}

export default PosterMaterials
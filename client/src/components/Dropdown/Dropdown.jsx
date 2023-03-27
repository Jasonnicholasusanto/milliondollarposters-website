import React from 'react';
import './Dropdown.scss';
import StraightenIcon from '@mui/icons-material/Straighten';

const Dropdown = ({ sizesData }) => {

  // const sizesData = ['11"x14"', 'A3 size (29.7x42 cm)', '12"x16"'];

  return (
    <div className="dropdown">
        <form className='form'>
            
            <h1 className='size'>
                <StraightenIcon/>
                SIZE
            </h1>

            <select className='dropdownList'>

              <option value="none">Select...</option>

              {sizesData?.map(size=>(
                <option value={size}>{size}</option>
              ))}
            </select>
        </form>
    </div>
  )
}

export default Dropdown
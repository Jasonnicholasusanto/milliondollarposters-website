import React from 'react';
import './Dropdown.scss';
import StraightenIcon from '@mui/icons-material/Straighten';

const Dropdown = () => {
  return (
    <div className="dropdown">
        <form className='form'>
            
            <h1 className='size'>
                <StraightenIcon/>
                SIZE
            </h1>

            <select className='dropdownList'>
                <option value="none">Select...</option>
                <option value="A4">A4 (8"x12")</option>
                <option value="11x14">11"x14"</option>
                <option value="A3">A3 (29.7x42cm)</option>
            </select>
        </form>
    </div>
  )
}

export default Dropdown
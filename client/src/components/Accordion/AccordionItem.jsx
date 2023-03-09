import { React, useState } from 'react';
import './AccordionItem.scss';
import InfoIcon from '@mui/icons-material/Info';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import PublicIcon from '@mui/icons-material/Public';

const AccordionItem = ({ logo, title, content }) => {
    const [isActive, setIsActive] = useState(false);
  
    return (
      <div className="accordionItem">
        <div className="accordionTitle" onClick={() => setIsActive(!isActive)}>
            
            <div className="accordionLeft">
                {logo === "0" && <InfoIcon/>}
                {logo === "1" && <AspectRatioIcon/>}
                {logo === "2" && <PublicIcon/>}

                <h1>{title}</h1>
            </div>
          <h1 className='activeStatus'>{isActive ? '-' : '+'}</h1>
        </div>

        {isActive && <p>{content}</p>}
      </div>
    );
  };

export default AccordionItem
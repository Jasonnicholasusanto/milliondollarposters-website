import React, { useState } from 'react';
import AccordionItem from './AccordionItem';
import { accordionData } from './AccordionContent';
import './Accordion.scss';

const Accordion = () => {

  return (
    <div>
      <div className="accordion">
        {accordionData.map(({ logo, title, content }) => (
          <AccordionItem logo={logo} title={title} content={content} />
        ))}
      </div>
    </div>
  );
};

export default Accordion;
import { React, useState } from 'react';
import './FAQAccordion.scss';

const FAQAccordion = ({question, answer}) => {
    const [expand, setExpand] = useState(false);

  return (
    <div class="faqAccordion">
        <button id="accordion-button-1" aria-expanded={expand} onClick={() => setExpand(!expand)}>
            <span class="accordion-title">
                {question}
            </span>
            
            <span class="icon" aria-hidden="true"></span>
        </button>
        
        <div class="accordion-content">
            <p>
                {answer}
            </p>
        </div>
    </div>
  )
}

export default FAQAccordion
import React from 'react';
import './FAQs.scss';
import { FAQcontent } from '../../components/FAQAccordion/FAQContent.js';
import FAQAccordion from '../../components/FAQAccordion/FAQAccordion.jsx';
import { Link } from 'react-router-dom';

const FAQs = () => {

  return (
    <div className="faqs">
        <h1>Frequently Asked Questions</h1>

        <hr/>

        <div class="accordion">
            {FAQcontent.map(({ question, answer }) => (
                <FAQAccordion question={question} answer={answer}/>
            ))}
        </div>

        <div className="needMoreHelp">
            <h3>Need more help?</h3>
            <Link className='link' to='/contact-us/'>Please feel free to ask us!</Link>
        </div>
        
    </div>
  )
}

export default FAQs
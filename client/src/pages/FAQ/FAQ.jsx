import React from 'react';
import './FAQ.scss';

const FAQ = () => {

    const faqs = [
        {
            id: 0,
            question: "How do I start selling my designs?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam corrupti quod, suscipit recusandae minima sapiente cupiditate possimus, accusantium consectetur cum deleniti sed, a nihil eligendi nostrum asperiores quam rerum facere?",
        },
        {
            id: 1,
            question: "When will my order arrive?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam corrupti quod, suscipit recusandae minima sapiente cupiditate possimus, accusantium consectetur cum deleniti sed, a nihil eligendi nostrum asperiores quam rerum facere?",
        },
        {
            id: 2,
            question: "Where is MillionDollarPosters located?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam corrupti quod, suscipit recusandae minima sapiente cupiditate possimus, accusantium consectetur cum deleniti sed, a nihil eligendi nostrum asperiores quam rerum facere?",
        },
        {
            id: 3,
            question: "Can I cancel my order?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam corrupti quod, suscipit recusandae minima sapiente cupiditate possimus, accusantium consectetur cum deleniti sed, a nihil eligendi nostrum asperiores quam rerum facere?",
        },
        {
            id: 4,
            question: "Can I return my order?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam corrupti quod, suscipit recusandae minima sapiente cupiditate possimus, accusantium consectetur cum deleniti sed, a nihil eligendi nostrum asperiores quam rerum facere?",
        },
    ]
  return (
    <div className="faq">
        <section>
            <h1 className="title">
                Frequently Asked Questions
            </h1>

            <div className="tabs">
                {faqs?.map(data => (
                    // <div className="faqs">
                    //     <div className="question">
                    //         <h3>{data.question}</h3>

                    //         <svg width="15" height="10" viewBox="0 0 42 25">
                    //             <path d={"M3 3L21 21L39 3"} stroke={"white"} stroke-width={7} strokeLinecap={"round"}/>
                    //         </svg>
                    //     </div>
                    //     <div className="answer">
                    //         <p>{data.answer}</p>
                    //     </div>
                    //     <hr/>
                    // </div>

                    <div class="tab">
                        <input type="checkbox" id={data.id}/>

                        <label class="tab-label" for={data.id}>{data.question}</label>

                        <div class="tab-content">
                            {data.answer}
                        </div>
                    </div>
                )

                )}
            </div>
            

            {/* <div className="faqs">
                <div className="question">
                    <h3>How do I start selling my artworks?</h3>

                    <svg width="15" height="10" viewBox="0 0 42 25">
                        <path d={"M3 3L21 21L39 3"} stroke={"white"} stroke-width={7} strokeLinecap={"round"}/>
                    </svg>
                </div>
                <div className="answer">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam corrupti quod, suscipit recusandae minima sapiente cupiditate possimus, accusantium consectetur cum deleniti sed, a nihil eligendi nostrum asperiores quam rerum facere?
                    </p>
                </div>
            </div>

            <div className="faqs">
                <div className="question">
                    <h3>How do I start selling my artworks?</h3>

                    <svg width="15" height="10" viewBox="0 0 42 25">
                        <path d={"M3 3L21 21L39 3"} stroke={"white"} stroke-width={7} strokeLinecap={"round"}/>
                    </svg>
                </div>
                <div className="answer">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam corrupti quod, suscipit recusandae minima sapiente cupiditate possimus, accusantium consectetur cum deleniti sed, a nihil eligendi nostrum asperiores quam rerum facere?
                    </p>
                </div>
            </div>

            <div className="faqs">
                <div className="question">
                    <h3>How do I start selling my artworks?</h3>

                    <svg width="15" height="10" viewBox="0 0 42 25">
                        <path d={"M3 3L21 21L39 3"} stroke={"white"} stroke-width={7} strokeLinecap={"round"}/>
                    </svg>
                </div>
                <div className="answer">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam corrupti quod, suscipit recusandae minima sapiente cupiditate possimus, accusantium consectetur cum deleniti sed, a nihil eligendi nostrum asperiores quam rerum facere?
                    </p>
                </div>
            </div> */}

        </section>
    </div>
  )
}

export default FAQ
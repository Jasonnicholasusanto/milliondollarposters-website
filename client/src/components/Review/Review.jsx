import React from 'react'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import './Review.scss';

const Review = ({average, ratings}) => {

    function countRatings() {
        var numRatings = 0;

        for(var i=0; i < 5; i++){
            numRatings += ratings[i];
        }

        console.log(numRatings);
    
        return numRatings;
    };

  return (
    <div className="review">

        <div className="heading">
            <h1 className='head'>
                Reviews
            </h1>

            <div className="stars">
                <span className="star">
                    {average >= 1 ? <StarIcon/> : <StarBorderIcon/>}
                </span>
                <span className="star">
                    {average >= 2 ? <StarIcon/> : <StarBorderIcon/>}
                </span>
                <span className="star">
                    {average >= 3 ? <StarIcon/> : <StarBorderIcon/>}
                </span>
                <span className="star">
                    {average >= 4 ? <StarIcon/> : <StarBorderIcon/>}
                </span>
                <span className="fa fa-star">
                    {average >= 5 ? <StarIcon/> : <StarBorderIcon/>}
                </span>
            </div>

            <h3 className='numRatings'>({countRatings()})</h3>
            
        </div>

        <hr />

        <div class="row">
            <div class="side">
                <div>5 star</div>
            </div>

            <div class="middle">
            <div class="bar-container">
                <div class="bar-5"></div>
            </div>
            </div>
            <div class="side right">
            <div>150</div>
            </div>
            <div class="side">
            <div>4 star</div>
            </div>
            <div class="middle">
            <div class="bar-container">
                <div class="bar-4"></div>
            </div>
            </div>
            <div class="side right">
            <div>63</div>
            </div>
            <div class="side">
            <div>3 star</div>
            </div>
            <div class="middle">
            <div class="bar-container">
                <div class="bar-3"></div>
            </div>
            </div>
            <div class="side right">
            <div>15</div>
            </div>
            <div class="side">
            <div>2 star</div>
            </div>
            <div class="middle">
            <div class="bar-container">
                <div class="bar-2"></div>
            </div>
            </div>
            <div class="side right">
            <div>6</div>
            </div>
            <div class="side">
            <div>1 star</div>
            </div>
            <div class="middle">
            <div class="bar-container">
                <div class="bar-1"></div>
            </div>
            </div>
            <div class="side right">
            <div>20</div>
            </div>
        </div>
        </div>
  )
}

Review.defaultProps= {
    average: 4.3,
    ratings: [2, 4, 5, 2, 19]
}

export default Review
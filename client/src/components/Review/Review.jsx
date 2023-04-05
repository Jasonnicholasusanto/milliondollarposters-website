import React from 'react'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import './Review.scss';

const Review = ({ ratings }) => {

    console.log("Ratings: " + ratings);

    const totalRatings = () => {
        var numRatings = 0;
        
        for(var i=0; i<5; i++){
          numRatings += ratings[i];
        }
    
        return numRatings;
      }

    const average = () => {
        var total = 0;
        var avg = 0;

        for(var i=0; i<5; i++){
            total += (i+1) * ratings[i];
        }

        avg = Math.floor(total / totalRatings());

        return avg;
    }

    function countRatings() {
        var numRatings = 0;

        for(var i=0; i < 5; i++){
            numRatings += ratings[i];
        }
    
        return numRatings;
    };

    const fiveStar = ((ratings[4]/countRatings())*100) + '%';
    const fourStar = ((ratings[3]/countRatings())*100) + '%';
    const threeStar = ((ratings[2]/countRatings())*100) + '%';
    const twoStar = ((ratings[1]/countRatings())*100) + '%';
    const oneStar = ((ratings[0]/countRatings())*100) + '%';

  return (
    <div className="review">

        <div className="heading">
            <h1 className='head'>
                Reviews
            </h1>

            <div className="stars">
                <span className="star">
                    {average() >= 1 ? <StarIcon/> : <StarBorderIcon/>}
                </span>
                <span className="star">
                    {average() >= 2 ? <StarIcon/> : <StarBorderIcon/>}
                </span>
                <span className="star">
                    {average() >= 3 ? <StarIcon/> : <StarBorderIcon/>}
                </span>
                <span className="star">
                    {average() >= 4 ? <StarIcon/> : <StarBorderIcon/>}
                </span>
                <span className="fa fa-star">
                    {average() >= 5 ? <StarIcon/> : <StarBorderIcon/>}
                </span>
            </div>

            <h3 className='numRatings'>({countRatings()})</h3>
            
        </div>

        <hr />

        <div class="row">
            <div class="side">
                <p>5 star</p>
            </div>

            <div class="middle">
            <div class="bar-container">
                <div style={{width: fiveStar, height: "18px"}} class="bar-5"></div>
            </div>
            </div>
            <div class="side right">
            <p>({ratings[4]})</p>
            </div>

            <div class="side">
                <p>4 star</p>
            </div>
            <div class="middle">
            <div class="bar-container">
                <div style={{width: fourStar}} class="bar-4"></div>
            </div>
            </div>
            <div class="side right">
            <p>({ratings[3]})</p>
            </div>

            <div class="side">
                <p>3 star</p>
            </div>
            <div class="middle">
            <div class="bar-container">
                <div style={{width: threeStar}} class="bar-3"></div>
            </div>
            </div>
            <div class="side right">
            <p>({ratings[2]})</p>
            </div>

            <div class="side">
                <p>2 star</p>
            </div>
            <div class="middle">
            <div class="bar-container">
                <div style={{width: twoStar}} class="bar-2"></div>
            </div>
            </div>
            <div class="side right">
            <p>({ratings[1]})</p>
            </div>

            <div class="side">
                <p>1 star</p>
            </div>
            <div class="middle">
            <div class="bar-container">
                <div style={{width: oneStar}} class="bar-1"></div>
            </div>
            </div>
            <div class="side right">
            <p>({ratings[0]})</p>
            </div>
        </div>
        </div>
  )
}

Review.defaultProps= {
    average: 4,
    ratings: [2, 4, 5, 2, 19]
}

export default Review
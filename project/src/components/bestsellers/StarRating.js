import React from 'react';
import filledStar from "./starPath.svg"
import emptyStar from "./emptyStarPath.svg"

function StarRating({starsNum}) {
   const filledOrNot = (num) => {
        if (num <= starsNum)  return <img src={filledStar}></img>
        return <img src={emptyStar}></img>
    }

  return (
    <div className='starRating'>
        {[1,2,3,4,5].map( n => {console.log(n) ;return filledOrNot(n)})}
    </div>
  )
}

export default StarRating;
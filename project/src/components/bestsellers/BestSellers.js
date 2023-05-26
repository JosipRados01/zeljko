import React from 'react';
import BestSeller from './BestSeller';

function BestSellers({array}) {
  return (
    <div id='bestsellers' >
        <div>
            <h3>POUR YOUR BEST CUP WITH</h3>
            <h2>OUR BEST SELLERS</h2>
        </div>
        <div id='bestsellersCarousel'>
            {array.map(element => 
                <BestSeller
                    element={element}
                ></BestSeller>
            )}
        </div>
    </div>
  )
}

export default BestSellers;
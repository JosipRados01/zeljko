import React from 'react';
import StarRating from './StarRating';
import ColorPicker from './ColorPicker';

function BestSeller({element}) {
  const {key, image, stars, name, price_range, colors } = element;
  return (
    <div className='bestseller'>
       <figure>
        <img src={image} ></img>
       </figure>
       
       <div className='flex-left-column padding1' >

        <p><StarRating starsNum={stars} ></StarRating></p>

        <h3>{name}</h3>
        <p>{price_range}</p>

        <div className='flex-row'>
          {colors.map( color => <ColorPicker color={color} ></ColorPicker>)}
        </div>
       </div>
    </div>
  )
}

export default BestSeller;
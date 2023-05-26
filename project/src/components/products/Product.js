import React from 'react';

function Product({frontSide, backSide}) {
  return (
    <div className='product'>
        <div className='back'> <img src={backSide} ></img> </div>
        <div className='front'> <img src={frontSide} ></img> </div>
        <button className='productButton'>SHOP NOW</button>
    </div>
  );
}

export default Product;

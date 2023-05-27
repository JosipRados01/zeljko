import React from 'react';

function Product({naslovna, naslov, tekst, slike}) {
  return (
    <div className='product'>
      <figure>
        <img src={naslovna}></img>
      </figure>
      <h2>{naslov}</h2>
      <h3>{tekst}</h3>
    </div>
  );
}

export default Product;

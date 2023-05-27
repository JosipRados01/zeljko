import React from 'react';
import Product from "./Product"
import productsArray from "./products.json"
function Products() {
  return (
    <div id='products'>
        <h2>NOVOSTI I DEŠAVANJA</h2>
        <div className='flex-evenly-row inline-margin'>
          {productsArray.map(product =>( <Product {...product} ></Product> )) }
        </div>
        <button className='transparentButton'>
            PROČITAJ VIŠE
        </button>
    </div>
  );
}

export default Products;

import React from 'react';
import Product from "./Product"
import productsArray from "./products.json"
function Products() {
  return (
    <div id='products'>
        <h2>EXPLORE OUR PRODUCTS</h2>
        <div className='flex-evenly-row inline-margin'>
            <Product frontSide={productsArray[0].frontside} backSide={productsArray[0].backside} ></Product>
            <Product frontSide={productsArray[1].frontside} backSide={productsArray[1].backside} ></Product>
            <Product frontSide={productsArray[2].frontside} backSide={productsArray[2].backside} ></Product>
        </div>
        <button className='transparentButton'>
            SHOP ALL PRODUCTS
        </button>
    </div>
  );
}

export default Products;

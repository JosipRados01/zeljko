import React from 'react';
import downArrow from "../../assets/images/arrow-right-short.svg";
import pourImage from "../../assets/images/2132C2_6.png";
import { Parallax } from 'react-parallax';

function Hero() {

  const smoothScrollToBestSellers = () => {
    const bestSellersElement = document.getElementById('bestsellers');
    bestSellersElement.scrollIntoView({ behavior: 'smooth' });
  };
  

  return (
    <div className='parallax' >
      <Parallax bgImage={pourImage}>        
        <div id='hero'>
          <div className='flex-center-column heroText' >
            <h1>
              BREW ANYWHERE. BE ANYWHERE.
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo.      
            </p>
            <button className='whiteButton'>
              POUR ON THE GO
            </button>
          </div>
          <div className='exploreTag' onClick={smoothScrollToBestSellers}>
            <span>EXPLORE</span>
            <img src={downArrow} ></img>
          </div>
        </div>
      </Parallax>
    </div>
      
  );
}

export default Hero;

import React from 'react';
import downArrow from "../../assets/images/arrow-right-short.svg";
import pourImage from "../../assets/images/2132C2_6.png";
import naslovna from "../../assets/images/naslovna.jpeg";
import naslovna2 from "../../assets/images/naslovna2.webp";

import { Parallax } from 'react-parallax';

function Hero() {

  const smoothScrollToBestSellers = () => {
    const bestSellersElement = document.getElementById('bestsellers');
    bestSellersElement.scrollIntoView({ behavior: 'smooth' });
  };
  

  return (
    <div className='parallax' >
      <Parallax bgImage={naslovna2}>        
        <div id='hero'>
          <div className='flex-center-column heroText' >
            <h1>
              Župa Svetog Luke - Novi grad
            </h1>
            <p>
            "Žetva je velika, ali radnika malo. Molite dakle gospodara žetve da radnike pošalje u žetvu svoju."      
            </p>
          </div>
          <div className='exploreTag' onClick={smoothScrollToBestSellers}>
            <span>ISTRAŽI</span>
            <img src={downArrow} ></img>
          </div>
        </div>
      </Parallax>
    </div>
      
  );
}

export default Hero;

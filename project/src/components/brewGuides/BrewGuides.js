import React from 'react';
import "./BrewGuides.css"
import kruzic from "./Group6.svg"

function BrewGuides() {
    
  return (
    <div id='brewGuides' >
      <div className='brewGuidesText' >
        <h3>THE ULTIMATE BREW GUIDES</h3>
        <h2>COFFEE TO WATER RATIOS: HOW TO MEASURE COFFEE LIKE A PRO</h2>
        <p>
          <strong>You can taste it when you’ve brewed with the perfect coffee to water ratio.</strong> 
          The acidity pops every so slightly, enhancing the rich flavors and aromas.
           Your coffee’s mouthfeel is smooth and satisfying.
            And the flavor is just strong enough that you can sense all its nuances across your 10,000 taste buds,
             but not so strong that it’s uncomfortable.<br></br><br></br> It’s an incredible experience—and too often, a hard one to come by.
        </p>
        <button className='transparentButton'>LEARN MORE</button>
      </div>
      <div className='anchor'>
        <figure className='brewGuidesImage'>
          <img src={kruzic}></img>
        </figure>
      </div>
    </div>
  );
}

export default BrewGuides;

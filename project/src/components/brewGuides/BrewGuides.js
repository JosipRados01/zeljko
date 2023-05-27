import React from 'react';
import "./BrewGuides.css"
import kruzic from "./Group6.svg"
import spinner from "./spinner.png"

function BrewGuides() {
    
  return (
    <div id='brewGuides' >
      <div className='brewGuidesText' >
        <h3>NAŠA CRKVA DANAS</h3>
        <h2>"Crkva nije samo svetište, već i bolnica za duše koje trebaju iscjeljenje."</h2>
        <p>
          <strong>Župa Svetog Luke</strong>  postala je duhovno središte i simbol zajedništva u svojoj lokalnoj zajednici. Kroz svoje pastoralne programe i angažman u humanitarnim aktivnostima, crkva je pružala duhovnu podršku i pomoć potrebitima. Svećenici i vjernici Župe Svetog Luke izgradili su snažnu zajednicu koja je rasla iz dana u dan, privlačeći vjernike iz okolnih područja. Crkva je postala oaza mira, vjere i nade za sve koji su tražili duhovno ispunjenje.
        </p>
        <button className='transparentButton'>PROČITAJ VIŠE</button>
      </div>
      <div className='anchor'>
        <figure className='brewGuidesImage'>
          <img src={spinner}></img>
        </figure>
      </div>
    </div>
  );
}

export default BrewGuides;

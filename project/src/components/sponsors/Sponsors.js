import React, { useState } from 'react';
import sponsorsArray from "./sponsors.json"

function Sponsors() {

    const mouseEnterHandler = (event) => {

    let className = event.target.parentNode.className;
    let quoteText = event.target.parentNode.getAttribute('data-quote')

    if (className === 'photobanner') {
        className = event.target.className;
        quoteText = event.target.getAttribute('data-quote')
    }

    document.getElementsByClassName("photobanner")[0].childNodes.forEach( el => {el.classList.remove("quoteSelected")})

    document.querySelectorAll("." + className).forEach((entry)=> {
        entry.classList.add("quoteSelected");
    })

    console.log(quoteText)
    if(quoteText != null) setQuote(quoteText)
    
    }


    const populateScroller =  ()=> {
    let elements = []
    sponsorsArray.forEach((sponsor) => 
        elements.push(
        <figure className={sponsor.className} onMouseEnter={mouseEnterHandler} data-quote={sponsor.quote} >
            <img src={sponsor.path}></img>
        </figure>)
    )

    sponsorsArray.forEach((sponsor) => 
        elements.push(
        <figure className={sponsor.className} onMouseEnter={mouseEnterHandler} data-quote={sponsor.quote} >
            <img src={sponsor.path}></img>
        </figure>)
    )
    
    return elements

    }

    const [quote, setQuote] =  useState( "“The result is a richly flavored, super aromatic cup of coffee without the usual silt in the bottom. The press isn’t just for coffee, either—there’s also a tea filter available that isolates tea leaves to prevent oversteeping.”" )

  return (

    <div id='sponsors'>
        <h3>IN THE PRESS</h3>
        <p> {quote} </p>
        <div id='infinite-scroll'>
            <div className='photobanner'>
                {populateScroller()}
            </div>
        </div>
    </div>
  );
}

export default Sponsors;

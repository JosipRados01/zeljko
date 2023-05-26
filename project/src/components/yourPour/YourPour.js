import React from 'react';
import "./YourPour.css"
import imagesArray from "./yourPourImages.json"
import igIcon from "../../assets/images/instagram.svg"

//ovdje imagesArray mora imati paran broj slika
function YourPour() {

    
    const populateScroller =  ()=> {
        let elements = []
        imagesArray.forEach((image) => 
            elements.push(
            <figure>
                <img src={image}></img>
            </figure>)
        )
        imagesArray.forEach((image) => 
        elements.push(
        <figure>
            <img src={image}></img>
        </figure>) 
        )
        return elements
    
        }
    
  return (
    <div id='yourPour' >
        <div className='yourPourText'>
            <div>
                <h2>SHOW US YOUR BEST POUR.</h2>
                <p>Making coffee better — one cup at a time.<br></br> Share your best moments with us #ESPRO</p>
            </div>
            <button className='transparentButton'><img src={igIcon} alt='ig' ></img> FOLLOW US ON INSTAGRAM</button>
        </div>

        
        <div id='infinite-scroll-reverse'>
            <div className='photobanner-reverse'>
                {populateScroller()}
            </div>
        </div>

    </div>
  );
}

export default YourPour;

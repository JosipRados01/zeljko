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
                <h2>POGLEDAJ NAŠU CRKVU</h2>
                <p>Ponosni smo na ono što smo izgradili godinama.<br></br>Pogledaj i ti plodove našeg zajedničkog truda.</p>
            </div>
            <button className='transparentButton'><img src={igIcon} alt='ig' ></img> POGLEDAJ VIŠE SLIKA</button>
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

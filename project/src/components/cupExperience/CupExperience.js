import React, { useEffect, useState } from 'react';
import cupArray from "./cupExperience.json"

function CupExperience() { 
    const [counter, setCounter] = useState(0)
    const[showing, setShowing] = useState(cupArray[counter]);

    
useEffect( ()=> {
    setTimeout(()=> {
        setCounter((counter+1) % cupArray.length)
        setShowing(cupArray[counter])
    }, 3000)
}, [counter] )

  return (
    <div id='cupExperience'>
        <div className='experienceText flex-center-column'>
            <h2>
            MAKE EVERY CUP AN EXPERIENCE.
            </h2>
            <p>
            Have your French pressed coffee anywhere with ESPRO’s Travel Press.
             A double micro-filter eliminates grit for your smoothest cup on the go, 
             and the mug fits right in a car cup holder or bike’s water bottle cage.
            </p>
            <button className='transparentButton' >SHOP TRAVEL PRESS</button>
        </div>
        <div className='experienceImage'>
            <img className='inset' src={showing.image} ></img>
            <img className='frame' src={showing.frame} ></img>
        </div>
    </div>
  );
}

export default CupExperience;

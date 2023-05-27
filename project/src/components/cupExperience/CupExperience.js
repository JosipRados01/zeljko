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
            KRATKA POVJEST CRKVE
            </h2>
            <p>
            Župa Svetog Luke je crkva koja je osnovana 1991. godine kao rezultat sve većeg broja vjernika u području. Smještena u malom slikovitom selu, crkva je postala duhovno središte zajednice, pružajući vjernicima mjesto za molitvu, duhovni rast i zajedništvo.
            <br></br><br></br>
            U svojim ranim godinama, Župa Svetog Luke suočila se s mnogim izazovima. Svećenici su se aktivno angažirali u podizanju svijesti o važnosti vjere i razvijanju različitih pastoralnih programa. Crkva je postala poznata po svom angažmanu u humanitarnim akcijama i pružanju pomoći potrebitima u zajednici. Ova snažna predanost služenju drugima učvrstila je temelje župe i izgradila povjerenje i poštovanje vjernika.
            <br></br><br></br>
            Tijekom godina, Župa Svetog Luke proširila je svoje aktivnosti i izgradila nove pastoralne centre kako bi bolje služila vjernicima. Nastavila je organizirati duhovne obnove, molitvene susrete i vjeronaučnu katehezu za sve uzraste. Osim toga, crkva je osnovala i dječji zbor te plesnu skupinu kako bi mladima pružila priliku da se izraze kroz umjetnost i istovremeno razviju svoju vjeru.
            </p>
            <button className='transparentButton white' >PROČITAJ VIŠE</button>
        </div>
        <div className='experienceImage'>
            <img className='inset' src={showing.image} ></img>
            <img className='frame' src={showing.frame} ></img>
        </div>
    </div>
  );
}

export default CupExperience;

import React from 'react';
import "./FreshGrounds.css"
import playButton from '../../assets/images/play-button.svg';

function FreshGrounds() {
    
  return (
    <div id='freshGrounds'>
        <div className='fg_h1' >
        <h1 > FRESH GROUNDS. 01 </h1>
        <h1 > FRESH GROUNDS. 01 </h1>
        </div>
        <div className='fg_video flex-center-column' >
            <h3>EPISODE 01: THE GREAT MIGRATION</h3>
            <h2>FRESH GROUNDS</h2>
            <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.
            </p>

            <button className='transparentButton' ><img src={playButton} alt='>'></img> WATCH FILM</button>
        </div>
    </div>
  );
}

export default FreshGrounds;

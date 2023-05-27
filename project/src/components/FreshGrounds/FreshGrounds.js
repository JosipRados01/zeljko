import React from 'react';
import "./FreshGrounds.css"
import playButton from '../../assets/images/play-button.svg';
import SimpleMap from './SimpleMap';

function FreshGrounds() {
    
  return (
    <div id='freshGrounds'>
        <div className='fg_h1' >
        <h1 > "Crkva nije zgrada, već zajednica vjernika koji zajedno hodaju putem Božjim." </h1>
        </div>
        <div className='fg_video' >
          <SimpleMap></SimpleMap>
        </div>
    </div>
  );
}

export default FreshGrounds;

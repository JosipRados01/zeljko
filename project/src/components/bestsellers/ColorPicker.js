import React from 'react';

function ColorPicker({color}) {
  return (
    <div className='colorPickerDiv' style={{ backgroundColor: color }}></div>
  )
}

export default ColorPicker;
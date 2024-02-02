// BoxColor.js 

import React from 'react';

const BoxColor = ({r, g, b}) => {
    const validR = Math.min(255, Math.max(0, r));
    const validG = Math.min(255, Math.max(0, g));
    const validB = Math.min(255, Math.max(0, b))
    const rgbColor = `rgb(${validR},${validG},${validB})`;
    const hexColor = `#${validR.toString(16).padStart(2, '0')}${validG.toString(16).padStart(2, '0')}${validB.toString(16).padStart(2, '0')}`;

//An inline style is required for the background and object color
    const boxStyle = {
        backgroundColor: `rgb(${validR}, ${validG}, ${validB})`,
        width: '100%',
        height: '100px',
        //border: '1px solid #000',
        padding : 0,
        margin: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
      };
    
      return (
        <div style={boxStyle}>
          <p>{rgbColor}<br/>{hexColor}</p>
        </div>
      );
};

export default BoxColor;
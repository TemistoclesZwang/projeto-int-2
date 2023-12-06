// import React from 'react';
import fastFood from '../../assets/home/fast-food.png';

interface GrayscaleFilterImgProps {
  isColored: boolean;
}

export function GrayscaleFilterImg({isColored}: GrayscaleFilterImgProps) {
  return (
    <div className='containerImgGray'>
      {isColored ? (
        <img 
        src={fastFood} 
        alt="Example" 
        className='img-my-mark'/>
      ) : (
        <img
          src={fastFood}
          alt="Example"
          style={{ filter: 'grayscale(100%)' }}
          className='img-my-mark'
        />
      )}
    </div>
  );
};

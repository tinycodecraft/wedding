import React from 'react'
import { StnButtonProps } from './Gob';
import useBtnStyles from './Hooks/useBtnStyles';

function StnButton({ color, radius }:StnButtonProps) {
  const { classes } = useBtnStyles({ color, radius });
  return (
    
    <button className={classes.button}>
      {color} button with {radius}px radius
    </button>    

  );
}
export default StnButton
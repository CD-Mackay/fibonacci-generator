import React from 'react';

export default function ListItem(props) {

  const view = () => {
   console.log(props.onSelect(props.numone, props.numTwo, props.numThree));
  }
  return (
   <button onClick={view}>{props.numone}{props.numTwo}</button>
  )
}
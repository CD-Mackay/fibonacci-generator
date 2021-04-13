import React from 'react';

export default function ListItem(props) {

  const view = () => {
   console.log(props.onSelect(props.numone, props.numTwo));
  }
  return (
   <button onClick={view}>{props.numone}{props.numTwo}</button>
  )
}
import React from 'react';

export default function ListItem(props) {

  const view = () => {
    props.onSelect();
  }
  
  return (
    <div className="list-item">
   <button onClick={view}>{props.numone}, {props.numTwo}, {props.numThree}</button>
   <button>Delete</button>
   </div>
  )
}
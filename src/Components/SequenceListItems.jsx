import React from 'react';

export default function ListItem(props) {

  const view = () => {
    props.onSelect(props.numone, props.numTwo, props.numThree);
  }

  const removeSeq = () => {
    console.log('deleteing', props.id);
    props.onDelete(props.id);
  }
  
  return (
    <div className="list-item">
   <button onClick={view}>{props.numone}, {props.numTwo}, {props.numThree}</button>
   <button onClick={removeSeq}>Delete</button>
   </div>
  )
}